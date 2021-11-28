import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Moment from "react-moment"

const BlogDetails = ({ lectura }) => {

  const [lecturas, setLecturas] = useState([])

  useEffect(() => {
    obtenerLecturas()
  }, [])

  const obtenerLecturas = async () => {
    const url = "https://frutodelespiritu.com/api/lecturas"
    const { data } = await axios.get(url)
    setLecturas(data)
  }

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details__content">
              <div className="author-one">
                <div className="author-one__content">
                  <h3>Autor: {lectura.publicadoPor.nombre}</h3>
                  <p style={{ marginTop: "1rem" }}>Publicado originalmente en <a href={`https://frutodelespiritu.com/lecturas/lectura?slug=${lectura.slug}`}>Fruto del Espíritu</a></p>
                </div>
              </div>
              <ul className="blog-one__meta list-unstyled">
                <li><i className="far fa-clock"></i><span style={{ marginLeft: ".2rem" }}>Publicado </span> <Moment locale="es" fromNow>{lectura.createdAt}</Moment></li>
              </ul>
              <h3>{lectura.titulo}</h3>
              <div dangerouslySetInnerHTML={{ __html: lectura.contenido }}></div>
            </div>
            {/* <div className="blog-details__bottom">
              <div className="blog-details__social site-footer__social">
                <a className="fab fa-facebook-f" href="#"></a>
              </div>
            </div> */}
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar-single sidebar__post">
                <h3 className="sidebar__title">Últimas publicaciones</h3>
                {lecturas.map(l => (
                  <div key={l._id} className="sidebar__post-single">
                    <h3 key={l._id}><a href={`/blog-detalles?slug=${l.slug}`}>{l.titulo}</a>
                    </h3>
                  </div>
                )).reverse().splice(0, 5)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default BlogDetails;