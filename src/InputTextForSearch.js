import React from "react";

class InputTextForSearch extends React.Component {
  //   getDefaultProps() {
  //     return {
  //       value: ""
  //     };
  //   }
  changeHandler(e) {
    this.props.onChange(e);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search"
          onChange={this.changeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default InputTextForSearch;
