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
          <h3>Tok & Stok - Desenvolvedor Web Jr.</h3>
          <h5>Janeiro 2022 - Outubro 2022 (10 meses)</h5>
          <ul>
            <li>Integrações de APIs RESTful e MicroServiços</li>
            <li>Desenvolvimento na modelagem DDD</li>
            <li>HTTP Request/Response</li>
            <li>Criação de projetos responsivos com React.Js e ASP.NET CORE MVC</li>
            <li>Versionamento de atividades com Github.</li>
            <li>Participação ativa em todas as fases da metodologia ágil Scrum.
            </li>
          </ul>
        </div>
        <div className="technology-card">
          <h3>Marisa - Quality Assurance Jr.</h3>
          <h5>Janeiro 2021 - Dezembro 2021 (1 ano)</h5>
          <ul>
            <li>Criação de planos de testes nos modelos PDD e SDD</li>
            <li>TesteRail desenvolvidos e implementados pra garantia da experiência do usuário</li>
            <li>RPA com automation anywhere</li>
            <li>Participação ativa em todas as fases da metodologia ágil Scrum.</li>
            <li>Testes de caixa preta, caixa branca, regressão, usabilidade e segurança</li>
          </ul>
        </div>
        <div className="technology-card">
          <h3>Otimotex - Jovem Aprendiz (2019) / Estágiário (2020)</h3>
          <h5>Janeiro 2019 - Fevereiro 2021 (2 anos)</h5>
          <ul>
            <li>Construção de formulários HTML5/CSS</li>
            <li>MySQL e Firebird</li>
            <li>Suporte ao pacote office</li>
            <li>Supervisão diária dos sites de divulgação dos empreendimentos</li>
            <li>FTP para publicação dos arquivos de imagens em ambiente web</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienciasContainer;
