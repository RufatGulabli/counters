import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    // students: []
  };

  styles = {
    fontSize: 14,
    fontFamily: "Ubuntu",
    boxShadow: "0 0 8px black",
    borderRadius: 10
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>

        <button onClick={this.handleIncrement} className="btn btn-success m-1">
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

  // getTags() {
  //   if (this.state.students.length === 0)
  //     return <p className="lead m-2">List is empty</p>;
  //   return (
  //     <ul>
  //       {this.state.students.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    const zero = <span>Zero</span>;
    return value === 0 ? zero : value;
  }

  handleIncrement = () => {
    console.log(this.state.value);
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
