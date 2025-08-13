// Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/savtekLogo.png";

const Navbar = ({
  navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/projeler", label: "Projelerimiz" },
    {
      label: "Etkinliklerimiz",
      dropdown: true,
      items: [
        { href: "/etkinliklerimiz/2024-2025", label: "2024-2025" },
        { href: "/etkinliklerimiz/2023-2024", label: "2023-2024" },
        { href: "/etkinliklerimiz/2022-2023", label: "2022-2023" },
        { href: "/etkinliklerimiz/2021-2022", label: "2021-2022" },
        { href: "/etkinliklerimiz/2020-2021", label: "2020-2021" },
        { href: "/etkinliklerimiz/2019-2020", label: "2019-2020" },
      ],
    },
    { href: "/hakkımızda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
  ],
}) => {
  // State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Refs
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if link is active
  const isLinkActive = (link) => {
    if (link.dropdown) {
      return link.items.some((item) => location.pathname === item.href);
    }
    return location.pathname === link.href;
  };

  // Navigation handler
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    navigate(link.href);
  };

  // Dropdown toggle handler
  const handleDropdownToggle = (index, e) => {
    e.preventDefault();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Keyboard navigation handler
  const handleKeyDown = (e, link, isDropdown = false, index = null) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isDropdown) {
        handleDropdownToggle(index, e);
      } else {
        handleNavClick(e, link);
      }
    } else if (e.key === "Escape" && dropdownOpen !== null) {
      setDropdownOpen(null);
    }
  };

  // Logo click handler
  const handleLogoClick = () => {
    navigate("/");
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  // Logo keyboard handler
  const handleLogoKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <nav className="navbar" ref={navbarRef} id="navbar" role="navigation">
      <div className="container">
        <div className="nav-content">
          <div
            className="logo"
            onClick={handleLogoClick}
            onKeyDown={handleLogoKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Navigate to home page"
          >
            <img src={Logo} alt="EGE SAVTEK Logo" className="logo-image" />
          </div>

          <div className="nav-links">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="nav-item"
                ref={link.dropdown ? dropdownRef : null}
              >
                {link.dropdown ? (
                  <div className="dropdown">
                    <button
                      className={`nav-link dropdown-toggle ${
                        isLinkActive(link) ? "active" : ""
                      }`}
                      onClick={(e) => handleDropdownToggle(index, e)}
                      onKeyDown={(e) => handleKeyDown(e, link, true, index)}
                      aria-expanded={dropdownOpen === index}
                      aria-haspopup="true"
                      aria-label={`${link.label} dropdown menu`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`dropdown-icon ${
                          dropdownOpen === index ? "rotate" : ""
                        }`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="nav-underline"></div>
                    </button>

                    <div
                      className={`dropdown-menu ${
                        dropdownOpen === index ? "open" : ""
                      }`}
                    >
                      {link.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className={`dropdown-item ${
                            location.pathname === item.href ? "active" : ""
                          }`}
                          onClick={(e) => handleNavClick(e, item)}
                          onKeyDown={(e) => handleKeyDown(e, item)}
                          role="menuitem"
                          tabIndex={dropdownOpen === index ? 0 : -1}
                          aria-label={`Navigate to ${item.label}`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`nav-link ${isLinkActive(link) ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link)}
                    onKeyDown={(e) => handleKeyDown(e, link)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    <span>{link.label}</span>
                    <div className="nav-underline"></div>
                  </a>
                )}
              </div>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setDropdownOpen(null);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
          role="menu"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              <div key={index} className="mobile-nav-item">
                {link.dropdown ? (
                  <div className="mobile-dropdown">
                    <button
                      className={`mobile-nav-link mobile-dropdown-toggle ${
                        isLinkActive(link) ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setDropdownOpen(dropdownOpen === index ? null : index);
                      }}
                      aria-expanded={dropdownOpen === index}
                      aria-haspopup="true"
                      tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                      {link.label}
                      <svg
                        className={`mobile-dropdown-icon ${
                          dropdownOpen === index ? "rotate" : ""
                        }`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`mobile-dropdown-menu ${
                        dropdownOpen === index ? "open" : ""
                      }`}
                    >
                      {link.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className={`mobile-dropdown-item ${
                            location.pathname === item.href ? "active" : ""
                          }`}
                          onClick={(e) => handleNavClick(e, item)}
                          onKeyDown={(e) => handleKeyDown(e, item)}
                          role="menuitem"
                          tabIndex={
                            mobileMenuOpen && dropdownOpen === index ? 0 : -1
                          }
                          aria-label={`Navigate to ${item.label}`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${
                      isLinkActive(link) ? "active" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, link)}
                    onKeyDown={(e) => handleKeyDown(e, link)}
                    role="menuitem"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
