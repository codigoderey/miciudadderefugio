import React from 'react'
import Link from "next/link"

const PruebasPage = ({ users }) => {
  console.log(users)
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-12">
          <div className="cta-three__content">
            <div className="mt-3 block-title text-left">
              <span className="block-title__bubbles"></span>
              <p>Educación cristiana</p>
              <h3>Pruebas disponibles</h3>
            </div>
            <div className="cta-three__box-wrap">
              <div className="cta-three__box">
                <div className="cta-three__box-content">
                  <h3>Instrucciones:</h3>
                  <div className="mb-2">
                    <p>Por favor elija el nombre del maestro del ministerio al que pertenece y siga las instrucciones en la página que continúa.</p>
                  </div>
                </div>
              </div>

              <div className="cta-three__box">
                <div className="cta-three__box-content">
                  <h3>Líderes:</h3>
                  {users.map(u => {
                    return u.role === "lider" && (
                      (
                        <div key={u._id} className="mb-2">
                          <p><b className="text-dark">Nombre:</b> {u.name}</p>
                          <p><b className="text-dark">Ministerio:</b> {u.ministry}</p>
                          <span className="mr-2"><i className="fas fa-book"></i></span>
                          <Link className="custom-link" href={`/pruebas/maestro/${u._id}`}>{`Ver pruebas publicadas por ${u.name}`}</Link>
                          <hr />
                        </div>
                      )
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PruebasPage
