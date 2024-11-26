# Task-Master

--

## To-Do List with Dark Mode

A simple, interactive to-do list application that allows users to:
- Add, view, and delete tasks.
- Persist tasks using `localStorage`.
- Toggle between light and dark mode, with preferences saved in `localStorage`.

---

### Features

1. **Task Management**:
   - Add tasks via an input field.
   - View saved tasks on page reload.
   - Delete tasks with a button click.

2. **Dark Mode**:
   - Toggle between light and dark themes.
   - Dark mode preference is saved and restored on subsequent visits.

3. **LocalStorage**:
   - Tasks and theme preferences are saved in `localStorage`.

---

### Technologies Used

- **HTML5**: For structure.
- **CSS3**: For styling, including theme switching using CSS variables.
- **JavaScript**: For application logic and interaction.

---

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone [https://github.com/subhamgiri16/Task-Master.git]
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-dark-mode
   ```

3. Open the `index.html` file in your favorite browser:
   ```bash
   open index.html
   ```
   Or simply drag and drop the `index.html` file into your browser.

---

### Usage

1. **Adding Tasks**:
   - Enter a task in the input field.
   - Click the "Add" button to add the task to the list.

2. **Deleting Tasks**:
   - Click the "Delete" button next to any task to remove it from the list.

3. **Dark Mode**:
   - Toggle the "Dark Mode" switch in the top-right corner to enable or disable dark mode.
   - Your preference is saved, so it will persist when you reload the page.

---

### File Structure

```
.
├── index.html        # The main HTML file
├── style.css         # The CSS file for styling
└── script.js         # The JavaScript file for logic
```

---

### License

This project is licensed under the [MIT License](LICENSE).

---
