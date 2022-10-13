import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import Link from "next/link";
import Moment from "react-moment";
import Swal from "sweetalert2";
import "moment-timezone";
import "moment/locale/es";

const IndexEventos = ({ eventos, user }) => {
	const callToDeleteEvent = (id) => {
		Swal.fire({
			icon: "question",
			title: "¿Confirma eliminar evento?",
			showConfirmButton: true,
			confirmButtonText: "Eliminar",
			confirmButtonColor: "rgb(64, 6, 144)",
			cancelButtonText: "Cancelar",
			showCloseButton: true
		}).then((result) => {
			if (result.isConfirmed) {
				deleteEvent(id);
				Swal.fire({
					icon: "success",
					title: "Evento eliminado exitosamente.",
					showCloseButton: false,
					showConfirmButton: false
				});
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else if (result.isDenied || result.isDismissed) {
				Swal.fire({
					icon: "info",
					title: "El evento no ha sido eliminado.",
					showCloseButton: true,
					showConfirmButton: false
				});
			}
		});
	};

	const deleteEvent = async (id) => {
		await axios.delete(`${baseURL}/api/eventos`, { params: { id: id } });
	};
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Conozca y registrese para los próximos eventos y actividades de la Iglesia Ciudad de Refugio."
				/>
				<meta name="autor" content="Autor" />
				<meta
					name="keywords"
					content="iglesia ciudad de refugio millersville, actividades de la iglesia ciudad de refudio en millersville, eventos y actividades, eventos, actividades, iglesia, ciudad de refugio"
				/>
			</Head>
			<Layout pageTitle="Conozca los próximos eventos y actividades de la Iglesia Ciudad de Refugio.">
				<PageHeader title="Eventos" />
				<div className="container">
					<section className="">
						<div className="row">
							{eventos.length === 0 ? (
								<p className="mt-3">No hay eventos por el momento.</p>
							) : null}
							{eventos.map((e) => (
								<div key={e._id} className="col-12 rounded border my-3 p-0">
									<div className="evento">
										<div className="evento__image-container">
											<img
												className="evento__image"
												src={e.imageUrl}
												alt={e.nombreDelEvento}
											/>
										</div>
										<div className="evento__content p-3">
											<div className="bg-success rounded text-white p-2 mb-2">
												<p className="mb-0">
													<strong>Costo:</strong>{" "}
													{e.costoDelEvento === "Gratis"
														? `${e.costoDelEvento}`
														: `$${e.costoDelEvento}`}
												</p>
												<p className="mb-0">
													<strong>
														<span className="mr-2">Cantidad disponible:</span>
													</strong>
													<span className="bg-white rounded p-1 text-success">
														{e.cantidadDisponible - e.registrados.length}
													</span>
												</p>
											</div>
											<h2 className="m-0">{e.nombreDelEvento}</h2>
											<div className="evento__info col-12 p-0 mt-2">
												<div className="audio_autor mr-3 mb-0">
													Organizado por el ministerio de {e.organizadoPor} de
													la Iglesia Ciudad de Refugio.
												</div>
												<div
													className="audio_autor mr-3
                        mb-0">
													<strong>Lugar:</strong> {e.lugar}
												</div>
												<div>
													<strong>Dia(s) y hora(s) del evento:</strong>
												</div>
												{e.fechasYHorasDelEvento.map((fh) => (
													<div key={fh._id}>
														<span className="mr-3">
															<strong>Día: </strong>
															{
																<Moment
																	locale="es"
																	date={fh.fecha}
																	format="D MMM YYYY"
																/>
															}
														</span>
														<span>
															<strong>Hora: </strong>
															{fh.hora}
														</span>
													</div>
												))}
											</div>
											<div className="mt-3 mb-0">
												<p className="mb-0">
													<strong>Descripción:</strong>
												</p>
												<p className="mb-0">{e.descripcionDelEvento}</p>
												<div className="d-flex align-items-center justify-content-between">
													{e.registrados.length >= e.cantidadDisponible ? (
														<div className="alert alert-danger mt-3">
															Este evento ha alcanzado su capacidad.
														</div>
													) : (
														<Link href={`/eventos/registrarme/${e._id}`}>
															<a className="thm-btn cta-three__btn mt-0">
																Registrarme
															</a>
														</Link>
													)}
													{user ? (
														<div className="d-flex flex-column border rounded p-2 mt-3">
															<span
																className="text-danger hoverable"
																onClick={() => callToDeleteEvent(e._id)}>
																Eliminar evento
															</span>
															{/* <a
																href={`/eventos/actualizar/${e._id}`}
																className="text-warning hoverable">
																Actualizar evento
															</a> */}
														</div>
													) : null}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
};

export default IndexEventos;

IndexEventos.getInitialProps = async () => {
	const { data } = await axios.get(`${baseURL}/api/eventos`);
	return { eventos: data };
};
