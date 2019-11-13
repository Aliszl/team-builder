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
    setSubmit({
      ...submit,
      form
    });
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
          // We are telling our input what its value should be
          // It's value corresponds to its property in state
          value={form.firstName}
        />

        <label htmlFor="teamMember_lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="teamMember_lastName"
          placeholder="Enter last name"
          onChange={formChange}
          value={form.lastName}
        />
        <label htmlFor="teamMember_role">Role</label>
        <input
          type="text"
          name="role"
          id="teamMember_role"
          onChange={formChange}
          value={form.role}
        />
        <label htmlFor="teamMember_email">email </label>
        <select
          type="email"
          name="email"
          id="teamMember_email"
          onChange={formChange}
          value={form.email}
        />

        <input onClick={e => formSubmit(e)} type="submit" />
      </form>
      <TeamMember formData={form} />
    </div>
  );
};

export default Form;
