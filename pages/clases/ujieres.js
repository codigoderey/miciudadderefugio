import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

const ClasesDeUjieres = () => {
	return (
		<>
			<Head>
				{' '}
				<meta
					name="description"
					content="El trabajo de ujieres va más allá de lo que vemos dentro del servicio en la iglesia.  Aprende en esta clase que abarca el tema de los ujieres."
				/>
				<meta name="autor" content="Reynaldo Navedo" />
				<meta
					name="keywords"
					content="¿qué es un  ujier?, iglesia ciudad de refugio millersville, clase para ujieres, eventos y actividades, ujieres, ujier, ujier cristiano, actividades del ujier, ujier en la iglesia, ujier cristiano"
				/>
			</Head>
			<Layout pageTitle="Clase para ujieres." />
			<PageHeader title="Clase de ujieres" />
			<section className="blog-one blog-one__home blog-one__grid">
				<div className="container">
					<div>
						<h2>El ujier en la iglesia</h2>
						<iframe
							className="mt-3 mb-5"
							src="https://www.youtube.com/embed/fwVPdAHA-yU"
							width="400"
							height="225"
							title="Clase para ujieres. Iglesia Ciudad de Refugio."
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<div>
							<h2>Materiales para descargar:</h2>
						</div>
						<div className="mb-2">
							<i className="mr-2 fas fa-file-word fa-2x"></i>
							<a
								href="/assets/ujieres/materiales/taller-de-capacitacion-para-diaconos.docx"
								download
							>
								Descarga la lectura
							</a>
						</div>
						<div className="mb-2">
							<i className="mr-2 fas fa-file-powerpoint fa-2x"></i>
							<a
								href="/assets/ujieres/materiales/diaconos-y-ujieres.pptx"
								download
							>
								Slideshow
							</a>
						</div>
						<div className="mt-5">
							<h2>Información de contacto</h2>
							<p className="mb-0 mt-3">
								<strong>Instructor:</strong> Reynaldo Navedo
							</p>
							<p className="mb-0">
								<strong>Teléfono:</strong>{' '}
								<a href="tel:4439162409">443-916-2409</a>
							</p>
							<p className="mb-0">
								<strong>Teléfono:</strong>{' '}
								<a href="mailto:rnavedojr@outlook.com">rnavedojr@outlook.com</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ClasesDeUjieres;
