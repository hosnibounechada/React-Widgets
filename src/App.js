// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
/*
const items = [
  {
    title: "What is React?",
    content: "React is javascript front-end framework",
  },
  {
    title: "What is Node.js?",
    content: "Node.js is javascript back-end framework",
  },
  {
    title: "What is github?",
    content: "github is source control framework",
  },
];
*/
const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <br />
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
