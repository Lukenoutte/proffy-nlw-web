import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherList() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/32497719?s=460&u=43db8831a03457333346c8ba148d0b9fb93adc5d&v=4"
          alt="Lukenoutte"
        />
        <div>
          <strong>Lucas Lima</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        temporibus soluta consequatur laborum voluptatibus non aperiam eum error
        minima. Dolores blanditiis, iste omnis quis consequuntur quaerat iusto
        autem reprehenderit sapiente.
      </p>
      <footer>
        <p>
          Preço/hora:
          <strong> R$ 300,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
