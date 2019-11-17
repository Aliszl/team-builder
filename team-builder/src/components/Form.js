import React, { useState } from "react";
import TeamMember from "./TeamMembers";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: ""
  });
  const [submit, setSubmit] = useState([]);
  console.log(submit);

  const formChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const formSubmit = e => {
    e.preventDefault();
    setSubmit(submit.concat(form));
  };

  return (
    <div className="teamMembers_form">
      <form>
        <label htmlFor="teamMember_firstName">First name </label>
        <input
          type="text"
          name="firstName"
          id="teamMember_firstName"
          placeholder="Enter first name"
          onChange={formChange}
          value={form.firstName}
        />{" "}
        <br />
        <label htmlFor="teamMember_lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="teamMember_lastName"
          placeholder="Enter last name"
          onChange={formChange}
          value={form.lastName}
        />{" "}
        <br />
        <label htmlFor="teamMember_role">Role</label>
        <input
          type="text"
          name="role"
          id="teamMember_role"
          placeholder="Enter role"
          onChange={formChange}
          value={form.role}
        />{" "}
        <br />
        <input onClick={e => formSubmit(e)} type="submit" />
      </form>

      {/* With props and key to send to TeamMembers */}
      <TeamMember key={form.firstName} mostRecentSubmit={submit} />
    </div>
  );
};

export default Form;
