import { Link } from "react-router-dom";
import { Wrapper, Content, List } from "./BrowseBar.styles";

const BrowseBar = ({ browse, index }) => {
  return (
    <Wrapper className={`${browse && "active"}`}>
      <Content>
        <List className={index === 1 && "active"}>
          <Link to="/series">Series</Link>
        </List>
        <List className={index === 2 && "active"}>
          <Link to="/movies">Movies</Link>
        </List>
        <List className={index === 3 && "active"}>
          <Link to="/new_popular">New & Popular</Link>
        </List>
      </Content>
    </Wrapper>
  );
};

export default BrowseBar;
