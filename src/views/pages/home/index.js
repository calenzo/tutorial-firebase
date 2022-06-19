import "./styles.css";

import { Card, Header } from "../../components";
import { useHome } from "./useHome";

export const Home = () => {
  const {
    cards,
    value,
    setValue,
    handleAddCard,
    handleDeleteCard,
    handleEditCard,
    isCardEditing,
  } = useHome();

  return (
    <div className="home">
      <Header
        value={value}
        setValue={setValue}
        onClick={() => handleAddCard({ content: value })}
      />

      <div className="home-cards">
        {cards?.length === 0 && (
          <h2>Nenhum resultado encontrado!</h2>
        )}
        {cards?.map((item, index) => (
          <Card
            key={index}
            item={item}
            content={item?.content}
            isEditing={isCardEditing({ item })}
            handleEditCard={handleEditCard}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};