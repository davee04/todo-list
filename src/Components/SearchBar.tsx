//import React, { useState } from "react";
import { Input } from "antd";
import "./SearchBar.css";
// import "./UserInput";

const { Search } = Input;
export interface TodoItem {
  id: string;
  value: string;
  completed: boolean;
}

export interface UserBarProps {
  lists: TodoItem[];
  //setList: React.Dispatch<React.SetStateAction<Values[]>>;
  addItem: (value: string) => void;
}

const UserBar: React.FC<UserBarProps> = ({ addItem }) => {
  return (
    <div className="Search-position">
      <Search
        placeholder="input search text"
        enterButton="Enter"
        size="large"
        onSearch={addItem}
      />
    </div>
  );
};
export default UserBar;
