import { useState, useEffect, useId } from "react";

function NetworkControl() {
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useLocalStorage("NETWORK_DELAY", 2000);
  const [variance, setVariance] = useLocalStorage("NETWORK_VARIANCE", 1500);

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "p") {
        setIsVisible((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return isVisible ? (
    <div className="network-controls">
      <div>Network Controls</div>

      <Control
        label="Delay"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
      />

      <Control
        label="Variance"
        value={variance}
        onChange={(e) => setVariance(Number(e.target.value))}
      />
    </div>
  ) : null;
}

function Control({ label, value, onChange, min = 0, max = 5000, step = 500 }) {
  const id = useId();
  return (
    <div className="control">
      <label htmlFor={id}>
        {label} <span> {value / 1000}s</span>
      </label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div></div>
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default NetworkControl;
