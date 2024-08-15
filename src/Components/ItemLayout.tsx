import React, { useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { TodoItem } from "./SearchBar";
import { Button } from "antd";
import { Checkbox } from "antd";

export interface LiItemsProps {
  item: TodoItem;
  onDelete: (value: string) => void;
  updatedItem: (value: TodoItem) => void;
}

export const ItemLayout: React.FC<LiItemsProps> = ({
  item,
  onDelete,
  updatedItem,
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editName, setEditName] = useState(item.value);

  const onInputChange = (updatedItem: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(updatedItem.target.value);
    console.log(setEditName);
  };

  const cancelFunction = (value: boolean) => {
    return setEditMode(value);
  };

  // const CancelButton = ({ cancelFunction }) => {
  //   return (
  //     <div>
  //       <Button type="primary" onClick={() => cancelFunction(false)}>
  //         Cancel
  //       </Button>
  //     </div>
  //   );
  // };

  const onChecked = (value: CheckboxChangeEvent) => {
    updatedItem({ ...item, completed: value.target.checked });
  };

  console.log(editName);

  return (
    <div className="a">
      <Checkbox onChange={onChecked} checked={item.completed}></Checkbox>
      <li key={item.id}>
        {editMode ? (
          <>
            <input value={editName} onChange={onInputChange}></input>
          </>
        ) : (
          <p onClick={() => cancelFunction(true)}>{item.value}</p>
        )}
        <Button type="primary" onClick={() => onDelete(item.id)}>
          Delete
        </Button>

        <Button
          type="primary"
          value={editName}
          onClick={() => {
            updatedItem({
              ...item,
              value: editName,
            });
            setEditName(editName);
            setEditMode(false);
          }}
        >
          update
        </Button>

        {editMode ? (
          <Button
            type="primary"
            onClick={() => {
              cancelFunction(false);
            }}
          >
            cancel
          </Button>
        ) : null}
      </li>
    </div>
  );
};
