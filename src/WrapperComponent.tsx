import React, { useState } from "react";
import "./App.css";
import TitleComponent from "./Components/Title";
//import UserList from "./Components/UserInput";
import SearchBar, { TodoItem } from "./Components/SearchBar";
import { v4 as uuid } from "uuid";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { LiTest } from "./Components/ListDisplay";
import { Button, CheckboxProps } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ListActions } from "./App";

interface AppContentProps {
  lists: TodoItem[];
  listActions: ListActions;
}

function AppContent({ lists, listActions }: AppContentProps) {
  const navigate = useNavigate();

  return (
    <div>
      <TitleComponent message="Welcome to the best To-do list" />
      <Button
        type="primary"
        size="large"
        onClick={() => navigate("/CompletedPage")}
      >
        Completed Section
      </Button>
      <SearchBar lists={lists} addItem={listActions.addItem} />
      <LiTest
        lists={lists.filter((item) => !item.completed)}
        onDelete={listActions.deleteItem}
        updatedItem={listActions.updateItem}
      />
    </div>
  );
}

export default AppContent;
