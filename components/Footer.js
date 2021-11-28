import React, { Component } from 'react';
import MailChimp from './Formularios/MailChimp';

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollBtn: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.scrollTop = this.scrollTop.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
    }

  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <footer className="site-footer">
          <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt="" />
          <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt="" />
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-widget footer-widget__about">
                    <a className="footer-widget__logo" href="/"><img
                      src="/assets/images/mocs/banner-moc-1-1.png"
                      width="75"
                      alt="Ciudad de Refugio logo" />
                    </a>
                    <p>Nos encontramos en la <a href="https://www.google.com/maps/dir/39.3052681,-76.6759214/649+Old+Mill+Rd,+Millersville,+MD+21108/@39.2129955,-76.7493587,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7fb5a9f694629:0x1c89190f36256bb0!2m2!1d-76.6294481!2d39.1173779" target="_blank">649 Old Mill Rd, Millersville, MD 21108</a> para servirte.  Es nuestra visión prepara discípulos que busquen la unidad de la iglesia y edificación del cuerpo de Cristo.</p>
                    <p><a href="mailto:informacion@miciudadderefugio.com">informacion@miciudadderefugio.com</a> <br />
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="footer-widget footer-widget__links">
                    <h3 className="footer-widget__title">Navegación</h3>
                    <div className="footer-widget__links-wrap">
                      <ul className="list-unstyled">
                        <li><a href="/nosotros">Sobre nosotros</a></li>
                        <li><a href="/horarios">Horarios</a></li>
                        <li><a href="/ministerios">Ministerios</a></li>
                        <li><a href="/oracion">Oración</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/preguntas">Preguntas</a></li>
                        <li><a href="/admin">Admin</a></li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-4">
                  <div className="footer-widget footer-widget__subscribe">
                    <h3 className="footer-widget__title">Suscríbete a nuestros correos</h3>
                    <MailChimp />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container">
                <div className="site-footer__social">
                  <a className="fab fa-facebook-f" href="https://facebook.com/miciudadderefugio"></a>
                  <a className="fab fa-youtube" href="https://www.youtube.com/channel/UCufkwhR6pcTHY-yZUE7eJcg"></a>
                </div>
                <p>Todos los Derechos Reservados <br />© Copyright {new Date().getFullYear()} por <a href="https://reynaldo.website">Reynaldo Website</a></p>
              </div>

            </div>

          </div>
        </footer>
        <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{ display: this.state.scrollBtn ? 'block' : 'none' }}><i
          className="fa fa-angle-up"></i></div>

        <div className="side-menu__block">


          <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
          </div>
          <div className="side-menu__block-inner ">
            <div className="side-menu__top justify-content-end">
              <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                src="/assets/images/shapes/close-1-1.png" alt="" /></a>
            </div>

            <nav className="mobile-nav__container">

            </nav>
            <div className="side-menu__sep"></div>

            <div className="side-menu__content">
              <p>Nos encontramos en la <a href="https://www.google.com/maps/dir/39.3052681,-76.6759214/649+Old+Mill+Rd,+Millersville,+MD+21108/@39.2129955,-76.7493587,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7fb5a9f694629:0x1c89190f36256bb0!2m2!1d-76.6294481!2d39.1173779" target="_blank">649 Old Mill Rd, Millersville, MD 21108</a> para servirte.  Es nuestra visión prepara discípulos que busquen la unidad de la iglesia y edificación del cuerpo de Cristo.</p>
              <p><a href="mailto:informacion@miciudadderefugio.com">informacion@miciudadderefugio.com</a> <br /></p>
              <div className="side-menu__social">
                <a className="fab fa-facebook-f" href="https://facebook.com/miciudadderefugio"></a>
                <a className="fab fa-youtube" href="https://www.youtube.com/channel/UCufkwhR6pcTHY-yZUE7eJcg"></a>
              </div>
            </div>

          </div>

        </div>

      </div>

    )
  }
}