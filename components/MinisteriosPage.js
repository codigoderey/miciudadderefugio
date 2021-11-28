import React from 'react';
import Link from "next/link"
import HorarioMinisterios from './HorarioMinisterios';

const FeaturesOne = () => {
  return (
    <div className="cta-three">
      <div className="container">
        <div className="row justify-content-end">
          <div className="">
            <div className="cta-three__content">
              <div className="mt-3 block-title text-left">
                <p>Diversidad de dones y talentos</p>
                <h3>Para servir a un solo Dios</h3>
              </div>
              <div className="cta-three__box-wrap">
                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Oración en la mañana</h3>
                    <p>Ciudad de Refugio ora a través de la Línea de Oración de Lunes a Viernes a las 5:00AM. Durante esta hora compartimos una reflexión de la palabra de Dios, damos gracias y oramos. <Link href="/oracion"><a>Aprende cómo unirte a nuestro esfuerzo y se parte de este grupo.</a></Link></p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Escuela bíblica</h3>
                    <p>Todos los domingos a partir de las 2:00P comenzamos nuestra escuela bíblica para todas las edades.  Contamos con cuido de infantes, clases para niños, pre adolescentes, adolescentes y adultos.  <Link href="/horarios"><a>Conozca nuestro horario</a></Link> para más actividades relacionadas.</p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Ministerio de alabanza</h3>
                    <p>El ministerio de adoración se encarga de abrir todos los servicios martes y domingos.  A través de la alabanza comenzamos con acción de gracias y honramos al Todopoderoso y único Dios. Te invitamos a ser parte de este mover de Dios.</p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Ministerio de danza</h3>
                    <p>Creemos en honrar a Dios a través de la danza.  A través de la danza celebramos a Jesucristo, honramos a Dios y declaramos unidad en el pueblo de Cristo.  Danzar para Dios es un privilegio.</p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Ministerio de evangelismo</h3>
                    <p>Llevar las buenas nuevas de Dios es un mandato. Le pedimos a Dios valentía, estrategias y creatividad para salir a predicar el evangelio. Dios está buscando gente dispuesta a cumplir esta encomienda.</p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Ministerio de benevolencia</h3>
                    <p>Cada mes recibimos un camión lleno de variedad de frutas y vegetales. Alertamos a las comunidades para que pasen a buscar su caja. Esta es una manera de bendeir nuestra comunidad.</p>
                  </div>
                </div>

                <div className="mt-5 border border-info p-3 text-dark">
                  <div>
                    <h3>Conoce nuestro horario</h3>
                    <p>Visita la página de nuestro horario y suscríbete a nuestros correos electrónicos para que estés alerta de todas nuestras fechas de servicios y actividades.</p>
                    <HorarioMinisterios
                      buttonText="Sobre nosotros"
                      buttonLink="/nosotros"
                    />
                    <HorarioMinisterios
                      buttonText="Nuestro horario"
                      buttonLink="/horarios"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default FeaturesOne;