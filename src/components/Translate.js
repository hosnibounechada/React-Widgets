import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import google_translate from "../apis/google_translate";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const translate = async () => {
      const { data } = await google_translate.post(
        "",
        {},
        {
          params: {
            q: text,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter text</label>
          <input
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select A Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <h3>Output</h3>
      <div>
        <h1 className="ui header">{translated}</h1>
      </div>
    </div>
  );
};

export default Translate;
