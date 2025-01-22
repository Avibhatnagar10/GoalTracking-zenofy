import React, { useState } from "react";
import { FiUsers, FiPlus } from "react-icons/fi";
import SummaryDashboard from "./components/SummaryDashboard";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserDetailsModal from "./components/UserDetailsModal.js";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Avi",
      email: "Avi@example.com",
      goals: [
        { title: "Learn React", deadline: "2025-01-31", status: "In Progress" },
        { title: "Build a Project", deadline: "2025-02-15", status: "Completed" },
      ],
    },
    {
      id: 2,
      name: "Aashi",
      email: "Aashi@example.com",
      goals: [
        { title: "Master JavaScript", deadline: "2025-01-30", status: "In Progress" },
      ],
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold mb-6">🚀 User Dashboard</h1>
          <nav>
            <ul>
              <li className="flex items-center gap-2 text-lg py-2 cursor-pointer hover:text-blue-300">
                <FiUsers />
                Users
              </li>
              <li className="flex items-center gap-2 text-lg py-2 cursor-pointer hover:text-blue-300">
                <FiPlus />
                Add User
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Welcome to  Dashboard</h2>
          <p className="text-gray-500">Track users and their progress effortlessly.</p>
        </header>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SummaryDashboard users={users} />
          <UserForm users={users} setUsers={setUsers} />
        </div>

        {/* User List */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
          <UserList users={users} setSelectedUser={setSelectedUser} />
        </section>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App;
