import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import CompletedPage from "./Components/CompletedPage";
import AppContent from "./WrapperComponent";
import { TodoItem } from "./Components/SearchBar";

export interface ListActions {
  addItem: (value: string) => void;
  updateItem: (item: TodoItem) => void;
  deleteItem: (id: string) => void;
}

function App() {
  const [lists, setList] = useState<TodoItem[]>([]);

  const addItem = (value: string) => {
    const newList: TodoItem = {
      id: uuid(),
      value: value,
      completed: false,
    };
    setList([...lists, newList]);
  };

  const updatedItem = (item: TodoItem) => {
    const newList = lists.map((value: TodoItem) =>
      value.id === item.id ? item : value
    );
    setList(newList);
  };

  const onDelete = (id: string) => {
    setList(lists.filter((a) => a.id !== id));
  };

  const listActions: ListActions = {
    addItem,
    updateItem: updatedItem,
    deleteItem: onDelete,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppContent lists={lists} listActions={listActions} />}
        />
        <Route
          path="/CompletedPage"
          element={<CompletedPage lists={lists} listActions={listActions} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
