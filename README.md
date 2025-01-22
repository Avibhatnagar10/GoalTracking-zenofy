User Goal Dashboard
A sleek and interactive React.js application designed to manage users and track their goals. This dashboard enables users to view the goal summary, add new users, and track their progress. The app features modern UI elements with smooth animations and a responsive design.

Features
User List: View a list of users with their names, emails, and the number of goals they have.
Search & Sort: Filter users by name or email and sort the list by user name.
Add User: Add a new user with their name, email, and goals.
Goal Tracking: Track users' goals, including title, deadline, and status (e.g., "In Progress", "Completed").
User Details: Click on a user to view detailed information about their goals.
Goal Summary: A dashboard that displays the total number of goals, completed goals, and the overall completion rate.
Tech Stack
Frontend:

React.js
Tailwind CSS
Framer Motion (for animations)
React Icons
Tools & Libraries:

React Hooks (useState, useEffect)
Create React App (CRA)
VSCode or any code editor
Prerequisites
Before getting started, make sure you have the following installed:

Node.js: Download Node.js
npm (comes with Node.js): Install npm
Installation
Follow these steps to set up the project on your local machine:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/user-goal-dashboard.git
cd user-goal-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.

How it Works
Dashboard Layout
Sidebar: A collapsible sidebar displays navigation links for managing users and adding new users.
Main Content:
The Goal Summary shows an overview of total and completed goals.
The User List displays the users with the option to view their details by clicking on their name.
User Form allows adding new users with their names, emails, and goals.
User Actions
Adding Users: When a new user is added, they are displayed in the user list with their goals count.
Viewing User Details: Clicking on a user's name opens a modal that shows all their goals with status and deadline.
Goal Summary: The dashboard dynamically calculates the total goals and completion rate for all users.
Screenshots

Example of how the dashboard looks when the app is loaded.

Contributing
Contributions are welcome! If you'd like to improve or add features to the project, feel free to fork the repo and create a pull request. Please follow the steps below:

Fork the repository.
Clone your forked repo to your local machine.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Create a pull request.
License
This project is licensed under the MIT License.

Notes:
Animations: Framer Motion is used for smooth transitions between states.
Tailwind CSS: Utility-first CSS framework used for styling.
User Interaction: The app offers a simple and intuitive UI for managing users and tracking goals, making it user-friendly
