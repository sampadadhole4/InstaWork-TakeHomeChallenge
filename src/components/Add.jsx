import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Add = (props) => {
  const [member, setMember] = useState({
    id: uuidv4(),
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    isAdmin: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isError =
      member.email.length == 0 ||
      member.contact.length == 0 ||
      member.firstname.length == 0 ||
      member.lastname.length == 0;
    setError(isError);

    if (!isError) {
      props.setMembers([...props.members, member]);
      props.setCurrentScreen("list");
    }
  };

  return (
    <div>
      <img
        onClick={() => props.setCurrentScreen("list")}
        style={{
          transform: "rotate(45deg)",
          borderRadius: "100%",
        }}
        src={props.AddSvg}
      />
      <h1>Add a team member</h1>
      <p>Set email, location and role.</p>

      <form>
        {error && <p style={{ color: "red" }}>Please enter all the details</p>}
        <p>Info</p>
        <div class="flexContainer">
        <div class="flex">
        <label >First Name</label>
        <input
          value={member.firstname}
          onChange={(e) => setMember({ ...member, firstname: e.target.value })}
        />
        </div>

        <div class="flex">
        <label>Last Name</label>
        <input
          value={member.lastname}
          onChange={(e) => setMember({ ...member, lastname: e.target.value })}
        />
        </div>

        <div class="flex">
        <label>Contact</label>
        <input
          value={member.contact}
          onChange={(e) => setMember({ ...member, contact: e.target.value })}
        />
        </div>

        <div class="flex">
        <label>Email ID</label>
        <input
          value={member.email}
          onChange={(e) => setMember({ ...member, email: e.target.value })}
        />
        </div>
        </div>

        <h2>Role</h2>

        <input
          name="admin"
          type={"radio"}
          checked={member.isAdmin}
          onChange={() => setMember({ ...member, isAdmin: true })}
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
          onChange={() => setMember({ ...member, isAdmin: false })}
        />
        <label
          onClick={() => setMember({ ...member, isAdmin: false })}
          htmlFor="regular"
        >
          Regular - Can't delete members
        </label>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Add;
