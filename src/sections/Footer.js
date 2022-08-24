function Menu({ routes }) {
  const links = routes.map((route) => {
    return (
      <a key={route.link} className="mx-2" href={route.link}>
        {route.label}
      </a>
    );
  });

  return <nav>{links}</nav>;
}

function Footer() {
  // menu routes
  const routes = [
    { label: "Home", link: "/#home" },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
  ];

  return (
    <footer className="h-32 flex flex-col justify-between items-center border-solid border-t border-hover p-4 sm:h-24 sm:flex-row-reverse md:px-8">
      <Menu routes={routes} />
      <span className="block">
        <strong>&copy; 2022</strong> Alejandro Serrano
      </span>
    </footer>
  );
}

export default Footer;
