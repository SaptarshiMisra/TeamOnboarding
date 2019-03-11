import React from "react";
import TableTeamStatus from "./TableTeamStatus";
class DisplayKanban extends React.Component {
  state = {
    data: [
      {
        item: "Access artifactory",
        by: "saptarshi.misra@airbus.com",
        owner: "olivier.walter@airbus.com",
        status: "pending",
        severity: "urgent",
        comment: "Need to inform Olivier to get the access"
      },
      {
        item: "Software needed - Intellij Idea",
        by: "saptarshi.misra@airbus.com",
        owner: "Christina",
        status: "pending",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "core.skywise access",
        by: "saptarshi.misra@airbus.com",
        owner: "Christina",
        status: "pending",
        severity: "Urgent",
        comment: "Need to email to Palantir"
      },
      {
        item: "TA account access",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "pending",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "eclipse",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "jdk 1.8",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "python 2.7",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "gitbash",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "node npm",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      },
      {
        item: "vs code",
        by: "saptarshi.misra@airus.com",
        owner: "IT",
        status: "done",
        severity: "low",
        comment: "Need approval and request IT to get the same installed"
      }
    ]
  };
  filterBySelection = event => {
    let selection = event.target.value;
    let newData = [];
    if (selection === "pending") {
      this.state.data.forEach(function(item) {
        if (item.status === selection) {
          newData.push(item);
        }
      });
    }
    this.setState(newData);
  };

  render() {
    return (
      <div>
        <h2>Team status</h2>
        <div>
          <h2> Filter by </h2>
          <select id="filter_data" onChange={this.filterBySelection}>
            <option value="none">Select</option>
            <option value="pending">pending</option>
            <option value="by">Requested by</option>
          </select>
        </div>
        <TableTeamStatus data={this.state.data} />
      </div>
    );
  }
}
export default DisplayKanban;
