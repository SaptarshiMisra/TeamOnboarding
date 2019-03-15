import React from "react";
import ShowStatus from "./ShowStatus";
import "bootstrap/dist/css/bootstrap.css";

class TableTeamStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="rTable ">
          <div className="rTableRow text-uppercase">
            <div className="rTableHead">
              <strong>Request Name</strong>
            </div>
            <div className="rTableHead">
              <strong>Requested By</strong>
            </div>
            <div className="rTableHead">
              <strong>Owner</strong>
            </div>
            <div className="rTableHead">
              <strong>Status</strong>
            </div>
            <div className="rTableHead">
              <strong>Severity</strong>
            </div>
            <div className="rTableHead">
              <strong>Comment</strong>
            </div>
          </div>
          {this.state.data.map(function(item, index) {
            return (
              <div className="rTableRow">
                <div className="rTableCell">{item.item}</div>
                <div className="rTableCell">{item.by}</div>
                <div className="rTableCell">{item.owner}</div>
                <div className="rTableCell crop">
                  <ShowStatus data={item.status} />
                </div>
                <div className="rTableCell">{item.severity}</div>
                <div className="rTableCell">{item.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TableTeamStatus;
