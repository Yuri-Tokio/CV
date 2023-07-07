import "../styles/components/skillscontainer.sass";

import { AiFillPhone } from "react-icons/ai";

const SkillsContainer = () => {
  return (
    <section id="skill">
      <div className="info-card">
        <div>
          <h3>Habilidades</h3>
          <p>GIT/ GITHUB/ Azure DevOPS</p>
          <p>Metodologias Ágeis</p>
          <p>Domain-Driven-Design (DDD)</p>
          <p>HTML5, CSS3, Bootstrap, SASS</p>
          <p>JavaScript, React Js, Node Js</p>
          <p>.NET CORE MVC, C#</p>
          <p>PostgreSQL/ MySQL/ OracleSQL</p>
          <p>API RESTful, MicroServiços</p>
          <p>Docker</p>
          <p>Poo/ Json/ Redis Cache</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
