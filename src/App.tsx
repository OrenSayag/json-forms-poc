import React from "react";
import "./App.css";
import PatientSignUpFormTailwind from "./components/PatientSignUpFormTailwind";
import PatientSignUpFormMaterial from "./components/PatientSignUpFormMaterial";

function App() {
  return (
    <div dir={"rtl"} className="App p-24 border-black bg-gray-300 min-h-screen">
      <PatientSignUpFormMaterial />
      {/*<PatientSiegnUpFormTailwind />*/}
    </div>
  );
}

export default App;
