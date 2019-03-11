import React from "react";
import TableTeamStatus from "./TableTeamStatus";
import InputTextForSearch from "./InputTextForSearch";
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
    ],
    initial_data: [
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
    ],
    isHidden: true
  };
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  filterBySelection = event => {
    let selection = event.target.value;
    // let initial_data = [...this.state.data];
    let newData = [];
    if (selection === "pending") {
      // this.state.data.filter((item, _) => item.status === selection);
      this.state.data.forEach(function(item) {
        if (item.status === selection) {
          newData.push(item);
        }
      });
      console.log(newData);

      this.setState({ data: newData, isHidden: true });
    } else if (selection === "by") {
      this.setState({ data: this.state.initial_data, isHidden: false });
    } else if (selection === "none") {
      this.setState({ data: this.state.initial_data, isHidden: true });
    } else if (!this.isHidden) {
      let newDataAfterFilter = [];
      let typedText = event.target.value;
      console.log("Typed text is :" + typedText);
      this.state.initial_data.forEach(function(item) {
        if (item.by.toLowerCase().search(typedText.toLowerCase()) !== -1) {
          newDataAfterFilter.push(item);
        }
      });
      console.log(
        "after filter by text items :" + newDataAfterFilter.toString()
      );
      this.setState({
        data: newDataAfterFilter
      });
      // console.log(event.target.value.toLowerCase());
    }
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
          {!this.state.isHidden && (
            <InputTextForSearch onChange={this.filterBySelection} />
          )}
        </div>
        <TableTeamStatus data={this.state.data} />
      </div>
    );
  }
}
export default DisplayKanban;
