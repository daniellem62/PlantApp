import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const onChange = (e) => {
  console.log(e);
};


function Search() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Search plants..." allowClear onChange={onChange} />
      
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </form>
  );
}

export default Search;
