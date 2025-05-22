import { useState, useEffect } from "react";
import Select from "react-select";
// import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router";
import { getMALGenre, updateMALGenre, typeMal, statusMAL, ratingMAL } from "../../data/genres";
import { Wrapper, FilterLogo, ErrorLogo, CloseLogo, Content } from "./Filter.styles";
import fetchingData from "../../API";

const Filter = ({ searchParams, scrollToTop }) => {

  const [filter, setFilter] = useState(false);
  const [stateParams, setStateParams] = useState(null)
  const [emptyFilter, setEmptyFilter] = useState(false)

  // options
  const [genreOptions, setGenreOptions] = useState(null);
  const [typeOptions, setTypeOptions] = useState(null);
  const [statusOptions, setStatusOptions] = useState(null);
  const [ratingOptions, setRatingOptions] = useState(null);

  // selected
  const [inputValue, setInputValue] = useState('')
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const navigate = useNavigate();

  // const animatedComponents = makeAnimated();

  // easily map to create Select comp
  const optionsGenre = {
    label: "Genres",
    selected: selectedGenre,
    setSelectedFn: setSelectedGenre,
    options: genreOptions
  };
  const optionsType = {
    label: "Type", 
    selected: selectedType, 
    setSelectedFn: setSelectedType, 
    options: typeOptions
  };
  const optionsStatus = {
    label: "Status", 
    selected: selectedStatus, 
    setSelectedFn: setSelectedStatus, 
    options: statusOptions
  };
  const optionsRating = {
    label: "Rating", 
    selected: selectedRating, 
    setSelectedFn: setSelectedRating, 
    options: ratingOptions
  };

  // check to see MAL genres have been fetched or not
  if (!sessionStorage.getItem("malGenres")) {
    fetchMALGenres()
  } else {
    let getMALGenresStored = JSON.parse(sessionStorage.getItem("malGenres"))
    updateMALGenre(getMALGenresStored)
  }

  async function fetchMALGenres() {
    const malGenres = await fetchingData.GetAnimeGenres();

    updateMALGenre(malGenres.data)
    sessionStorage.setItem("malGenres", JSON.stringify(malGenres.data))
  }


  function openFilter() {
    if (filter) {
      setFilter(false)
      setEmptyFilter(false)
    } else { 
      setFilter(true)
    }
  }

  function submitFilter(e) {
    e.preventDefault();
    let { page, sfw, ...others } = stateParams
    let allSelected = [].concat(selectedGenre ?? [], [selectedRating ?? {}], [selectedStatus ?? {}], [selectedType ?? {}])

    function combineObjectArraysToString(arr) {
      let resultString = "";

      for (const objArray of arr) {
          if (objArray.label) {
            resultString += objArray.label + ",";
          }
        }

      return resultString.trim();
    }

    let selectedParams = combineObjectArraysToString(allSelected)
    
    let urlParams = inputValue ? selectedParams + inputValue : selectedParams.slice(0, selectedParams.length - 1)
    console.log("urlParams", urlParams)
    Object.keys(others).length > 0 ? navigate(`/search/${urlParams}`, { state: { params: stateParams }}) : setEmptyFilter(true);
    setFilter(!(Object.keys(others).length > 0))
    scrollToTop()
  }

  const handleChange = (selected, filterType, optionObj) => {
    console.log("handleChange", selected, filterType)
    optionObj["setSelectedFn"](selected)

    let checkSelected = filterType === "genres" ? selected.length > 0 : selected
    
    if (checkSelected) {
      let optForParam = filterType === "genres" ? selected.map((el) => el.value) : selected.value
      setStateParams({ ...stateParams, [filterType]: optForParam})
      setEmptyFilter(false)
    } else {
      let deleteClearedVar = { ...stateParams }
      delete deleteClearedVar[filterType]
      setStateParams(deleteClearedVar)
    }
  }

  // useEffect to map back the selected inputs into the filter box
  useEffect(() => {
    if (searchParams) {
      let { q } = searchParams
      
      if (q) {
        setInputValue(q)
        setStateParams({...stateParams, q})
      }

      [optionsGenre, optionsRating, optionsStatus, optionsType].forEach(el => {
        let small = el.label.toLowerCase()
        let val = searchParams[`${small}`]
        if (val && el.options) {
          let selectedMap = small === "genres" ? el.options.filter(el => val.includes(el.value)) : el.options.find(el => val === el.value)
          el.setSelectedFn(selectedMap)
        }
      })
    }
  }, [searchParams]);

  // useEffect to map options list for Select component
  useEffect(() => {
    const genreData = getMALGenre();
    const genres = Object.values(genreData).map(g => ({
      value: g.mal_id,
      label: g.name
    }));
    setGenreOptions(genres);

    const types = Object.entries(typeMal).map(([key, label]) => ({
      value: key,
      label
    }));
    setTypeOptions(types);

    const statuses = Object.entries(statusMAL).map(([key, label]) => ({
      value: key,
      label
    }));
    setStatusOptions(statuses);

    const ratings = Object.entries(ratingMAL).map(([key, label]) => ({
      value: key,
      label
    }));
    setRatingOptions(ratings);
  }, []);

  return (
    <Wrapper>
      <div className="filter-btn">
        <button
          onClick={openFilter}
          className={`${filter && "active"} filterButton`}
        >
          Filters
          <FilterLogo className={`${filter && "active"}`} />
        </button>
      </div>
      { emptyFilter && 
        <div className="emptyFilter">
          <ErrorLogo/>
          Please provide at least one searching criteria in the filter
        </div>
      }
      <Content className={`${filter && "active"}`}>
        <div className="input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="q"
            id="title"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              let val = { ...stateParams }
              if (e.target.value === '') {
                delete val.q
              } else {
                val.q = e.target.value
                setEmptyFilter(false)
              }
              setStateParams(val)
            }}
          />
          {
            inputValue !== "" && 
              <CloseLogo 
                onClick={() => {
                  setInputValue("")
                  setStateParams(prev => delete prev.q)
                }}
              />
          }
        </div>

        {[optionsGenre, optionsType, optionsStatus, optionsRating].map(
          (el, index) => {
            let opt = el["label"];
            let small = opt.toLowerCase();
            return (
              <div key={index} className="input">
                <label htmlFor={small}>{opt}</label>
                <Select
                  className={`${small} custom-select-class`}
                  autoFocus={false}
                  placeholder={""}
                  name={small}
                  id={small}
                  closeMenuOnSelect={false}
                  // components={animatedComponents}
                  isClearable
                  isMulti={small === "genres"}
                  isSearchable={small === "genres"}
                  options={el["options"]}
                  value={el["selected"]}
                  onChange={(e) => handleChange(e, small, el)}
                />
              </div>
            );
          }
        )}       

        <button
          type="button"
          className="search-btn"
          onClick={(e) => submitFilter(e)}
        >
          Search
        </button>
      </Content>
    </Wrapper>
  );
};

export default Filter;
