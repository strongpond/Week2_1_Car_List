import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main, Detail } from "./pages";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
