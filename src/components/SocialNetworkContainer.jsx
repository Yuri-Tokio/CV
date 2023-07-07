import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/yuri-tokio-1255331a4/",icon: <FaLinkedinIn /> },
];

const socialNetworksGithub = [
  { name: "github", link: "https://github.com/Yuri-Tokio", icon: <FaGithub /> },
];

const socialPortfolio = [
  { name: "portfolio", link: "https://yuri-tokio.github.io/Page-Index", icon: <SiWebmoney /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      <div className="info-card">
        {socialNetworks.map((network) => (
          <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            <FaLinkedinIn />
          </a>
        ))}
        <div>
          <h5 className="h5">linkedin.com/in/yuri-tokio-1255331a4</h5>
        </div>
      </div>
      
      <div className="info-card">
        {socialNetworksGithub.map((network) => (
          <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            <FaGithub />
          </a>
        ))}
        <div>
          <h5 className="h5">github.com/Yuri-Tokio</h5>
        </div>
      </div>
      <div className="info-card">
        {socialPortfolio.map((network) => (
          <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            <SiWebmoney />
          </a>
        ))}
        <div>
          <h5 className="h5">yuri-tokio.github.io/Page-Index</h5>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworkContainer;
