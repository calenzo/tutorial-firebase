import "./styles.css";

export const Header = ({ value, setValue = () => {}, onClick = () => {} }) => (
  <div className="header">
    <input
      placeholder="Preencha o conteúdo"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={onClick}>Adicionar</button>
  </div>
);
