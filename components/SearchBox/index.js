import {debounce} from '../../utils/constants'
const SearchBox = ({query, setQuery}) => {
  return (
    <div className="p-5">
      <input 
        type="search" 
        className="w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none p-3 rounded" 
        placeholder="Search for any job, title, keywords or company"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
        }}
        ></input>
    </div>
  );
};

export default SearchBox;
