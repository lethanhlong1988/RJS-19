import classes from "./Counter.module.css";

const Counter = () => {
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>-- COUNTER VALUE --</div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
