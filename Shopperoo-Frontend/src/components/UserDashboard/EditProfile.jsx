import React, { useState } from "react";

export default function EditProfile({ user }) {
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    dateOfBirth: user.dateOfBirth,
    address: user.address || "No address provided",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        {Object.keys(formData).map((key) => (
          <div key={key} className="relative mb-6 flex flex-col gap-1 pb-1">
            <label className="text-sm text-slate-600" htmlFor={key}>
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={key === "dateOfBirth" ? "date" : "text"}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="text-lg"
            />
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
          </div>
        ))}
        <button type="submit" className="mt-4 bg-blue-500 p-2 text-white">
          Save Changes
        </button>
      </div>
    </form>
  );
}
