import "./styles.css";
const AlphabetPad = (props) => {
  return (
    <ul id="keyboard">
      {props.ItemsList.map(function (item, index) {
        var data = props.Iscapson ? item.toUpperCase() : item;
        return (
          <li
            onClick={() => props.Senddata(data)}
            key={index}
            className="letter"
          >
            {data}
          </li>
        );
      })}
    </ul>
  );
};

export default AlphabetPad;
