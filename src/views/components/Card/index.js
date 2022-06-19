import "./styles.css";

import editConfirm from "../../assets/icons/editConfirm.png";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";
import { useState } from "react";

export const Card = ({
  item,
  content = "Insert name",
  isEditing = false,
  handleEditCard = () => {},
  handleDeleteCard = () => {},
}) => {
  const [value, setValue] = useState(item?.content || "");

  return (
    <div className="card">
      {!isEditing && content}
      <div className="card-icons">
        {isEditing && (
          <input
            placeholder="Edite o conteúdo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        <img
          src={isEditing ? editConfirm : editIcon}
          alt="editar"
          className="card-icon"
          onClick={() =>
            handleEditCard(
              isEditing ? { item: { ...item, content: value } } : { item }
            )
          }
        />
        {!isEditing && (
          <img
            src={deleteIcon}
            alt="deletar"
            className="card-icon"
            onClick={() => handleDeleteCard({ item })}
          />
        )}
      </div>
    </div>
  );
};
