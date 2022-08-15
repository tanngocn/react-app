import React from "react";
import Bu from "assets/bu.jpg";
import AppButton from "components/Button";

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <img src={Bu} alt="" />
      <AppButton/>
    </>
  );
};

export default App;
