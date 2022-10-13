import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PageHeader from "../../../components/PageHeader";
import ActualizarEventoFormulario from "../../../components/Formularios/ActualizarEventoFormulario";
import { useRouter } from "next/router";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

const ActualizarEventoPage = ({ user, data }) => {
	return (
		<>
			<Head>Actualizar Evento</Head>
			<Layout pageTitle={"Actualizar Evento"}>
				<PageHeader title={"Actualizar Evento"} />
				<div className="container">
					<div className="row mx-auto">
						<div className="col col-sm-12 col-md-8">
							<div className="alert-warning p-3 rounded mt-5">
								<strong>Aviso:</strong> Todos los blancos son requeridos.
							</div>
							<ActualizarEventoFormulario user={user} data={data} />
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export async function getServerSideProps({ query, req, res }) {
	let { data } = await axios.get(`${baseURL}/api/evento/`, {
		params: { id: query.id }
	});

	return { props: { data } };
}

export default ActualizarEventoPage;
