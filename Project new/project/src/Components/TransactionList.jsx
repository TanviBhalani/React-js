// import { doc, deleteDoc, updateDoc } from "firebase/firestore";
// import { db, auth } from "../../firebaseConfig";

// export default function TransactionList({ transactions }) {
//   // Category icons
//   const getIcon = (cat) => {
//     if (!cat) return "sell";

//     const c = cat.toLowerCase();
//     if (c.includes("food")) return "restaurant";
//     if (c.includes("grocery")) return "local_grocery_store";
//     if (c.includes("shop") || c.includes("clothes")) return "shopping_bag";
//     if (c.includes("rent") || c.includes("house")) return "home";
//     if (c.includes("travel") || c.includes("auto") || c.includes("bus"))
//       return "directions_bus";
//     if (c.includes("salary")) return "payments";
//     if (c.includes("electricity") || c.includes("bill")) return "receipt_long";

//     return "sell";
//   };

//   // DELETE
//   const handleDelete = async (id) => {
//     const ok = window.confirm("Delete this transaction?");
//     if (!ok) return;

//     await deleteDoc(doc(db, "users", auth.currentUser.uid, "transactions", id));
//   };

//   // EDIT (Simple amount change)
//   const handleEdit = async (t) => {
//     const newAmount = prompt("Enter new amount:", t.amount);
//     if (!newAmount) return;

//     await updateDoc(
//       doc(db, "users", auth.currentUser.uid, "transactions", t.id),
//       { amount: Number(newAmount) }
//     );
//   };

//   return (
//     <div className="bg-white p-5 rounded-3xl shadow border border-gray-100">
//       <h2 className="text-lg font-semibold mb-3">Today</h2>

//       <div className="space-y-4">
//         {transactions.map((t) => (
//           <div
//             key={t.id}
//             className="flex justify-between items-center border-b pb-3"
//           >
//             <div className="flex gap-3">
//               <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                 <span className="material-icons text-purple-700">
//                   {getIcon(t.category)}
//                 </span>
//               </div>

//               <div>
//                 <p className="font-semibold capitalize">{t.category}</p>
//                 <p className="text-xs text-slate-500">{t.note}</p>
//                 <p className="text-xs text-slate-400 capitalize">{t.person}</p>
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex items-center gap-3">
//               <p
//                 className={`font-semibold ${
//                   t.type === "income"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {t.type === "income" ? "+₹" : "-₹"}
//                 {t.amount}
//               </p>

//               <span
//                 className="material-icons text-blue-500 cursor-pointer"
//                 onClick={() => handleEdit(t)}
//               >
//                 edit
//               </span>

//               <span
//                 className="material-icons text-red-500 cursor-pointer"
//                 onClick={() => handleDelete(t.id)}
//               >
//                 delete
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";

export default function TransactionList({ transactions }) {
  // Category icons
  const getIcon = (cat) => {
    if (!cat) return "sell";

    const c = cat.toLowerCase();
    if (c.includes("food")) return "restaurant";
    if (c.includes("grocery")) return "local_grocery_store";
    if (c.includes("shop") || c.includes("clothes")) return "shopping_bag";
    if (c.includes("rent") || c.includes("house")) return "home";
    if (c.includes("travel") || c.includes("auto") || c.includes("bus"))
      return "directions_bus";
    if (c.includes("salary")) return "payments";
    if (c.includes("electricity") || c.includes("bill")) return "receipt_long";

    return "sell";
  };

  // DELETE
  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this transaction?");
    if (!ok) return;

    await deleteDoc(doc(db, "users", auth.currentUser.uid, "transactions", id));
  };

  // EDIT (Simple amount change)
  const handleEdit = async (t) => {
    const newAmount = prompt("Enter new amount:", t.amount);
    if (!newAmount) return;

    await updateDoc(
      doc(db, "users", auth.currentUser.uid, "transactions", t.id),
      { amount: Number(newAmount) }
    );
  };

  return (
    <div className="bg-white p-5 rounded-3xl shadow border border-gray-100 w-full">
      <h2 className="text-lg font-semibold mb-3">Today</h2>

      <div className="space-y-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b pb-3 gap-4 flex-wrap"
          >
            {/* LEFT SIDE (Icon + Text) */}
            <div className="flex gap-3 items-start flex-1 min-w-[180px]">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="material-icons text-purple-700 text-lg">
                  {getIcon(t.category)}
                </span>
              </div>

              <div className="leading-tight">
                <p className="font-semibold capitalize">{t.category}</p>
                <p className="text-xs text-slate-500 wrap-break-words max-w-[150px] md:max-w-none">
                  {t.note}
                </p>
                <p className="text-xs text-slate-400 capitalize">{t.person}</p>
              </div>
            </div>

            {/* RIGHT SIDE (Amount + Buttons) */}
            <div className="flex items-center gap-3">
              <p
                className={`font-semibold text-sm md:text-base ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {t.type === "income" ? "+₹" : "-₹"}
                {t.amount}
              </p>

              {/* Edit Button */}
              <span
                className="material-icons text-blue-500 cursor-pointer text-base md:text-lg"
                onClick={() => handleEdit(t)}
              >
                edit
              </span>

              {/* Delete Button */}
              <span
                className="material-icons text-red-500 cursor-pointer text-base md:text-lg"
                onClick={() => handleDelete(t.id)}
              >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
