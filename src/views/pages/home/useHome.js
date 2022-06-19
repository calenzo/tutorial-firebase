import { useEffect, useState } from "react";
import {
  createCard,
  readCards,
  updateCard,
  deleteCard,
} from "../../../infrastructure/services/cards";

export const useHome = () => {
  const [value, setValue] = useState("");
  const [cardEditing, setCardEditing] = useState(null);
  const [cards, setCards] = useState([]);
  const [shouldUpdateCards, setShouldUpdateCards] = useState(true);

  const isCardEditing = ({ item }) => cardEditing === item?.id;

  const handleAddCard = async (item) => {
    const response = await createCard({ item });
    if (response?.result === false) return;
    setShouldUpdateCards(true);
    setValue("");
    return;
  };

  const handleDeleteCard = async ({ item }) => {
    const response = await deleteCard({ item });
    if (response?.result === false) return;
    setShouldUpdateCards(true);
    return;
  };

  const handleEditCard = async ({ item }) => {
    if (isCardEditing({ item })) {
      const response = await updateCard({ item });
      if (response?.result === false) return;
      setShouldUpdateCards(true);
      setCardEditing(null);
      return;
    }
    setCardEditing(item?.id);
  };

  useEffect(() => {
    if(shouldUpdateCards) {
      (async () => {
        const response = await readCards();
        if (response?.result === false) return;
        setCards(response);
        setShouldUpdateCards(false);
      })();
    }
  }, [shouldUpdateCards]);

  return {
    cards,
    value,
    setValue,
    handleAddCard,
    handleDeleteCard,
    handleEditCard,
    isCardEditing,
  };
};
