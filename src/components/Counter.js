import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  // Sử dụng redux toolkit
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
    // {type:SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  /*
  const incrementHandler = () => {
    console.log("increment!");
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    console.log("increase by 10");
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    console.log("decrement!");
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    console.log("Toggle Counter!");
    dispatch({ type: "toggle" });
  };
  */

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Liên kết Redux vào class components trong React-Redux
/*
import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  incrementHandler() {
    console.log("increment");
    this.props.increment();
  }

  decrementHandler() {
    console.log("decrement");
    this.props.decrement();
  }

  toggleCounterHandler() {
    console.log("toggle");
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
