import React, { useState } from "react";

const TeamMember = props => {
  console.log(props);

  // const savedTeamMember = props.mostRecentSubmit;

  return (
    <div className="teamMembers">
      {props.mostRecentSubmit.map(user => {
        return <p>{user.firstName}</p>;
      })}
    </div>
  );
};

export default TeamMember;
