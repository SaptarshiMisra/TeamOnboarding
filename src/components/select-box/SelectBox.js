import React from "react";
class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false
  };
  render() {
    return (
      <div>
        <div className="select-box--arrow">
          <span
            className={`${
              this.state.showItems
                ? "select-box--arrow-up"
                : "select-box--arrow-down"
            }`}
          />
        </div>
        <div style={{ display: this.state.showItems ? "block" : "none" }}>
          {this.state.items.map(item => (
            <div key={item.id}>{item.value}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default SelectBox;
