import React from "react";

function DeleteButton({ onClick }) {
  return (
    <button
      className="element__delete-button"
      aria-label="delete"
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default DeleteButton;
