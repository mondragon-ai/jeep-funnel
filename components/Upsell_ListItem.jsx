import HtmlReactParser from "html-react-parser";

const Upsell_ListItem = ({ text }) => {
  return (
    <div
      className="de elBullet elMargin0 ui-droppable mfs_18 de-editable"
      id="tmp_list-47178-160"
    >
      <ul className="ne elBulletList elBulletListNew elBulletList2 listBorder0">
        <li style={{ fontSize: "24px" }}>
          <i className="fa-fw fas fa-circle" />
          {HtmlReactParser(text)}
        </li>
      </ul>
    </div>
  );
};

export default Upsell_ListItem;
