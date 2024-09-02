import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", pass: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Form Create</h1>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name </label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email </label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="pass" required onChange={handleChange} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
