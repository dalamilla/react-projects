import './Display.css';

const Display = (props) => {
  return (
    <div id="screen">
      <div id="formula">
        <span>{props.expression}</span>
      </div>
      <div id="display">
        <span>{props.currValue}</span>
      </div>
    </div>
  );
};

export default Display;
