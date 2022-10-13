import React, { useEffect } from "react";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import Layout from "../../../components/Layout";
import PageHeader from "../../../components/PageHeader";
import router from "next/router";
import Swal from "sweetalert2";

const RegistrarmeIndex = ({ evento, user }) => {
	useEffect(() => {
		if (user && user.role === "lider") {
		} else {
			router.push("/admin");
		}
	}, [user]);

	const confirmDelete = (id) => {
		Swal.fire({
			icon: "question",
			title: "¿Confirma eliminar registro?",
			showConfirmButton: true,
			confirmButtonText: "Eliminar",
			confirmButtonColor: "rgb(64, 6, 144)",
			cancelButtonText: "Cancelar",
			showCloseButton: true
		}).then((result) => {
			if (result.isConfirmed) {
				deleteRegister(id);
				Swal.fire({
					icon: "success",
					title: "Registro eliminado exitosamente.",
					showCloseButton: false,
					showConfirmButton: false
				});
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else if (result.isDenied || result.isDismissed) {
				Swal.fire({
					icon: "info",
					title: "El registro no ha sido eliminado.",
					showCloseButton: true,
					showConfirmButton: false
				});
			}
		});
	};

	const deleteRegister = async (userId) => {
		console.log(userId);
		const url = `${baseURL}/api/evento/`;
		await axios.put(url, { registroId: userId, eventoId: evento._id });
	};

	return (
		<Layout>
			<PageHeader title="Registro" />
			<div className="container">
				<div className="mt-5">
					<h2>
						Registración para el evento{" "}
						<strong>{evento.nombreDelEvento}</strong>
					</h2>
					<div>
						<strong>Total de registrados: </strong>{" "}
						{evento ? (
							evento.registrados.length
						) : (
							<p>No tiene permisos para ver esta página.</p>
						)}
					</div>
					<section>
						{evento.registrados.map((r) => (
							<div key={r._id} className="card my-3 p-3">
								<div className="d-flex align-items-center">
									<p className="m-0">
										<strong>Nombre: </strong>
										{r.nombre}
									</p>
									<i
										onClick={() => confirmDelete(r._id)}
										className="fas fa-trash ml-auto text-danger"></i>
								</div>
								<p>
									<strong>Telefono: </strong>
									<a href={`tel:${r.telefono}`}>{r.telefono}</a>
								</p>
								<p>
									<strong>Correo: </strong>
									<a href={`tel:${r.correo}`}>{r.correo}</a>
								</p>
								<div>
									<p>
										<strong>Direccion: </strong>
										{`${r.direccionCalle} ${r.direccionCiudad} ${r.direccionEstado} ${r.direccionZipCode}`}
									</p>
								</div>
							</div>
						))}
					</section>
				</div>
			</div>
		</Layout>
	);
};

export default RegistrarmeIndex;

RegistrarmeIndex.getInitialProps = async ({ query: { id } }) => {
	const { data } = await axios.get(`${baseURL}/api/evento`, { params: { id } });
	return { evento: data };
};
