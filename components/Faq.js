import Link from 'next/link';
import React from 'react';

const Faq = () => {
  return (

    <section className="faq-one">
      <img src="/assets/images/shapes/faq-shape-1.png" alt="" className="faq-one__shape-1" style={{ zIndex: -1 }} />
      <img src="/assets/images/shapes/faq-shape-2.png" alt="" className="faq-one__shape-2" />
      <img src="/assets/images/shapes/faq-shape-3.png" alt="" className="faq-one__shape-3" style={{ zIndex: -1 }} />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Tenemos respuestas a</p>
          <h3>Preguntas frecuentes</h3>
        </div>
        <div className="accrodion-grp wow fadeIn faq-accrodion animated">
          <div className="accrodion">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>¿Cuáles son sus horarios de reunión?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>Nos reunimos Domingo, Martes y Jueves para adorar a Dios, estudiar Su palabra y orar. <Link href="/horarios"><a>Visita nuestra página de horarios para más información.</a></Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion  ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>¿Cuales son sus ministerios?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>Iglesia Ciudad de Refugio cuenta con una diversidad de Ministerios dispuestos adorar a Dios y servir el reino con nuestros talentos y dones. <Link href="/ministerios"><a>Visita nuestra página de ministerios para más información.</a></Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>¿Hacen servicio a la comunidad?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>Parte esencial de Ciudad de Refugio es impactar las comunidades que nos rodean.  A través de la evangelización y el ministerio de benevolencia servimos a las comunidades adyacentes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Faq;