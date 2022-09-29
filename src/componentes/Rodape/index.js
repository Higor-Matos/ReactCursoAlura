import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="logos">
        <img src="/imagens/fb.png" alt="Facebook" />
        <img src="/imagens/tw.png" alt="Twitter" />
        <img src="/imagens/ig.png" alt="Instagram" />
      </div>
      <img src="/imagens/logo.png" alt="Organo" />
      <p>Desenvolvido por Higor Matos</p>
    </footer>
  );
};

export default Rodape;