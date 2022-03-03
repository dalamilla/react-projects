import { Component } from 'react';
import Control from './components/Control';
import Display from './components/Display';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './Clock.css';

class Clock extends Component {
  state = {
    break: 5,
    session: 25,
    status: 'stopped',
    title: 'Session',
    timer: 1500,
    intervalid: null,
  };

  time = () => {
    let m = Math.floor(this.state.timer / 60);
    let s = this.state.timer - m * 60;
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;
    return m + ':' + s;
  };

  reset = () => {
    clearInterval(this.state.intervalid);
    this.sound.pause();
    this.sound.currentTime = 0;
    this.setState({
      break: 5,
      session: 25,
      status: 'stopped',
      title: 'Session',
      timer: 1500,
      intervalid: null,
    });
  };

  countDown = () => {
    if (this.state.status === 'stopped') {
      let intervalid = setInterval(() => {
        if (this.state.timer === 0) {
          clearInterval(intervalid);
          this.sound.play();
          if (this.state.title === 'Session') {
            this.setState({
              status: 'stopped',
              title: 'Break',
              timer: this.state.break * 60,
            });
          } else {
            this.setState({
              status: 'stopped',
              title: 'Session',
              timer: this.state.session * 60,
            });
          }

          this.countDown();
        } else {
          this.setState({ timer: this.state.timer - 1 });
        }
      }, 1000);

      this.setState({
        status: 'started',
        intervalid: intervalid,
      });
    } else {
      clearInterval(this.state.intervalid);
      this.setState({
        status: 'stopped',
        intervalid: null,
      });
    }
  };

  handleBreak = (e) => {
    if (this.state.status === 'stopped') {
      let breakValue = this.state.break;
      if (e.target.id === 'break-increment' && breakValue >= 60) {
        return;
      } else if (e.target.id === 'break-increment' && breakValue >= 1) {
        breakValue++;
      } else if (e.target.id === 'break-decrement' && breakValue != 1) {
        breakValue--;
      }
      this.setState({
        break: breakValue,
      });
    }
  };

  handleSession = (e) => {
    if (this.state.status === 'stopped') {
      let sessionValue = this.state.session;
      let timerValue = this.state.timer;

      if (e.target.id === 'session-increment' && sessionValue >= 60) {
        return;
      } else if (e.target.id === 'session-increment' && sessionValue >= 1) {
        sessionValue++;
        timerValue = sessionValue * 60;
      } else if (e.target.id === 'session-decrement' && sessionValue != 1) {
        sessionValue--;
        timerValue = sessionValue * 60;
      }

      this.setState({
        session: sessionValue,
        timer: timerValue,
      });
    }
  };

  render() {
    const BeepSound =
      'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav';

    return (
      <div className="clock">
        <div className="panel">
          <Display time={this.time} title={this.state.title} />
          <Control
            break={this.state.break}
            session={this.state.session}
            reset={this.reset}
            hBreak={this.handleBreak}
            hSession={this.handleSession}
            start={this.countDown}
          />
        </div>
        <audio
          id="beep"
          preload="auto"
          src={BeepSound}
          ref={(audio) => {
            this.sound = audio;
          }}
        />
      </div>
    );
  }
}

export default Clock;
