import React from "react";
import { motion } from "framer-motion";

const GoalDetails = ({ user, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{user.name}'s Goals</h2>
      <button
        onClick={onClose}
        className="text-blue-500 underline mb-4 block"
      >
        Close
      </button>
      <ul>
        {user.goals.map((goal, index) => (
          <li key={index} className="mb-2">
            <p className="font-medium">{goal.title}</p>
            <p>Deadline: {goal.deadline}</p>
            <p>Status: {goal.status}</p>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default GoalDetails;
