import { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () =>
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
  }, []);

  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={index}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label>Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
