import React from 'react'

const HorarioMinisterios = ({ buttonLink, buttonText }) => {
  return (
    <>
      <a href={buttonLink} className="thm-btn cta-three__btn mr-3">{buttonText}</a>
    </>
  )
}

export default HorarioMinisterios
