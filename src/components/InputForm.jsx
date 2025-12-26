import { useState } from "react";
import API from "../services/api";

function InputForm({ onSignalAdded }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      setLoading(true);
      setError(null);

      await API.post("/signals", { text });

      setText("");
      onSignalAdded(); // refresh list
    } catch (err) {
      setError("Failed to submit signal");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="input-card">
    <h3>Submit Raw Input</h3>

    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        placeholder="Enter any operational input..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>

    {error && <p className="error">{error}</p>}
  </div>
);

}

export default InputForm;
