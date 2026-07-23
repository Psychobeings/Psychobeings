const NavItems = ({ mobile = false }) => (
  <>
    <Link
      to="/"
      className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">
        Home
      </span>
    </Link>

    <Link
      to="/about"
      className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">
        About
      </span>
    </Link>

    <Link
      to="/services"
      className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">
        Our Services
      </span>
    </Link>

    {/* NEW PACKAGES LINK */}

    <Link
      to="/packages"
      className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">
        Packages
      </span>
    </Link>

    <span
      onClick={() => {
        setIsOpen(false);
        onContactClick();
      }}
      className={`cursor-pointer relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
    >
      <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">
        Contact Us
      </span>
    </span>
  </>
);