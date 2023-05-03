import React from "react";

export default function ItemDetail({ data }) {
  return (
    <div>
      Item detail:
      <p>title: {data.title}</p>
      <p>location: {data.location}</p>
    </div>
  );
}
