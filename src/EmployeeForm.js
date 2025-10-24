import React, { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [employees, setEmployees] = useState([]);

  // handle input changes
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) return;
    const newEmployee = { ...formData, id: Date.now() };
    setEmployees([...employees, newEmployee]);
    setFormData({ name: "", email: "", role: "" }); // clear form
  };

  return (
    <div style={styles.container}>
      <h2>👨‍💼 Employee Registration Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          placeholder="Job Role"
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Employee</button>
      </form>

      <div style={styles.list}>
        <h3>📋 Employee List</h3>
        {employees.length === 0 && <p>No employees yet...</p>}
        <ul>
          {employees.map((emp) => (
            <li key={emp.id} style={styles.item}>
              <strong>{emp.name}</strong> – {emp.role} ({emp.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    margin: "auto",
  },
  item: {
    marginBottom: "10px",
  },
};

export default EmployeeForm;