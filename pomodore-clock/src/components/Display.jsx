import './Display.css';

const Display = (props) => {
  return (
    <div className="display">
      <div id="timer-label">
        <span>{props.title}</span>
      </div>
      <div id="time-left" className="screen">
        <span>{props.time()}</span>
      </div>
      <div className="brand">
        <span>Pomodore Clock</span>
      </div>
    </div>
  );
};

export default Display;
