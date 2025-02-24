import BE_3 from "./components/BE_3";
import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const analyseSentiment = async () => {
    if (!text.trim()) return;
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch sentiment");
    }
    const data = await response.json();
    setSentiment(data.sentiment);
  };
  return (
    <div className="min-h-screen w-full bg-black font-poppins text-white flex flex-col items-center justify-center px-4">
      {/* <BackgroundEffect /> */}
      <BE_3 />

      <section className="flex flex-col items-center justify-center w-full gap-8 z-10">
        <Header />
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <InputField text={text} setText={setText} />
          <SubmitButton analyseSentiment={analyseSentiment} />
        </div>
        {sentiment && (
          <div className="mt-4 text-lg font-semibold text-cyan-400">
            Sentiment: {sentiment}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
