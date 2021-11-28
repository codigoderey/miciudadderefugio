import React from 'react';

const FeaturesThree = ({ topText, headerText, descriptionText, btnLink, btnText }) => {
  return (
    <section className="cta-two">
      <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
      <div className="container">
        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <img src="/assets/images/mocs/cta-moc-2-3.jpeg" alt="" className="w-100" />
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>{topText}</p>
                <h3>{headerText}</h3>
              </div>
              <p>{descriptionText}</p>
              <a href={btnLink} className="thm-btn cta-two__btn">{btnText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeaturesThree;