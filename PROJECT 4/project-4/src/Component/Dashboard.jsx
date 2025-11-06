import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load records when the page loads
  useEffect(() => {
    fetchRecord();
  }, []);

  const fetchRecord = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setRecord(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editIndex == null) {
      await axios.post("http://localhost:5000/users", formData);
      fetchRecord();
    } else {
      await axios.put(`http://localhost:5000/users/${editIndex}`, formData);
      fetchRecord();
      setEditIndex(null);
    }

    setFormData({ name: "", age: "", city: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchRecord();
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item.id === id);
    setFormData({
      name: singleData.name,
      age: singleData.age,
      city: singleData.city,
    });
    setEditIndex(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-[#e85154]">Dashboard</h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Record</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md"/>
          <input type="text" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md"/>
          <input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md"/>
          <button type="submit" className="w-full bg-[#e85154] text-white py-3 rounded-md">{editIndex === null ? "Add Data" : "Update Data"}</button>
        </form>

      </div>

      {/* Records List */}
      <div className="mt-8 bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Records</h2>
        {record.length === 0 ? (
          <p className="text-gray-500">No records yet.</p>
        ) : (
          record.map((e, i) => (
            <div key={i} className="border-b border-gray-200 py-2 flex justify-between items-center">
              <div>
                <p><strong>{e.name}</strong> — {e.age}, {e.city}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(e.id)} className="text-blue-500 hover:underline">Edit</button>
                <button onClick={() => handleDelete(e.id)} className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
