import ExperienciasContainer from "./ExperienciasContainer";
import AboutContainer from "./AboutContainer";
import FormacaoContainer from "./FormacaoContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ExperienciasContainer />
      <FormacaoContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
