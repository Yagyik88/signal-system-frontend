import { useState } from "react";
import InputForm from "./components/InputForm";
import SignalList from "./components/SignalList";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app-container">
      <h1>Signal System</h1>
      <p className="subtitle">
        Turn unstructured operational inputs into meaningful signals
      </p>

      <InputForm onSignalAdded={() => setRefresh(!refresh)} />
      <SignalList key={refresh} />
    </div>
  );
}


export default App;
