import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import fire from "./Fire";

class BlockerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner: "",
      severity: "",
      comment: "",
      status: ""
    };
    this.selectSeverity = this.selectSeverity.bind(this);
    this.selectStatus = this.selectStatus.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  selectSeverity(e) {
    // e.preventDefault();
    let enteredSeverity = e.target.value;
    this.setState({ severity: enteredSeverity });
  }
  selectStatus(e) {
    // e.preventDefault();
    let enteredStatus = e.target.value;
    this.setState({ status: enteredStatus });
  }
  handleNameChange(e) {
    // e.preventDefault();
    let enteredName = e.target.value;
    this.setState({ name: enteredName });
  }
  handleOwnerChange(e) {
    // e.preventDefault();
    let enteredOwner = e.target.value;
    this.setState({ owner: enteredOwner });
  }
  handleCommentChange(e) {
    // e.preventDefault();
    let enteredComment = e.target.value;
    this.setState({ comment: enteredComment });
  }
  handleSave(e) {
    e.preventDefault();
    const { name, owner, severity, comment, status } = this.state;
    let data = {
      item: name,
      by: localStorage.getItem("currentUser"),
      owner: owner,
      status: status,
      severity: severity,
      comment: comment
    };
    fire
      .database()
      .ref("blockers")
      .push(data)
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
    this.props.returnHomeHandler(false, "Add a blocker");
  }
  render() {
    return (
      <div className="container col-md-6">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              className="form-control"
              defaultValue={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="enter owner's name or email"
              name="owner"
              defaultValue={this.state.owner}
              onChange={this.handleOwnerChange}
            />
          </div>
          <div className="form-group">
            <div className="dropdown">
              <select
                id="status_filter"
                className="form-control"
                defaultValue={this.state.status}
                onChange={this.selectStatus}
              >
                <option value="none">Blocker status</option>
                <option value="done">resolved</option>
                <option value="pending">pending</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="enter any extra comment"
              name="comment"
              defaultValue={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </div>
          <div className="form-group">
            <div className="dropdown">
              <select
                id="status_filter"
                className="form-control"
                defaultValue={this.state.severity}
                onChange={this.selectSeverity}
              >
                <option value="none">Severity status</option>
                <option value="urgent">urgent</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>
          <button onClick={this.handleSave}> Add blocker </button>
        </form>
      </div>
    );
  }
}
export default BlockerForm;
