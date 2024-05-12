import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../src/assets/logo.png";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer mt-16 footer-center py-10 bg-[#A87676] text-black">
      <img data-aos="zoom-in-right" className="w-40" src={logo} alt="" />
      <nav data-aos="zoom-in-right" className="grid grid-flow-col font-semibold gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav data-aos="zoom-in-right">
        <div className="grid grid-flow-col gap-5">
          <a href="https://www.facebook.com/maybemahiiii" target="_blank">
          <FaFacebook size={25} />
          </a>
          <a href="https://www.instagram.com/mayb3_mahdi" target="_blank">
          <FaInstagram size={25}  />
          </a>
          <a href="https://github.com/maybemahdi" target="_blank">
          <BsGithub size={25}  />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2024 - All right reserved by{" "}
          <span className="font-bold text-[#FFD0D0]">Academia Alliance</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
