import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const applyFilterHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onApplyFilter={applyFilterHandler}
          defaultYear={filteredYear}
        />
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
      </Card>
    </div>
  );
}

export default Expenses;
