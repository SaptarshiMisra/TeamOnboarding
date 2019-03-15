import React from "react";
import InputTextForSearch from "./InputTextForSearch";
import "bootstrap/dist/css/bootstrap.css";

class SelectionFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log("Loading the selection filter" + props.data);
    this.state = {
      isHidden: true,
      isAddBlocker: props.isAddBlocker,
      initial_data: props.initial_data,
      data: props.data,
      selectedOption: props.selectedOption
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      isAddBlocker: props.isAddBlocker,
      initial_data: props.initial_data,
      data: props.data,
      selectedOption: props.selectedOption
    });
  }
  // componentDidUpdate() {
  //   this.setState({ isHidden: this.state.isHidden });
  // }
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

      this.props.handleFilter({ data: newData });
      this.setState({ isHidden: true, selectedOption: "pending" });
    } else if (selection === "by") {
      this.props.handleFilter({
        data: this.state.initial_data,
        selectedOption: "by"
      });
      this.setState({ isHidden: false, selectedOption: "by" });
    } else if (selection === "owner") {
      this.props.handleFilter({
        data: this.state.initial_data,
        selectedOption: "owner"
      });
      this.setState({ isHidden: false, selectedOption: "owner" });
    } else if (selection === "none") {
      this.props.handleFilter({
        data: this.state.initial_data
      });
      this.setState({ isHidden: true });
    } else if (!this.state.isHidden) {
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
      this.props.handleFilter({
        data: newDataAfterFilter
      });
      // console.log(event.target.value.toLowerCase());
    }
  };

  render() {
    return (
      <div className="navbar navbar-defaultrow container-fluid ">
        <h2 className="col-lg-3 col-md-6 "> Filter by </h2>
        <div className="dropdown">
          <select id="filter_data" onChange={this.filterBySelection}>
            <option value="none">Select</option>
            <option value="pending">pending</option>
            <option value="by">Requested by</option>
            <option value="owner">Owner</option>
          </select>
        </div>

        <div>
          {!this.state.isHidden && (
            <InputTextForSearch onChange={this.filterBySelection} />
          )}
        </div>
      </div>
    );
  }
}

export default SelectionFilter;
