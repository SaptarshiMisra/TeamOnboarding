import React from "react";

const ShowStatus = props => {
  return props.data === "pending" ? (
    <img
      src="https://uploads.codesandbox.io/uploads/user/2dd19dba-e7b5-4533-a1da-9e9a1c9dadc2/5aZZ-pending.jfif"
      alt="checked"
      className="crop"
    />
  ) : (
    <img
      src="https://uploads.codesandbox.io/uploads/user/2dd19dba-e7b5-4533-a1da-9e9a1c9dadc2/vzqv-CourteousPhonyHorsemouse-small.gif"
      alt="checked"
      className="crop"
    />
  );
};

export default ShowStatus;
