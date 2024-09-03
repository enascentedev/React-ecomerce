import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginUser() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(''); // Limpo qualquer erro anterior

		try {
			const response = await axios.post('http://localhost:5000/login', { email, password });

			if (response.data.token) {
				// Simulo o armazenamento do token (normalmente eu usaria localStorage)
				alert('Login bem-sucedido! Redirecionando...');
				navigate('/home');
			} else {
				setError('Usuário não encontrado ou senha incorreta.');
			}
		} catch (err) {
			if (err.response) {
				// Se o servidor respondeu com um status fora do 2xx
				if (err.response.status === 400) {
					setError('Usuário não encontrado ou senha incorreta.');
				} else if (err.response.status === 500) {
					setError('Erro interno do servidor. Por favor, tente novamente mais tarde.');
				} else {
					setError(`Erro: ${err.response.status}. ${err.response.data.message}`);
				}
			} else if (err.request) {
				// Se a requisição foi feita, mas nenhuma resposta foi recebida
				setError('Erro de conexão. Verifique sua conexão com a internet e tente novamente.');
			} else {
				// Se ocorreu alguma outra situação na configuração da requisição
				setError('Ocorreu um erro ao processar sua solicitação. Tente novamente.');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="h-screen flex flex-col py-5 px-4">
			<img className="w-auto h-auto mx-auto"
				src="https://static.vecteezy.com/ti/vetor-gratis/t2/6793746-logotipo-circulo-design-abstrato-global-comunicacao-tecnologia-modelo-linear-estilo-artificial-inteligencia-rede-neural-gratis-vetor.jpg"
				alt="life com deus" />
			<h2 className="m-2 text-center text-2xl tracking-tight">Olá! Faça seu Login.</h2>

			<form className="flex flex-col mx-10" onSubmit={handleSubmit}>
				<label className="label flex flex-col items-start relative" htmlFor="email">
					Email
					<input
						className="w-full ml-5 focus:ring-transparent focus:border-primary input-bordered input"
						id="email"
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label className="label flex flex-col items-start relative" htmlFor="password">
					Senha
					<input
						className="w-full ml-5 focus:ring-transparent focus:border-primary input-bordered input"
						id="password"
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				{error && (
					<div className="alert alert-error rounded-md">
						<i className="fa-solid fa-circle-exclamation"></i>
						<span>
							<strong>Erro!</strong> {error}
						</span>
					</div>
				)}
				{loading && (
					<div className="alert alert-warning rounded-md">
						<i className="fa-solid fa-circle-exclamation"></i>
						<span>
							<strong>Aguarde!</strong> Informações estão sendo carregadas
						</span>
					</div>
				)}
				<button className="mt-6 lg:w-full bg-blue-500 btn-outline btn-primary hover:bg-blue-800 text-base-content btn">
					Entrar
				</button>
				<NavLink to="/register" className="my-1 text-right block underline text-primary">
					registre-se
				</NavLink>
			</form>
		</div>
	);
}

export default LoginUser;
