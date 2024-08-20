"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

enum Dropdown {
  None,
  About,
  Projects
};

const MobileNavigation = ({ closeNav } : { closeNav : () => void }) => {
  return (
    <nav className={styles.mobileNav}>
      <Link href="/" onClick={closeNav}>Home <ChevronRight className={styles.icon} /></Link>
      <Link href="/about" onClick={closeNav}>About <ChevronRight className={styles.icon} /></Link>
      <Link href="/projects" onClick={closeNav}>Projects <ChevronRight className={styles.icon} /></Link>
      <Link href="/write-a-message" onClick={closeNav}>Write a Message <ChevronRight className={styles.icon} /></Link>
      <Link href="/support-us" onClick={closeNav}>Support Us <ChevronRight className={styles.icon} /></Link>

      <a className={styles.social} href="https://www.instagram.com/messagesof.hope/" target="_blank"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}/> Check out our Instagram</a>
    </nav>
  );
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState<Dropdown>(Dropdown.None);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Add active class to header when user scrolls down to colour the header.
   */
  useEffect(() => {
    const scrollFunction = () => {
      const header = document.querySelectorAll(`.${styles.header}`);
      const headerArray = Array.from(header); // Convert NodeList to Array
      if (document.body.scrollTop > window.innerHeight * 0.1 || document.documentElement.scrollTop > window.innerHeight * 0.1) {
        for (let h of headerArray) {
          h.classList.add(styles.active);
        }
      } else {
        for (let h of headerArray) {
          h.classList.remove(styles.active);
        }
      }
    }
    // Call scroll function to check if header should be active on load
    scrollFunction();

    // Add scroll event listener
    window.addEventListener("scroll", scrollFunction, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    }
  }, []);

  /**
   * Handle dropdown for about section.
   */
  const onAboutClick = () => {
    if (!headerRef.current) return;

    if (dropdown !== Dropdown.About) {
      // Projects dropdown is open
      if (dropdown === Dropdown.Projects) headerRef.current.classList.remove(styles.projects);
      headerRef.current.classList.add(styles.interact);
      headerRef.current.classList.add(styles.about);
    } else {
      // About dropdown is open
      headerRef.current.classList.remove(styles.about);
      headerRef.current.classList.remove(styles.interact);
    }

    setDropdown(dropdown === Dropdown.About ? Dropdown.None : Dropdown.About);
  }

  /**
   * Handle dropdown for projects section.
   */
  const onProjectClick = () => {
    if (!headerRef.current) return;
    
    if (dropdown !== Dropdown.Projects) {
      // About dropdown is open
      if (dropdown === Dropdown.About) headerRef.current.classList.remove(styles.about);
      headerRef.current.classList.add(styles.interact);
      headerRef.current.classList.add(styles.projects);
    } else {
      // Projects dropdown is open
      headerRef.current.classList.remove(styles.projects);
      headerRef.current.classList.remove(styles.interact);
    }

    setDropdown(dropdown === Dropdown.Projects ? Dropdown.None : Dropdown.Projects);
  }

  /**
   * Close dropdown when user clicks outside of dropdown.
   * @param {*} e the event
   */
  const closeDropdown = (e: any) => {
    if (!headerRef.current) return;

    // Check if event is not a click or if the target is not a dropdown
    if (e.type !== "scroll") {
      if (!e.target || typeof e.target.className !== 'string') return;
      if (e.target.className && (e.target.className.split(" ").includes(styles.dropdown) || e.target.className.split(" ").includes("dropdown"))) return;
    }

    // Close dropdown
    headerRef.current.classList.remove(styles.interact);
    if (dropdown === Dropdown.Projects)
      headerRef.current.classList.remove(styles.projects);
    else if (dropdown === Dropdown.About)
      headerRef.current.classList.remove(styles.about);

    setDropdown(Dropdown.None);
  };

  /**
   * Add event listeners to close dropdown when user clicks outside of dropdown.
   */
  useEffect(() => {
    if (dropdown === Dropdown.Projects || dropdown === Dropdown.About) {
      document.addEventListener("click", closeDropdown);
      window.addEventListener("scroll", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", closeDropdown);
    }
  }, [dropdown]);
  

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.innerHeader}>

        <div className={styles.left}>
          <img src="/Messages of Hope.png" alt="Messages of Hope logo" className={styles.logo} />

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <div className={styles.dropdownContainer}>
              <button onClick={onAboutClick} className={styles.aboutButton}>
                About <ChevronRight className={styles.icon} />
              </button>
              { dropdown !== Dropdown.About ? null : (
                <div className={styles.dropdown}>
                  <Link href="/about">
                    <h6>About Messages of Hope <ChevronRight className={styles.icon} /></h6>
                    <p>What is Messages of Hope? What does Messages of Hope do?</p>
                  </Link>
                  <Link href="/our-team">
                    <h6>Our Team <ChevronRight className={styles.icon} /></h6>
                    <p>Who are the Messages of Hope team and how can I get involved?</p>
                  </Link>
                  <Link href="/our-creator">
                    <h6>Our Creator <ChevronRight className={styles.icon} /></h6>
                    <p>Who created Messages of Hope and why is it important?</p>
                  </Link>
              </div>
              )}
            </div>
            <div className={styles.dropdownContainer}>
            <button onClick={onProjectClick} className={styles.projectsButton}>
              Projects <ChevronRight className={styles.icon} />
            </button>
            { dropdown !== Dropdown.Projects ? null : (
              <div className={styles.dropdown}>
                <Link href="/projects/connections-2024">
                  <h6>Connections 2024 <ChevronRight className={styles.icon} /></h6>
                  <p>Connections is a short film created by Messages of Hope that explores how we can find hope by connecting with others.</p>
                </Link>
                <Link href="/projects/bags-of-hope">
                  <h6>Bags of Hope <ChevronRight className={styles.icon} /></h6>
                  <p>Bags of Hope is a project to give items to patients arriving on psychiatric wards.</p>
                </Link>
                <Link href="/projects">
                  <h6>View All Projects <ChevronRight className={styles.icon} /></h6>
                  <p>View all of our projects and see how you can get involved.</p>
                </Link>
              </div>
            )}
            </div>
            <Link href="/write-a-message">Write a Message</Link>
            <Link href="/support-us">Support Us</Link>
          </nav>
        </div>

        <div className={styles.right}>
          <a className={styles.social} href="https://www.instagram.com/messagesof.hope/" target="_blank"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}/> Instagram</a>

          <button className={`${styles.hamburger} ${showMobileNav ? styles.open : ""}`} onClick={() => setShowMobileNav(!showMobileNav)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          { showMobileNav ? <div aria-hidden="true" className={styles.grad} /> : null}
          { showMobileNav ? <MobileNavigation closeNav={ () => setShowMobileNav(false) }/> : null }
        </div>
  
      </div>
    </header>
  );
};
export default Navbar;
