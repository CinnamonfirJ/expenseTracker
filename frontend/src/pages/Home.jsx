import { useEffect, useState } from "react";

const Home = () => {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses");

      const json = await response.json();

      if (response.ok) {
        setExpenses(json);
      } else {
        console.log("he");
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <div>
        {expenses &&
          expenses.map((expense) => (
            <p key={expense._id}> {expense.title} Home</p>
          ))}
      </div>
    </div>
  );
};

export default Home;
