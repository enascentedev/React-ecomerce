import React, { useState } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { useDispatch } from 'react-redux'; 
import { loginSuccess } from '../../store/authSlice'; 

function LoginUser() {
  
	const [email, setEmail] = useState(''); 
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate(); 
	const dispatch = useDispatch(); 

	// Quando o formulário é enviado, essa função é chamada.
	const handleSubmit = async (e) => {
		e.preventDefault(); 
		setLoading(true); 
		setError('');

		try {
      // Faço uma requisição GET ao servidor para verificar as credenciais do usuário.
			const response = await axios.get('http://localhost:5000/users', {
				params: {
					email: email, // Eu envio o email digitado
					password: password // Eu envio a senha digitada
				}
			});

			// Se o usuário for encontrado no banco de dados, disparo a ação de login no Redux e redireciono para a página Home.
			if (response.data.length > 0) {
				const user = response.data[0]; // Eu pego os dados do primeiro usuário encontrado.
				dispatch(loginSuccess({ token: user.token })); // Eu envio o token fictício ao Redux.
				navigate('/home'); // Eu redireciono o usuário para a página home.
			} else {
				setError('Usuário não encontrado ou senha incorreta.'); // Se o usuário não for encontrado, mostro a mensagem de erro.
			}
		} catch (err) {
			setError('Erro ao conectar com o servidor.'); // Em caso de erro na conexão, mostro uma mensagem de erro.
		} finally {
			setLoading(false); // Após a tentativa de login, eu desligo o estado de carregamento.
		}
	};

	
	return (
		<div className="h-screen flex flex-col py-5 px-4">
			<img className="w-auto h-auto mx-auto"
				src="https://static.vecteezy.com/ti/vetor-gratis/t2/6793746-logotipo-circulo-design-abstrato-global-comunicacao-tecnologia-modelo-linear-estilo-artificial-inteligencia-rede-neural-gratis-vetor.jpg"
				alt="logo" /> 
			<h2 className="m-2 text-center text-2xl tracking-tight">Olá! Faça seu Login.</h2> 

			<form className="flex flex-col mx-10" onSubmit={handleSubmit}> 
				<label className="label flex flex-col items-start relative" htmlFor="email">
					Email
					<input
						className="w-full focus:ring-transparent focus:border-primary input-bordered input"
						id="email"
						name="email"
						type="email"
						value={email} // O valor do input reflete o estado de email
						onChange={(e) => setEmail(e.target.value)} // Quando o usuário digita, o estado de email é atualizado
						required
					/>
				</label>
				<label className="label flex flex-col items-start relative" htmlFor="password">
					Senha
					<input
						className="w-full focus:ring-transparent focus:border-primary input-bordered input"
						id="password"
						name="password"
						type="password"
						value={password} // O valor do input reflete o estado de password
						onChange={(e) => setPassword(e.target.value)} // Quando o usuário digita, o estado de password é atualizado
						required
					/>
				</label>
				{error && ( // Se houver algum erro, eu mostro a mensagem de erro aqui.
					<div className="alert alert-error rounded-md">
						<i className="fa-solid fa-circle-exclamation"></i>
						<span>
							<strong>Erro!</strong> {error}
						</span>
					</div>
				)}
				{loading && ( // Se o estado de loading for verdadeiro, mostro uma mensagem de "Aguarde".
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
					registre-se {/* Link para a página de registro */}
				</NavLink>
			</form>
		</div>
	);
}

export default LoginUser;
