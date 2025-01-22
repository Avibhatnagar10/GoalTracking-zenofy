import React, { useState } from "react";

const UserList = ({ users, setSelectedUser }) => {
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort users by name
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortAscending
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="space-y-6">
      {/* Search and Sort Controls */}
      <div className="flex flex-wrap items-center justify-between">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-4 py-2 w-full md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Sort Button */}
        <button
          onClick={() => setSortAscending(!sortAscending)}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sort by Name {sortAscending ? "↑" : "↓"}
        </button>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
            onClick={() => setSelectedUser(user)}
          >
            <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="mt-2 text-blue-600 font-medium">
              Goals: {user.goals.length}
            </p>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {sortedUsers.length === 0 && (
        <p className="text-gray-500 text-center mt-6">
          No users match your search criteria.
        </p>
      )}
    </div>
  );
};

export default UserList;
