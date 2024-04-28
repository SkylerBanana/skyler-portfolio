import { FaGithub } from "react-icons/fa6";
export default function Nav() {
  const links = [
    { text: "About", url: "#" },
    { text: "Work", url: "#" },
    { text: "Contact", url: "#" },
  ];

  return (
    <div
      id="nav_container"
      className="flex items-center w-11/12 md:mt-8 fixed top-0 justify-between"
    >
      <div className="flex items-center justify-start gap-12">
        <div className="flex items-center gap-2">
          <FaGithub className="w-10 h-auto" />
          <span>Skyler Jones</span>
        </div>
        <nav className="flex gap-12 text-[#A1A8D9]">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className=" hover:text-white transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
