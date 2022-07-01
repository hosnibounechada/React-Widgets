import { useEffect, useState } from "react";
import wikipedia from "../apis/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("computer programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get("", {
        params: {
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          target="blank"
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter search term</label>
          <input
            id="search"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
