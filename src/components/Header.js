import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/React-Widgets/" className="item">
        Home
      </Link>
      <Link href="/React-Widgets/accordion" className="item">
        Accordion
      </Link>
      <Link href="/React-Widgets/search" className="item">
        Search
      </Link>
      <Link href="/React-Widgets/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/React-Widgets/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
