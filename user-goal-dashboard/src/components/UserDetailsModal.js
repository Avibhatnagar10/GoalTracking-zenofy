import React from "react";
import { motion } from "framer-motion";

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">{user.name}'s Goals</h2>
        <ul>
          {user.goals.map((goal, index) => (
            <li
              key={index}
              className="border-b py-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{goal.title}</p>
                <p className="text-gray-500">Deadline: {goal.deadline}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  goal.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {goal.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default UserDetailsModal;
