import React from 'react';
import Link from "next/link"
import HorarioMinisterios from "../components/HorarioMinisterios";

const FeaturesOne = () => {
  return (
    <div className="cta-three">
      <div className="container">
        <img src="/assets/images/mocs/cta-moc-1-1.png" alt="" className="cta-three__moc" />
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-three__content">
              <div className="mt-3 block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Sobre 9 años</p>
                <h3>Sirviendo al Rey de Reyes</h3>
              </div>
              <div className="cta-three__box-wrap">
                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Cultura de Oración</h3>
                    <p>Ciudad de Refugio practica y <Link href="/oracion"><a>exhortado la oración como parte de nuestro diario vivir</a></Link>. Creemos que es el elemento esencial para permanecer fortalecidos en una vida agradable a Dios. Nuestras líneas de oración están abiertas para todo el que quiera unirse, <Link href="/oracion"><a>conoce más aquí</a></Link>.</p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3>Capacitación de Líderes</h3>
                    <p>Es nuestra prioridad capacitar personas dispuestas a responder al llamado de Dios sobre sus vidas.  A través de la oración, estudio de la palabra y talleres de capacitación ayudamos a discipular y crear líderes cristianos.  Es nuestra visión hacer discípulos dispuestos a ir a las naciones para predicar el evangelio.</p>
                  </div>
                </div>

                <div className="cta-three__box mb-3">
                  <div className="cta-three__box-content">
                    <h3>Ministerios en Acción</h3>
                    <p>Apoyando la familia y las comunidades cercanas, los ministerios en Ciudad de Refugio buscan servir a la comunidad y edificar el cuerpo de Cristo.  Desde escuela bíblica para todas las edades, ministerios de danza y adoración y grupos de evangelismo. <Link href="/ministerios"><a>Conozca la diversidad de ministerios</a></Link> que sirven en Ciudad de Refugio.</p>
                  </div>
                </div>
                <HorarioMinisterios
                  buttonLink="/horarios"
                  buttonText="Nuestro Horario"
                />
                <HorarioMinisterios
                  buttonLink="/ministerios"
                  buttonText="Nuestros Ministerios"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default FeaturesOne;