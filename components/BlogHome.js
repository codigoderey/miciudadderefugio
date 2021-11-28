import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from "axios"
import Moment from "react-moment"

const BlogHome = () => {

  const [lecturasReciente, setLecturasRecientes] = useState([])

  useEffect(() => {
    obtenerLecturasRecientes()
  }, [])

  const obtenerLecturasRecientes = async () => {
    const url = "https://frutodelespiritu.com/api/lecturas"
    const { data } = await axios.get(url)
    setLecturasRecientes(data)
  }



  return (

    <section className="blog-one blog-one__home" id="blog">
      <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape-1" />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Edifícate con nuestras lecturas</p>
          <h3>Palabra que levanta</h3>
        </div>

        <div className="row">
          {lecturasReciente.map(l => (
            <div key={l._id} className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="blog-one__single">
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li><i className="far fa-clock"></i>Publicado <Moment locale="es" fromNow>{l.createdAt}</Moment></li>
                  </ul>
                  <h3>
                    <Link href={`/blog-detalles?slug=${l.slug}`}>
                      <a>{l.titulo}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default BlogHome;