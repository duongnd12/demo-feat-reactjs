import React from "react";


interface ISearchBarProps {
}

const SearchBar = (props:ISearchBarProps) => {

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form action="">
        <input style={{ width: 200 }} type="text" placeholder="Search..." />
        <div>
          <input type="checkbox" value="checkbox" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
