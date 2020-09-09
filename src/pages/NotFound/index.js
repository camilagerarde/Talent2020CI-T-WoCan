import React from "react";
import { Link } from "react-router-dom";
import '../../pattern.css';

function NotFound() {
  return (
    <section>
      <h1>Ops!</h1>
      <h2>Página não encontrada </h2>
      <Link title="Voltar para Home" to="/">
        VOLTAR
      </Link>
    </section>
  );
}

export default NotFound;
