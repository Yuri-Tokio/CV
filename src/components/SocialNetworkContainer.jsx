import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/yuri-tokio-1255331a4/",icon: <FaLinkedinIn /> },
  // { name: "github", link: "https://github.com/Yuri-Tokio?tab=repositories", icon: <FaGithub /> },
  // { name: "instagram", link: "https://www.instagram.com/yuri-tokio/", icon: <FaInstagram /> },
];

const socialNetworksGithub = [
  { name: "github", link: "https://github.com/Yuri-Tokio?tab=repositories", icon: <FaGithub /> },
];

const socialNetworksInstagram = [
  { name: "instagram", link: "https://www.instagram.com/yuri-tokio/", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      <div className="info-card">
        {socialNetworks.map((network) => (
          <a href="https://www.linkedin.com/in/yuri-tokio-1255331a4/" target="_blank" className="social-btn" id={network.name} key={network.name}>
            <FaLinkedinIn />
          </a>
        ))}
        <div>
          <h5 className="h5">linkedin.com/in/yuri-tokio-1255331a4</h5>
        </div>
      </div>
      
      <div className="info-card">
        {socialNetworksGithub.map((network) => (
          <a href="https://github.com/Yuri-Tokio?tab=repositories" target="_blank" className="social-btn" id={network.name} key={network.name}>
            <FaGithub />
          </a>
        ))}
        <div>
          <h5 className="h5">github.com/Yuri-Tokio?tab=repositories</h5>
        </div>
      </div>

      {/* <div className="info-card">
        {socialNetworksInstagram.map((network) => (
          <a href="https://www.linkedin.com/in/yuri-tokio-1255331a4/" target="_blank" className="social-btn" id={network.name} key={network.name}>
            <FaInstagram />
          </a>
        ))}
        <div>
          <h5 className="h5">instagram.com/yuri-tokio</h5>
        </div>
      </div> */}
    </section>
  );
};

export default SocialNetworkContainer;
