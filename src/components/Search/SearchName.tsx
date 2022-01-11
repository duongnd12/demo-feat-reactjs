import Search from "antd/lib/input/Search";


const SearchName = (props: {
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <div style={{margin: '10px 0', width: '200px'}}>
        <Search placeholder="Searching..." onChange={props.onSearchChange} />
      </div>
    );
  };

export default SearchName;