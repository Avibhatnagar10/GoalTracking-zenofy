import React from "react";
import { motion } from "framer-motion";

const SummaryDashboard = ({ users }) => {
  const totalGoals = users.reduce((sum, user) => sum + user.goals.length, 0);
  const completedGoals = users.reduce(
    (sum, user) =>
      sum + user.goals.filter((goal) => goal.status === "Completed").length,
    0
  );
  const completionRate = totalGoals
    ? ((completedGoals / totalGoals) * 100).toFixed(2)
    : 0;

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6">🎯 Goal Summary</h2>
      <div className="text-center space-y-4">
        <motion.p
          className="text-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-semibold">Total Goals:</span> {totalGoals}
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="font-semibold">Completed Goals:</span> {completedGoals}
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="font-semibold">Completion Rate:</span> {completionRate}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SummaryDashboard;
