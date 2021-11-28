import React from 'react';

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Imitando a Jesús</p>
          <h3>Formando discípulos que adoran</h3>
        </div>
        <div className="row">
          <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
            data-wow-delay="000ms">
            <div className="service-one__single">
              <img src="/assets/icons/Jesus.svg" />
              <h3>Discipulado</h3>
            </div>
          </div>

          <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
            data-wow-delay="100ms">
            <div className="service-one__single">
              <img src="/assets/icons/CrossSignwithArms.svg" />
              <h3>Oración</h3>
            </div>

          </div>

          <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
            data-wow-delay="200ms">
            <div className="service-one__single">
              <img src="/assets/icons/Bible.svg" />
              <h3>Estudios</h3>
            </div>

          </div>

          <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
            data-wow-delay="300ms">
            <div className="service-one__single">
              <img src="/assets/icons/Supper.svg" />
              <h3>Santa Cena</h3>
            </div>

          </div>

          <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
            data-wow-delay="400ms">
            <div className="service-one__single">
              <img src="/assets/icons/Church.svg" />
              <h3>Adoración</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <a href="/nosotros" className="thm-btn cta-three__btn text-align-center">Conócenos</a>
        </div>
      </div>

    </section>

  )
}
export default Services;