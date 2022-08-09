export default function ErrorMessage({ error }) {
  return <div className="error-message">Error: {error.message}</div>;
}
