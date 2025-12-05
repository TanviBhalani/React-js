import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

export default function AddTransaction() {
  const today = new Date().toISOString().split("T")[0];

  const [type, setType] = useState("expense");
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("");
  const [person, setPerson] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");

  // Reset All Inputs
  const resetForm = () => {
    setType("expense");
    setDate(today);
    setCategory("");
    setPerson("");
    setNote("");
    setAmount("");
  };

  const submit = async () => {
    if (!amount || !category || !person)
      return alert("Please fill all fields!");

    await addDoc(
      collection(db, "users", auth.currentUser.uid, "transactions"),
      {
        type,
        amount: Number(amount),
        category,
        person,
        date,
        note,
        createdAt: serverTimestamp(),
      }
    );

    resetForm(); // Clear all inputs
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl mt-5 w-full max-w-md mx-auto md:max-w-full">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
        Add New Transaction
      </h2>

      {/* Toggle: Expense / Income */}
      <div className="flex bg-slate-100 rounded-full p-1 w-full">
        <button
          onClick={() => setType("expense")}
          className={`flex-1 py-2 rounded-full text-sm md:text-base ${
            type === "expense" ? "bg-purple-900 text-white" : ""
          }`}
        >
          Expense
        </button>

        <button
          onClick={() => setType("income")}
          className={`flex-1 py-2 rounded-full text-sm md:text-base ${
            type === "income" ? "bg-purple-900 text-white" : ""
          }`}
        >
          Income
        </button>
      </div>

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded-xl mt-4 p-3 text-sm md:text-base"
      />

      {/* Category */}
      <input
        placeholder="Category (Food, Rent, Salary...)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border rounded-xl mt-3 p-3 text-sm md:text-base"
      />

      {/* Person Dropdown */}
      <select
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="w-full border rounded-xl mt-3 p-3 max-sm:appearance-none  text-sm md:text-base"
      >
        <option value="">Select Person</option>
        <option value="Me">Me</option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Sister">Sister</option>
      </select>

      {/* Note */}
      <textarea
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full border rounded-xl mt-3 p-3 text-sm md:text-base min-h-20"
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-xl mt-3 p-3 text-sm md:text-base"
      />

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-3 mt-4">
        <button
          onClick={resetForm}
          className="bg-slate-200 py-3 rounded-xl w-full"
        >
          Cancel
        </button>

        <button
          onClick={submit}
          className="bg-purple-900 text-white py-3 rounded-xl w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}
