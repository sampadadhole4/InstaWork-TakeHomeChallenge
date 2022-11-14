import React, { useState } from "react";

const Edit = (props) => {
  const [member, setMember] = useState(props.currentMember);
  const [error, setError] = useState(false);

  const handleUpdateTodo = (e) => {
    const isError =
      member.email.length == 0 ||
      member.contact.length == 0 ||
      member.firstname.length == 0 ||
      member.lastname.length == 0;
    setError(isError);
    const updatedMember = props.members.map((m) => {
      return m.id == member.id ? member : m;
    });
    if (!isError) {
      props.setMembers(updatedMember);
      props.setCurrentScreen("list");
    }
    e.preventDefault();
  };

  return (
    <div>
      <h1>Edit a team member</h1>
      <p>Edit contact info, location and role.</p>

      <form>
        {error && <p style={{ color: "red" }}>Please enter all the details</p>}
        <h2>Info</h2>
        <input
          value={member.firstname}
          onChange={(e) => setMember({ ...member, firstname: e.target.value })}
        />
        <input
          value={member.lastname}
          onChange={(e) => setMember({ ...member, lastname: e.target.value })}
        />
        <input
          value={member.contact}
          onChange={(e) => setMember({ ...member, contact: e.target.value })}
        />
        <input
          value={member.email}
          onChange={(e) => setMember({ ...member, email: e.target.value })}
        />

        <h2>Role</h2>

        <input
          name="admin"
          type={"radio"}
          checked={member.isAdmin}
          onChange={(e) => setMember({ ...member, isAdmin: true })}
        />
        <label
          onClick={() => setMember({ ...member, isAdmin: true })}
          htmlFor="admin"
        >
          Admin - Can delete members
        </label>

        <input
          name="regular"
          type={"radio"}
          checked={!member.isAdmin}
          onChange={(e) => setMember({ ...member, isAdmin: false })}
        />
        <label
          onClick={() => setMember({ ...member, isAdmin: false })}
          htmlFor="regular"
        >
          Regular - Can't delete members
        </label>
        <button onClick={handleUpdateTodo}>Save</button>
        <button
          onClick={(e) => {
            const updatedMembers = props.members.filter(
              (m) => m.firstname != member.firstname
            );
            props.setMembers(updatedMembers);
            props.setCurrentScreen("list");
            e.preventDefault();
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Edit;
