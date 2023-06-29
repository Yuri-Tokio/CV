import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/experienciascontainer.sass";

const experiencias = [
  { id: "tokstok", name: "Tok & Stok", icon: <DiHtml5 /> },
  { id: "marisa", name: "Marisa", icon: <DiJsBadge /> },
];

const ExperienciasContainer = () => {
  return (
    <section className="experiencias">
      <h2>Expêriencias</h2>
      <div className="experiencias-grid">
        <div className="technology-card">
          <h3>Tok Stok</h3>
          <h5>Janeiro 2022 - Outubro 2022</h5>
          <ul>
            <li>Desenvolvimento e Integrações de APIs RESTfull e MicroServiços para aplicações Web</li>
            <li>Desenvolvimento de páginas Web em React Js incorporado com design responsivo</li>
            <li>Desenvolvimento na modelagem DDD (Domain-Driven-Design)</li>
            <li>Desenvolvimento de projetos com .NET CORE MVC</li>
            <li>Auto gerenciamento de atividades no modelo Ágil (Scrum)</li>
            <li>Desenvolvimento de atividades com: React Js, Node.Js, C#, SASS, PostgreeSQL</li>            
          </ul>
        </div>
        <div className="technology-card">
          <h3>Marisa</h3>
          <h5>Janeiro 2021 - Dezembro 2021</h5>
          <ul>
            <li>Testes: caixa preta, caixa branca, regressão, usabilidade, segurança e automatizados com Automation Anywhere</li>
            <li>Criação de planos de testes nos modelos PDD e SDD</li>
            <li>TesteRail desenvolvidos e implementados pra garantia da experiencia do usuario</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienciasContainer;
