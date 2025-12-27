import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const status = localStorage.getItem("auth");
    const storedUser = localStorage.getItem("user");

    if (!status || !storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">My Profile</h1>

      {user && (
        <p className="mt-4 text-gray-700">
          Logged in as: <strong>{user.email}</strong>
        </p>
      )}
    </div>
  );
}
