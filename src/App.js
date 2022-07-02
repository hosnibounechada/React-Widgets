import { useState } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

// Color Options
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
      <Header />
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/accordion">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select A Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
