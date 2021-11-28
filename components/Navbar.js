import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router"

const Navbar = ({ user }) => {

  const router = useRouter()

  useEffect(() => {

    const mobileMenu = () => {

      //Mobile Menu Toggle
      let mobileNavContainer = document.querySelector(".mobile-nav__container");
      let mainNavContent = document.querySelector(".main-nav__main-navigation").innerHTML;
      mobileNavContainer.innerHTML = mainNavContent;

      document.querySelector(".side-menu__toggler").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle('active');
        e.preventDefault();
      });

      //Close Mobile Menu
      document.querySelector(".side-menu__close-btn").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove('active');
        e.preventDefault();
      });

    }

    mobileMenu()

  })

  return (

    <div>

      <header className="main-nav__header-one ">
        <nav className="header-navigation stricky">
          <div className="container">
            <div className="main-nav__logo-box w-100">
              <a href="/" className="main-nav__logo">
                <img src="/assets/images/mocs/banner-moc-1-1.png" width="50" alt="Ciudad de Refugio logo" />
                <span className="text-white ml-2">Ciudad de Refugio</span>
              </a>
              <a href="#" className="ml-auto side-menu__toggler"><i className="fa fa-bars"></i></a>
            </div>
            <div className="main-nav__main-navigation">
              <ul className="one-page-scroll-menu main-nav__navigation-box">
                <li className={`${router.pathname === "/" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/"><a>Inicio</a></Link>
                </li>
                <li className={`${router.pathname === "/nosotros" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/nosotros"><a>Nosotros</a></Link>
                </li>
                <li className={`${router.pathname === "/oracion" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/oracion"><a>Oración</a></Link>
                </li>
                <li className={`${router.pathname === "/blog" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/blog"><a>Blog</a></Link>
                </li>
                <li className={`${router.pathname === "/audio" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/audio"><a>Audio</a></Link>
                </li>
                <li className={`${router.pathname === "/eventos" ? "current scrollToLink" : "scrollToLink"}`}>
                  <Link href="/eventos"><a>Eventos</a></Link>
                </li>
                {user && (
                  <li className={`${router.pathname === "/admin" ? "current scrollToLink" : "scrollToLink"}`}>
                    <Link href="/admin"><a>Usuario</a></Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}

export default Navbar