import React, { useState } from "react";
import "./ListDisplay.css";
import { Divider } from "antd";
import { TodoItem } from "./SearchBar";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ItemLayout } from "./ItemLayout";

interface LiTestProps {
  lists: TodoItem[];
  onDelete: (value: string) => void;
  updatedItem: (item: TodoItem) => void;
}

export const LiTest: React.FC<LiTestProps> = ({
  lists,
  onDelete,
  updatedItem,
}) => {
  // const handleUpdate = (id: number) => {};

  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>
          <ItemLayout
            item={list}
            onDelete={onDelete}
            updatedItem={updatedItem}
          />
          {/* //<Divider className="solid" /> */}
        </div>
      ))}
    </div>
  );
};
