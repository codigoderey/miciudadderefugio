import React from 'react';
import Link from 'next/link';
import Moment from "react-moment"

const Blog = ({ lecturas }) => {
  return (

    <section className="blog-one blog-one__home blog-one__grid">
      <div className="container">
        <div className="row">
          {lecturas ? lecturas.map(l => (
            <div key={l._id} className="col-12">
              <div className="blog-one__single">
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li><i className="far fa-clock"></i><span style={{ marginLeft: ".2rem" }}>Publicado </span> <Moment locale="es" fromNow>{l.createdAt}</Moment></li>
                  </ul>
                  <h3>
                    <Link href={`/blog-detalles?slug=${l.slug}`}>
                      <a>{l.titulo}</a>
                    </Link>
                  </h3>
                  <p>{l.resumen}</p>
                </div>
              </div>
            </div>
          )).reverse() : null}
        </div>
      </div>
    </section>
  )
}
export default Blog;