import { useEffect, useState } from "react";
import API from "../services/api";
import SignalCard from "./SignalCard";

function SignalList() {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSignals = async () => {
    setLoading(true);
    const res = await API.get("/signals");
    setSignals(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSignals();
  }, []);

  if (loading) return <p>Loading signals...</p>;

 return (
  <div>
    <h3>Processed Signals</h3>

    {signals.length === 0 && (
      <p className="empty">No signals yet. Submit one above 👆</p>
    )}

    {signals.map((signal) => (
      <SignalCard key={signal.id} signal={signal} />
    ))}
  </div>
);

}

export default SignalList;
