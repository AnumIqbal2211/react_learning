import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value })); // ...values => dropdowns
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // preventDefault() => when submitting the form to prevent a browser reload/refresh
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange} // onchange => value of an HTML element is changed
        />
      </label>
      <br></br>
      <label>
        Email:
        <input
          type="email"
          name="useremail"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <input type="submit" />
    </form>
  );
}
export default MyForm;
