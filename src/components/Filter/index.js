// import React, { useRef, useState } from "react";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// import { useNavigate } from "react-router";
// import { MLGenre, typeMal, statusMAL, ratingMAL } from "../../data/genres";
// import { Wrapper, FilterLogo, Content } from "./Filter.styles";

// const Filter = ({ initial, test, text }) => {
//   console.log(initial);

//   const [filter, setFilter] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState([]);
//   const [selectedType, setSelectedType] = useState([]);
//   const [selectedRating, setSelectedRating] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState([]);
//   const navigate = useNavigate();
//   const inputTextRef = useRef();

//   const animatedComponents = makeAnimated();

//   const optionsGenre = ["Genre", setSelectedGenre];
//   const optionsType = ["Type", setSelectedType];
//   const optionsStatus = ["Status", setSelectedStatus];
//   const optionsRating = ["Rating", setSelectedRating];

//   function populateArray(object, array) {
//     for (let x = 2; x < Object.keys(object).length + 2; x++) {
//       array[x] = {
//         value: Object.keys(object)[x - 2],
//         label: Object.values(object)[x - 2],
//       };
//     }
//   }

//   populateArray(MLGenre, optionsGenre);
//   populateArray(typeMal, optionsType);
//   populateArray(statusMAL, optionsStatus);
//   populateArray(ratingMAL, optionsRating);

//   function openFilter() {
//     filter ? setFilter(false) : setFilter(true);
//   }

//   function submitFilter(e) {
//       e.preventDefault();
//       let inputValue = inputTextRef.current.value;
//       let inputParam = `${inputValue ? encodeURI(inputValue) : ""}`;
//       let searchParam = "";
//       let name = [["genre", selectedGenre], ["type", selectedType], ["status", selectedStatus], ["rating", selectedRating]];
//       name.forEach((el, index) => {
//           searchParam = searchParam + `${el[0]}=${el[1]}${index !== name.length - 1 ? "&" : ""}`;
//       })
//       let params = new URLSearchParams(searchParam);
//       let toDelete = []
//       params.forEach((value, key) => {
//           if (value.length < 1) {
//               toDelete.push(key);
//           }
//       })
//       toDelete.forEach((el) => {
//           params.delete(el)
//       })
//       let newParams = params.toString();
//       let finalParam = `${newParams ? inputParam + "&" + newParams : inputParam}`
//       navigate(`/search/${finalParam}`)
//   }

//   const handleChange = (options, type) => {
//     let option = options.map((el) => el.value);
//     if (type.name === "genre") {
//       setSelectedGenre(option);
//     } else if (type.name === "type") {
//       setSelectedType(option);
//     } else if (type.name === "status") {
//       setSelectedStatus(option);
//     } else if (type.name === "rating") {
//       setSelectedRating(option);
//     }
//   };

//   return (
//     <Wrapper>
//       {text}
//       <button onClick={openFilter} className="filterButton">
//         Filters
//         <FilterLogo className={`${filter && "active"}`} />
//       </button>
//       <Content className={`${filter && "active"}`}>
//         <div className="input">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             name="q"
//             id="title"
//             defaultValue={initial[0]}
//             ref={inputTextRef}
//           />
//         </div>

//         {[optionsGenre, optionsType, optionsStatus, optionsRating].map(
//           (el, index) => {
//             let opt = el[0];
//             let small = opt[0].toLowerCase() + opt.slice(1, opt.length);
//             return (
//               <div key={index} className="input">
//                 <label htmlFor={small}>{opt}</label>
//                 <Select
//                   className={`${small} select`}
//                   autoFocus={false}
//                   placeholder={opt}
//                   name={small}
//                   id={small}
//                   closeMenuOnSelect={false}
//                   components={animatedComponents}
//                   isMulti
//                   options={el.slice(2, el.length)}
//                   onChange={handleChange}
//                 />
//               </div>
//             );
//           }
//         )}

//         <button type="button" onClick={(e) => test(e)}>
//           Search
//         </button>
//       </Content>
//     </Wrapper>
//   );
// };

// export default Filter;
