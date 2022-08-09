import "./Spinner.css";

const sizes = {
  small: 24,
  medium: 32,
  large: 48,
};

const Spinner = ({ size = "medium" }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: sizes[size] ?? size, alignSelf: "center", margin: 24 }}
  >
    <circle cx="50" cy="50" r="45" />
  </svg>
);

export default Spinner;
