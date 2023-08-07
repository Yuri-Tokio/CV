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
          <p>JavaScript, C#, Java</p>
          <p>React.Js, Bootstrap, SASS</p>
          <p>Node.Js</p>
          <p>.NET CORE MVC V.7</p>
          <p>Springboot, Junit, Maven</p>
          <p>PostgreSQL/ SQL Server</p>
          <p>API RESTful, MicroServiços</p>
          <p>JSON/ XML/ Redis Cache</p>
          <p>Docker</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
