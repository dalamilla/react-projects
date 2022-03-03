import './Panel.css';

const Panel = (props) => {
  return (
    <div id="panel">
      <button id="clear" onClick={props.allClear} value="AC">
        AC
      </button>
      <button id="seven" onClick={props.number} value="7">
        7
      </button>
      <button id="eight" onClick={props.number} value="8">
        8
      </button>
      <button id="nine" onClick={props.number} value="9">
        9
      </button>
      <button id="divide" onClick={props.operator} value="/">
        /
      </button>
      <button id="four" onClick={props.number} value="4">
        4
      </button>
      <button id="five" onClick={props.number} value="5">
        5
      </button>
      <button id="six" onClick={props.number} value="6">
        6
      </button>
      <button id="multiply" onClick={props.operator} value="x">
        x
      </button>
      <button id="one" onClick={props.number} value="1">
        1
      </button>
      <button id="two" onClick={props.number} value="2">
        2
      </button>
      <button id="three" onClick={props.number} value="3">
        3
      </button>
      <button id="subtract" onClick={props.operator} value="‑">
        ‑
      </button>
      <button id="zero" onClick={props.number} value="0">
        0
      </button>
      <button id="decimal" onClick={props.decimal} value=".">
        .
      </button>
      <button id="equals" onClick={props.evaluate} value="=">
        =
      </button>
      <button id="add" onClick={props.operator} value="+">
        +
      </button>
    </div>
  );
};

export default Panel;
