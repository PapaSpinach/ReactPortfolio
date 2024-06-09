import githubIcon from '../assets/github-mark.svg';
import linkedin from '../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/PapaSpinach/" target="_blank">
          <img src={githubIcon} width={24} height={24} />
        </a>

        <a href="https://www.linkedin.com/in/aaron-beckles-524807311/" target="_blank">
          <img src={linkedin} width={26} height={36} />
        </a>
      </nav>
    </footer>
  );
}
