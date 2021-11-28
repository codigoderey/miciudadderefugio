import React from 'react';
import HorarioMinisterios from './HorarioMinisterios';

const CalendarioPage = () => {
  return (<div className="cta-three">
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-12">
          <div className="cta-three__content">
            <div className="mt-3 block-title text-left">
              <span className="block-title__bubbles"></span>
              <p>Activos en la obra</p>
              <h3>Creciendo en el Espíritu</h3>
            </div>
            <div className="cta-three__box-wrap">
              <div className="cta-three__box">
                <div className="cta-three__box-content">
                  <h3>Domingos</h3>
                  <div className="mb-2">
                    <p><b className="text-dark">Hora:</b> 2:00 PM</p>
                    <p><b className="text-dark">Actividad:</b> Escuela bíblica para todas las edades</p>
                  </div>
                  <div className="mb-2">
                    <p><b className="text-dark">Hora:</b> 3:00 PM</p>
                    <p><b className="text-dark">Actividad:</b> Servicio general de adoración y palabra</p>
                  </div>
                </div>
              </div>

              <div className="cta-three__box">
                <div className="cta-three__box-content">
                  <h3>Martes</h3>
                  <div className="mb-2">
                    <p><b className="text-dark">Hora:</b> 7:00 PM</p>
                    <p><b className="text-dark">Actividad:</b> Servicio Ministerial de adoración y palabra</p>
                  </div>
                </div>
              </div>

              <div className="cta-three__box">
                <div className="cta-three__box-content">
                  <h3>Jueves</h3>
                  <div className="mb-2">
                    <p><b className="text-dark">Hora:</b> 7:00 PM</p>
                    <p><b className="text-dark">Actividad:</b> Reunión de capacitación, estudio y oración</p>
                  </div>
                </div>
              </div>
              <HorarioMinisterios
                buttonText="Sobre nosotros"
                buttonLink="/nosotros"
              />
              <HorarioMinisterios
                buttonText="Ministerios"
                buttonLink="/ministerios"
              />
              <div className="mt-5 border border-info p-3 text-dark">
                <div>
                  <h3>¿Cómo llegar a nuestra iglesia?</h3>
                  <p>Puede llegar a nuestra iglesia en la siguiente dirección:</p>
                  <p><a href="https://www.google.com/maps/dir/39.3052681,-76.6759214/649+Old+Mill+Rd,+Millersville,+MD+21108/@39.2129955,-76.7493587,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7fb5a9f694629:0x1c89190f36256bb0!2m2!1d-76.6294481!2d39.1173779" target="_blank">649 Old Mill Rd, <br />Millersville, MD 21108</a></p>
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
export default CalendarioPage;