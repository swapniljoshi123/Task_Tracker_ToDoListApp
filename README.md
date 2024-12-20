To-Do Application

A simple and elegant to-do application built using React with Vite and styled with Tailwind CSS. This application allows users to efficiently manage their tasks by adding, editing, and deleting tasks. Each task is timestamped to help track activities more effectively.

Features

Add Tasks: Add new tasks with a timestamp.

Edit Tasks: Update task descriptions.

Delete Tasks: Remove tasks from the list.

Task Status: Mark tasks as completed or pending.

Timestamping: Automatically stores the current timestamp for every task to ensure accurate tracking.

Technologies Used

React: For building the user interface.

Vite: For fast development and building.

Tailwind CSS: For sleek and modern styling.

Installation

Follow these steps to set up the project locally:

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd todo-application

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser at http://localhost:5173.

Project Structure

├── src
│   ├── components
│   │   ├── TaskInput.jsx   // Input field and Add button
│   │   ├── TaskList.jsx    // Displays task list
│   │   └── TaskItem.jsx    // Individual task with edit/delete functionality
│   ├── App.jsx            // Main application file
│   └── index.css          // Tailwind CSS imports
├── public
│   └── index.html         // Entry HTML file
├── package.json
├── tailwind.config.js
└── vite.config.js

How to Use

Add a Task:

Enter a task in the input field.

Click the Add button to create the task with the current timestamp.

Edit a Task:

Click the pencil icon next to a task to edit it.

Make the necessary changes and save them.

Delete a Task:

Click the trash icon to delete the task.

Mark Task Status:

Click the status icon to toggle between completed and pending.

Screenshot



License

This project is open-source and available under the MIT License.
