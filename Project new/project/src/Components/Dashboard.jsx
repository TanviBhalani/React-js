import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Charts from "./Charts";

export default function Dashboard() {
  const navigate = useNavigate();

  const persons = ["Me", "Father", "Mother", "Sister"];
  const [activePerson, setActivePerson] = useState("");

  const [userId, setUserId] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  // Load User
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      if (u) setUserId(u.uid);
      else navigate("/");
    });
  }, []);

  // Load Transactions
  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, "users", userId, "transactions"),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snap) => {
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTransactions(arr);
    });
  }, [userId]);

  // Filtered data
  const shown = activePerson
    ? transactions.filter((t) => t.person === activePerson)
    : transactions;

  // Monthly Summary
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const monthly = shown.filter((t) => {
    const d = new Date(t.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });

  const totalIncome = monthly
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const totalExpense = monthly
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  const finalBalance = totalIncome - totalExpense;

  // ------------ PERSON WISE SUMMARY FUNCTION ------------
  const calcTotals = (person) => {
    const list = transactions.filter((t) => {
      const d = new Date(t.date);
      return (
        t.person === person &&
        d.getMonth() === month &&
        d.getFullYear() === year
      );
    });

    const income = list
      .filter((t) => t.type === "income")
      .reduce((a, b) => a + Number(b.amount), 0);

    const expense = list
      .filter((t) => t.type === "expense")
      .reduce((a, b) => a + Number(b.amount), 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  };

  // Person-wise totals
  const meTotals = calcTotals("Me");
  const fatherTotals = calcTotals("Father");
  const motherTotals = calcTotals("Mother");
  const sisterTotals = calcTotals("Sister");

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4">
      {/* HEADER */}
      <header className="bg-white p-4 shadow flex justify-between items-center sticky top-0 z-10">
        <h2 className="text-xl font-semibold">Expense Tracker</h2>

        <button
          onClick={handleLogout}
          className="bg-slate-200 px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </header>

      {/* MAIN BALANCE CARD */}
      <div className="rounded-2xl bg-purple-900 max-w-4xl mx-auto my-5 p-4 w-full">
        <h1 className="text-3xl font-bold px-2 pt-2 text-white">
          ₹{finalBalance}
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 mt-4 px-2 pb-2 flex-wrap">
          <button
            className={`px-4 py-1 rounded-lg text-sm cursor-pointer ${
              activePerson === "" ? "bg-[#c9ace1]" : "bg-slate-200"
            }`}
            onClick={() => setActivePerson("")}
          >
            All
          </button>

          {persons.map((p) => (
            <button
              key={p}
              className={`px-4 py-1 rounded-lg text-sm cursor-pointer ${
                activePerson === p ? "bg-[#c9ace1]" : "bg-slate-200"
              }`}
              onClick={() => setActivePerson(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* PERSON-WISE SUMMARY BOXES */}
      <div className="max-w-4xl mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2">
        <div className="bg-slate-100 p-4 rounded-xl">
          <h3 className="font-semibold">Me</h3>
          <p>Income: ₹{meTotals.income}</p>
          <p>Expense: ₹{meTotals.expense}</p>
          <p className="font-bold">Balance: ₹{meTotals.balance}</p>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl">
          <h3 className="font-semibold">Father</h3>
          <p>Income: ₹{fatherTotals.income}</p>
          <p>Expense: ₹{fatherTotals.expense}</p>
          <p className="font-bold">Balance: ₹{fatherTotals.balance}</p>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl">
          <h3 className="font-semibold">Mother</h3>
          <p>Income: ₹{motherTotals.income}</p>
          <p>Expense: ₹{motherTotals.expense}</p>
          <p className="font-bold">Balance: ₹{motherTotals.balance}</p>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl">
          <h3 className="font-semibold">Sister</h3>
          <p>Income: ₹{sisterTotals.income}</p>
          <p>Expense: ₹{sisterTotals.expense}</p>
          <p className="font-bold">Balance: ₹{sisterTotals.balance}</p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 px-2">
        <TransactionList transactions={shown} />
        <AddTransaction key={userId + transactions.length} />
      </div>

      {/* Charts Section */}
      <div className="max-w-4xl mx-auto mt-6 px-2">
        <Charts transactions={shown} />
      </div>
    </div>
  );
}
