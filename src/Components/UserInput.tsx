import React, { useState } from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import "./Title.css";
import { Divider } from "antd";
import { Button, Flex } from "antd";
import { v4 as uuidv4 } from "uuid";

const { Search } = Input;
interface Values {
  id: string;
  value: string;
}

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const UserList: React.FC = () => {
  const [lists, setList] = useState<Values[]>([]);

  const onSearch = (value: string) => {
    const newList: Values = {
      id: uuidv4(),
      value: value,
    };
    setList([...lists, newList]);

    // const onUpdate = (newValue: string) => {
    //   const setList: Values = {
    //     id: lists.length,
    //     value: newValue,
    //   };
    // };
  };

  const onDelete = (id: string) => {
    setList(lists.filter((a) => a.id !== id));
  };

  //should be a functional component
  const LiTest: React.FC = () => {
    return (
      <div>
        {lists.map((list) => (
          <div>
            <Checkbox className="a" onChange={onChange}>
              <li key={list.id}>
                {list.value}
                <Button type="primary" onClick={() => onDelete(list.id)}>
                  Delete
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    setList(lists.filter((a) => a.id !== list.id));
                  }}
                >
                  update
                </Button>
              </li>
            </Checkbox>
            <Divider className="solid" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Search-position">
      <Search
        placeholder="input search text"
        enterButton="Enter"
        size="large"
        onSearch={onSearch}
      />
      {/* <LiTest />  should be removed*/}
    </div>
  );
};
export default UserList;
