import React from "react";

function ActiveButton({ id, onActive }) {
  const actionButton = () => {
    onActive(id);
  }

  return (
    <button className="note-item__archive-button" onClick={actionButton}>Pindahkan</button>
  )
}

export default ActiveButton;