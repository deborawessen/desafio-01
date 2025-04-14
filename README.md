# 🚀 Ignite Node.js Challenge 01 – Tasks API

This is my solution for the first challenge of the Node.js track in the Ignite program by Rocketseat.

## 📋 About the challenge

The goal of this challenge is to create a simple REST API to manage tasks (TODOs), including:

- Creating a task
- Listing all tasks
- Updating a task by ID
- Deleting a task by ID
- Toggling a task as completed
- Importing tasks in bulk from a CSV file using streams

All data is stored in memory (no external database).

## 🔧 Technologies

- Node.js (Native HTTP module)
- TypeScript
- Streams
- csv-parse
- Insomnia or Postman for testing

## 🧠 Task structure

Each task has the following properties:

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "completed_at": "Date | null",
  "created_at": "Date",
  "updated_at": "Date"
}
```
## 🛠 Available routes

| Method | Route                | Description                           |
|--------|----------------------|---------------------------------------|
| POST   | /tasks               | Create a new task                     |
| GET    | /tasks               | List all tasks (with optional search) |
| PUT    | /tasks/:id           | Update title and/or description       |
| DELETE | /tasks/:id           | Delete a task                         |
| PATCH  | /tasks/:id/complete  | Toggle task completion                |

## 📥 Importing tasks from a CSV

The project supports importing tasks from a `.csv` file using streams.

### CSV Format:

```csv
title,description
Task 01,Description of Task 01
Task 02,Description of Task 02
Task 03,Description of Task 03
```

## 🚀 Getting started

1. Install dependencies:

   ```bash
   npm install

2. Run the application

    ```bash
    npm run dev

3. Test routes using a tool like Insomnia or Postman
   
4. To test the CSV import, run the following script (this will send CSV tasks to the API):

   ```bash
   node src/streams/csv-upload-to-http-stream.js


Made with 💜 by Debora Wessen
