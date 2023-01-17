import HtmlReactParser from "html-react-parser";

const Upsell_ListItem = ({ text }) => {
  return (
    <div className="upsell_list">
      <ul>
        <li>
          <i className="fa-fw fas fa-circle" />
          {HtmlReactParser(text)}
        </li>
      </ul>
    </div>
  );
};

export default Upsell_ListItem;
