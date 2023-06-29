import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import SkillsContainer from "./SkillsContainer";

import Perfil from "../img/eu_perfil_jun_2023.jpg";
import CV from "../pdf/CV-Yuri_Tokio.pdf"

import "../styles/components/sidebar.sass";
import HobbiesContainer from "./HobbiesContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Perfil} alt="Yuri Tokio" />
      <p className="title">Desenvolvedor de Software</p>
      <InformationContainer />
      <SkillsContainer />
      <HobbiesContainer />
    </aside>
  );
};

export default Sidebar;
