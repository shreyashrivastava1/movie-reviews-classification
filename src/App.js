import BackgroundEffect from "./components/BackgroundEffect";
import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <BackgroundEffect />
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
