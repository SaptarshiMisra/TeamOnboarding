import React from "react";
import TableTeamStatus from "./TableTeamStatus";
import InputTextForSearch from "./InputTextForSearch";
import SelectionFilter from "./SelectionFilter";
import NavigationBar from "./NavigationBar";
import TeamProgressBar from "./TeamProgressBar";
import BlockerForm from "./BlockerForm";
import fire from "./Fire";

class DisplayKanban extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("blockers");
    this.state = {
      progress: "",
      data: [],
      initial_data: [],
      isHidden: true,
      selectedOption: "",
      addBlocker: false,
      buttonName: "Add a blocker"
    };
    this.handleAddBlocker = this.handleAddBlocker.bind(this);
    this.dataSuccess = this.dataSuccess.bind(this);
    this.dataError = this.dataError.bind(this);
    this.calculateProgress = this.calculateProgress.bind(this);
  }

  componentDidMount() {
    this.ref.on("value", this.dataSuccess, this.dataError);
  }
  dataSuccess(data) {
    let dataResult = [];
    let dataValue = data.val();
    let dataValueKeys = Object.keys(dataValue);
    let lengthOfKeys = dataValueKeys.length;
    let countOfResolvedItems = 0;
    dataValueKeys.forEach(eachData => {
      let item = dataValue[eachData];
      if ("done" === item.status)
        countOfResolvedItems = countOfResolvedItems + 1;
      dataResult.push(item);
    });
    let progress_percentage = Math.floor(
      (countOfResolvedItems / lengthOfKeys) * 100
    );
    this.setState({
      data: dataResult,
      progress: progress_percentage
    });
  }
  dataError(err) {}
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
      this.setState({
        data: this.state.initial_data,
        isHidden: false,
        selectedOption: "by"
      });
    } else if (selection === "owner") {
      this.setState({
        data: this.state.initial_data,
        isHidden: false,
        selectedOption: "owner"
      });
    } else if (selection === "none") {
      this.setState({ data: this.state.initial_data, isHidden: true });
    } else if (!this.isHidden) {
      let newDataAfterFilter = [];
      let typedText = event.target.value;
      console.log("Typed text is :" + typedText);
      let selectedOptionDropDown = this.state.selectedOption;
      this.state.initial_data.forEach(function(item) {
        if (
          selectedOptionDropDown === "by" &&
          item.by.toLowerCase().search(typedText.toLowerCase()) !== -1
        ) {
          newDataAfterFilter.push(item);
        }
        if (
          selectedOptionDropDown === "owner" &&
          item.owner.toLowerCase().search(typedText.toLowerCase()) !== -1
        ) {
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

  handler(filtered_state) {
    console.log(this);
    this.setState(filtered_state);
  }
  calculateProgress() {
    let size = this.state.data.length;
    return size;
  }
  handleAddBlocker(flag, buttonName) {
    this.setState({ addBlocker: flag, buttonName: buttonName });
  }
  render() {
    return (
      <div>
        <NavigationBar
          addBlockerHandler={this.handleAddBlocker}
          buttonName={this.state.buttonName}
        />
        {!this.state.addBlocker && (
          <TeamProgressBar progress={this.state.progress} />
        )}
        {!this.state.addBlocker && (
          <SelectionFilter
            initialData={this.state.initial_state}
            data={this.state.data}
            isAddBlocker={this.state.isAddBlocker}
            handleFilter={this.handler.bind(this)}
            selectedOption={this.state.selectedOption}
          />
        )}
        <div>
          {this.state.addBlocker && (
            <BlockerForm
              handler={this.handleAddBlocker}
              returnHomeHandler={this.handleAddBlocker}
            />
          )}
        </div>
        {!this.state.addBlocker && <TableTeamStatus data={this.state.data} />}
      </div>
    );
  }
}
export default DisplayKanban;
