
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const onChange = (e) => {
  console.log(e);
};


import { useState } from "react";

function Search({ handleSearch }) {
  const [query, setQuery] = useState(""); // Local state for search input


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query); // Pass the search query to the parent component
    setQuery(""); // Reset the search query after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query} // Controlled input, value tied to local state
        onChange={(e) => setQuery(e.target.value)} // Update local query state
        placeholder="Search plants..."
        allowClear onChange={onChange}
      />
        <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </form>
  );
}

export default Search;
