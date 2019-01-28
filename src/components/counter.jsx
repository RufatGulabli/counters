import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 14,
    fontFamily: "Fira Code Regular",
    boxShadow: "0 0 8px black",
    borderRadius: 10
  };

  componentDidUpdate(prevProps, prevStates) {
    console.log("Props : ", prevProps.counter.value);
    console.log("State : ", prevStates);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success m-1"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sml"
        >
          Delete
        </button>
        {/* <div>{this.getTags()}</div> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const zero = <span>Zero</span>;
    return value === 0 ? zero : value;
  }
}

export default Counter;
