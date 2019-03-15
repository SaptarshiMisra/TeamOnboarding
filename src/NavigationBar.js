import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import fire from "./Fire";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: this.logout.bind(this),
      openBlockerForm: this.openBlockerForm.bind(this),
      blockerButtonName: props.buttonName
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ blockerButtonName: props.buttonName });
  }
  logout() {
    fire.auth().signOut();
  }
  openBlockerForm(e) {
    // e.preventDafault();
    if (this.state.blockerButtonName === "Add a blocker") {
      // this.setState({ blockerButtonName: "Home" });
      this.props.addBlockerHandler(true, "Home");
    } else if (this.state.blockerButtonName === "Home") {
      // this.setState({ blockerButtonName: "Add a blocker" });
      this.props.addBlockerHandler(false, "Add a blocker");
    }
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Skywise Platform Train On Boarding Summary
            </a>
          </div>
          <button onClick={this.state.logout}>Logout</button>
          <button onClick={this.state.openBlockerForm}>
            {this.state.blockerButtonName}
          </button>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
