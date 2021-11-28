import React from 'react';

const FeaturesTwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
        <img src="/assets/images/mocs/cta-moc-2-1.png" alt="" className="cta-two__moc" />
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Activos para Cristo</p>
                <h3>Conoce nuestro calendario, alertas 24/7</h3>
              </div>

              <p>Somos una iglesia que cree en la oración como base de nuestra fuerza en Cristo y en Su palabra como centro de edificación. Actívate junto a nosotros.</p>
              <a href="/horarios" className="thm-btn cta-two__btn">Calendario</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeaturesTwo;