import React, { useState } from "react";

const UserForm = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && title && deadline) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        goals: [{ title, deadline, status: "In Progress" }], // Default status
      };

      setUsers([...users, newUser]);

      // Reset the form fields
      setName("");
      setEmail("");
      setTitle("");
      setDeadline("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add User</h2>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Goal Title Input */}
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Goal Deadline Input */}
      <input
        type="date"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
