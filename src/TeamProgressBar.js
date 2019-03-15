import React from "react";

class TeamProgressBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("updated progress " + props.progress);
    this.state = {
      progress: props.progress
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Team Progress </h2>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={this.state.progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${this.state.progress}%` }}
            >
              <span className="sr-only">70% Complete</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamProgressBar;
