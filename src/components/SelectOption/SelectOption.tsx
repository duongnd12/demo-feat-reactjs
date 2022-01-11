import { Select } from "antd";

const { Option } = Select;

interface ISeclectOptionProps {
    onSelectChange: (value: string) => void
    valueSelect: number[]
}

const SelectOption = (props: ISeclectOptionProps) => {
  return (
    <div>
      <Select
        defaultValue="All data"
        style={{ width: 120 }}
        onChange={props.onSelectChange}
      >
          <Option value="All data">All data</Option>
        {
          props.valueSelect.map((item, index) => {
            return <Option value={item} key={index}>{item}</Option>
          })
      }
      </Select>
    </div>
  );
};

export default SelectOption;
