import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Screenshots = () => {

  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5
      },

      991: {
        slidesPerView: 3
      },

      767: {
        slidesPerView: 3

      },

      575: {
        slidesPerView: 2
      }
    }
  }

  return (
    <div>
      <section className="app-shot-one" id="app-shots">
        <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="app-shot__shape-1" />
        <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="app-shot__shape-2" />

        <div className="container-fluid">
          <div className="block-title text-center">
            <span className="block-title__bubbles"></span>
            <p>Esto es lo que hacemos</p>
            <h3>Búscanos <br />en las redes</h3>
          </div>
          <div className="app-shot-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-4.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-5.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-6.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-7.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-8.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-9.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-10.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-11.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-12.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-13.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-14.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/app-shots/cdr-15.jpg" alt="" />
              </div>
            </Swiper>
          </div>
          <div style={{ marginTop: "2rem" }} className="site-footer__social">
            <a className="fab fa-facebook-f" href="https://facebook.com/miciudadderefugio"></a>
            <a className="fab fa-youtube" href="https://www.youtube.com/channel/UCufkwhR6pcTHY-yZUE7eJcg"></a>
          </div>
        </div>
      </section>

    </div>
  )

}

export default Screenshots;