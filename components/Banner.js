import React from 'react';

const Banner = () => {
  return (
    <section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)` }}>

      <div className="container">
        <img src="/assets/images/mocs/banner-moc-1-1.png" alt="" className="banner-one__moc" />
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <h3>Déjanos <br /> amarte</h3>
              <p>Bienvenidos a Ciudad de Refugio, casa de oración, puerta del cielo.  Formando discípulos para este tiempo.</p>
              <a href="/nosotros" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Conócenos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner;