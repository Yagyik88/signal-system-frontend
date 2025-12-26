function SignalCard({ signal }) {
  const severityStyles = {
    HIGH: { border: "#dc2626", badge: "#fee2e2" },
    MEDIUM: { border: "#d97706", badge: "#fef3c7" },
    LOW: { border: "#0284c7", badge: "#ecfeff" },
    UNKNOWN: { border: "#6b7280", badge: "#e5e7eb" }
  };

  const style = severityStyles[signal.severity] || severityStyles.UNKNOWN;

  return (
    <div
      className="signal-card"
      style={{ borderLeft: `5px solid ${style.border}` }}
    >
      <div className="signal-top">
        <span className="signal-type">{signal.type}</span>
        <span
          className="signal-severity"
          style={{ backgroundColor: style.badge }}
        >
          {signal.severity}
        </span>
      </div>

      <div className="signal-raw">
        {signal.rawInput?.rawText}
      </div>

      <div className="signal-meta">
        <span><strong>Category:</strong> {signal.category}</span>
        <span><strong>Confidence:</strong> {signal.confidenceScore}</span>
        <span><strong>Tags:</strong> {signal.tags?.join(", ")}</span>
      </div>
    </div>
  );
}

export default SignalCard;
