import React from "react";
import { Card } from "./Card";

export const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((user) => (
        <Card key={user.id} data={user} />
      ))}
    </div>
  );
};
