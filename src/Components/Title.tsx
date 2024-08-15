import React from "react";
import "./Title.css";

interface TitleProps {
  message: string;
}

export default function TitleComponent({ message }: TitleProps) {
  return <div className="App-header">{message}</div>;
}
