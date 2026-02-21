import React from "react";

const ProfileCard = ({ name, role }) => {
  return (
    <div>
      <div className="border inline-block border-red-500">
        <img src="" alt="" className="w-30 h-30  p-4" />
        <h1>{name}</h1>
        <h3>{role}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
