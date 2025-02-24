import BE_2 from "./components/BE_2";
import BE_3 from "./components/BE_3";
import BackgroundEffect from "./components/BackgroundEffect";
import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
function App() {
  return (
    <div className="min-h-screen w-full bg-black font-poppins text-white flex flex-col items-center justify-center px-4">
      {/* <BackgroundEffect /> */}
      <BE_3 />

      <section className="flex flex-col items-center justify-center w-full gap-8 z-10">
        <Header />
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <InputField />
          <SubmitButton />
        </div>
      </section>
    </div>
  );
}

export default App;
