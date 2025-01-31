import { Select } from "antd";

function Filter({ handleFilterChange, filter }) {
  return (
    <div>
      <Select
        placeholder="Filter by Sunlight"
        value={filter}
        onChange={handleFilterChange}
        style={{ marginTop: "10px", marginBottom: "20px", width: "200px" }}
      >
        <Select.Option value="">All</Select.Option>
        <Select.Option value="full_sun">Full Sun</Select.Option>
        <Select.Option value="part_shade">Part Shade</Select.Option>
        <Select.Option value="full_shade">Full Shade</Select.Option>
      </Select>
    </div>
  );
}

export default Filter;


