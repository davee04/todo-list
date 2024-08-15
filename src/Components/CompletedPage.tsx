import React, { useState } from "react";
import TitleComponent from "./Title";
import "./CompletedPage.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { TodoItem } from "./SearchBar";
import { LiTest } from "./ListDisplay";
import { ListActions } from "../App";

interface CompletedPageProps {
  lists: TodoItem[];
  listActions: ListActions;
}

function Complete({ lists, listActions }: CompletedPageProps) {
  const nav = useNavigate();
  return (
    <div>
      <TitleComponent message="Completed Section" />
      <Button type="primary" onClick={() => nav(-1)}>
        Back
      </Button>
      <div className="Page-layout">hello</div>
      <LiTest
        lists={lists.filter((item) => item.completed)}
        onDelete={listActions.deleteItem}
        updatedItem={listActions.updateItem}
      />
    </div>
  );
}

export default Complete;
