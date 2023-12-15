import React from "react";
import HomeScreen from "./componenets/HomeScreen";
import { Route, Routes } from "react-router-dom";
import PostScreen from "./componenets/PostScreen";
import Error from "./componenets/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:id_R" element={<PostScreen />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
