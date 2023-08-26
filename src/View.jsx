import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const View = () => {
  return (
    <div className="d-flex justify-content-between">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default View;
