import React, { useState } from "react";

const List = (props) => {
  return (
    <div>
      <img
        onClick={() => props.setCurrentScreen("add")}
        style={{
          // transform: "rotate(45deg)",
          borderRadius: "100%",
        }}
        src={props.AddSvg}
      />
      <h1>Team members</h1>
      <p>You have {props.members.length} team members.</p>
      {props.members.map((member) => (
        <Card {...props} key={member.id} member={member} />
      ))}
    </div>
  );
};

export default List;

const Card = (props) => {
  return (
    <div
      onClick={() => {
        props.setCurrentMember(props.member);
        props.setCurrentScreen("edit");
      }}
      style={{ border: "2px white solid" }}
    >
      <p>
        {props.member.firstname} {props.member.lastname}{" "}
        {props.member.isAdmin == true && <i>Admin</i>}
      </p>
      <p>{props.member.contact}</p>
      <p>{props.member.email}</p>
    </div>
  );
};
