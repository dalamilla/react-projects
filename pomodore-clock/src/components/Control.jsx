import './Control.css';

const Control = (props) => {
  return (
    <div className="control">
      <div className="control-setup">
        <div id="break-label">
          <div id="break-length">
            <span>{props.break}</span>
          </div>
          <div className="button-panel">
            <button id="break-decrement" onClick={props.hBreak}>
              -
            </button>
            <button id="break-increment" onClick={props.hBreak}>
              +
            </button>
          </div>
          <span>Break Length</span>
        </div>
        <div id="session-label">
          <div id="session-length">
            <span>{props.session}</span>
          </div>
          <div className="button-panel">
            <button id="session-decrement" onClick={props.hSession}>
              -
            </button>
            <button id="session-increment" onClick={props.hSession}>
              +
            </button>
          </div>
          <span>Session Length</span>
        </div>
      </div>
      <div className="control-action">
        <button id="start_stop" onClick={props.start}>
          <i className="fas fa-play"></i>
        </button>
        <button id="reset" onClick={props.reset}>
          <i className="fas fa-reply"></i>
        </button>
      </div>
    </div>
  );
};

export default Control;
