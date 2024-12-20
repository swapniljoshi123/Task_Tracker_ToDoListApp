
# To-Do List Application

## Overview

This project is a **To-Do List Application** built with **React.js**, **Node.js**. It enables users to manage tasks efficiently by providing features like adding, updating, and deleting tasks.

---

## Features

1. **Add Tasks**: Users can add new tasks with a title and description.
2. **Mark as Complete**: Mark tasks as complete or incomplete.
3. **Edit Tasks**: Update task details such as the title or description.
4. **Delete Tasks**: Remove tasks from the list.
5. **Responsive Design**: The application works seamlessly on desktop and mobile devices.
6. **Persistent Storage**: Tasks are stored in a MongoDB database, ensuring data persistence.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks
- **Styling**: Tailwind CSS for modern and responsive design.

---

## Setup Instructions

### Prerequisites

- Node.js installed on your system.
- MongoDB set up locally or on a cloud service like MongoDB Atlas.

### Steps to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```


2. **Install Frontend Dependencies**
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Start the Frontend Development Server**
   ```bash
   npm start
   ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

---

## File Structure

```
todo-list/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task.js        # Task card component
│   │   │   ├── TaskForm.js    # Form to add/edit tasks
│   │   │   └── TaskList.js    # List of tasks
│   │   ├── App.js             # Main React file
│   │   └── index.js           # Entry point
│   ├── public/
│   └── package.json
├── README.md
```



## Screenshots

### 1. Home Page
Displays the list of tasks with options to add, edit, and delete tasks.
![image](https://github.com/user-attachments/assets/b9f2263c-07e4-4243-bb21-ec656ed073e1)




