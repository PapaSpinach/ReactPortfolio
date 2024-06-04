import githubIcon from '../assets/github-mark.svg';

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
      </nav>
    </footer>
  );
}
