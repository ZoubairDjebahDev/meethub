import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Meeting room</h1>
      <h2>#{params.id}</h2>
    </div>
  );
};

export default Meeting;
