import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const links = [
    {
      path: '/',
      label: 'About Me',
    },
    {
      path: '/portfolio',
      label: 'Portfolio',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
    {
      path: '/resume',
      label: 'Resume',
    },
  ];

  return (
    <div className="navbar-end flex items-center justify-end gap-4">
      {links.map((link) => {
        return (
          <NavLink
            key={link.path}
            to={link.path}
            href={link.path}
            className={({ isActive }) => {
              return isActive ? 'link link-secondary' : 'link';
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
