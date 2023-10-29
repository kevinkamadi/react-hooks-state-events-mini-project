import React, { useState } from "react";

function NewTaskForm(props) {
  const [task, setTask] = useState({
    text: "",
    category: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTaskFormSubmit(task);
    setTask({
      text: "",
      category: "All",
    });
  };

  const { categories } = props;

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
