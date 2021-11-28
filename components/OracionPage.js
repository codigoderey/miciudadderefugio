import React from 'react';
import HorarioMinisterios from './HorarioMinisterios';

const OracionPage = () => {
  return (
    <div className="cta-three">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <div className="cta-three__content">
              <div className="mt-3 block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Poder que nos levanta</p>
                <h3>El alimento que nos sostiene</h3>
              </div>
              <div className="cta-three__box-wrap">
                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Únete a nosotros <b>en la mañana</b></h3>
                    <p className="text-dark">En dos pasos ya estás conectado para aprender la palabra de Dios y orar con nosotros.</p>
                    <p><b className="text-dark">Cuando:</b> Lunes a Viernes</p>
                    <p><b className="text-dark">Hora:</b> 5:00 AM - 6:00 AM</p>
                    <p className="text-dark"><b>Instrucciones:</b></p>
                    <ol className="text-dark">
                      <li>Marca el número <a href="tel:+7124510606">712-451-0606</a></li>
                      <li>Marca el código 525298</li>
                      <li>¡Listo! Ya estás conectado para orar con nosotros.</li>
                    </ol>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Únete a nosotros <b>en la noche</b></h3>
                    <p><b className="text-dark">Cuando:</b> Lunes, Miércoles y Viernes</p>
                    <p><b className="text-dark">Hora:</b> 8:00 PM - 9:00 PM</p>
                    <p className="text-dark"><b>Instrucciones:</b></p>
                    <ol className="text-dark">
                      <li>Marca el número <a href="tel:+7124510606">712-451-0606</a></li>
                      <li>Marca el código 525298</li>
                      <li>¡Listo! Ya estás conectado para orar con nosotros.</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-5 border border-info p-3 text-dark">
                  <div>
                    <h3>Conoce nuestro horario</h3>
                    <p>Visita la página de nuestro horario y suscríbete a nuestros correos electrónicos para que estés alerta de todas nuestras fechas de servicios y actividades.</p>
                    <HorarioMinisterios
                      buttonText="Nuestro horario"
                      buttonLink="/horarios"
                    />
                    <HorarioMinisterios
                      buttonText="Sobre nosotros"
                      buttonLink="/nosotros"
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
export default OracionPage;