import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginUser() {
	return (
		<div classNameName='h-screen flex flex-col py-5 px-4'>
			<img className="w-auto h-auto mx-auto"
				src="https://static.vecteezy.com/ti/vetor-gratis/t2/6793746-logotipo-circulo-design-abstrato-global-comunicacao-tecnologia-modelo-linear-estilo-artificial-inteligencia-rede-neural-gratis-vetor.jpg"
				alt="life com deus" />
			<h2 className='m-2 text-center text-2xl tracking-tight'>Olá! Faça seu Login.</h2>
		
			<form className='flex flex-col mx-10'>
				<label classNameName="label flex flex-col items-start relative " for="email">
					Email 
					<input className="w-full ml-5 focus:ring-transparent focus:border-primary input-bordered input;" id="email" name="email" type="email" required />
				</label>
				<label classNameName="label flex flex-col items-start relative" for="password">
					Senha 
					<input className="w-full ml-5 focus:ring-transparent focus:border-primary input-bordered input;" id="password" name="password" type="password" required />
				</label>
				<div className="alert alert-error rounded-md">
					<i className="fa-solid fa-circle-exclamation"></i>
					<span>
						<strong>Erro!</strong>
						Usuário não encontrado ou senha incorreta. Para recuperar a senha,
						<NavLink to="/login/recuperar-senha" className="underline">
							clique aqui.
						</NavLink>
					</span>
				</div>
				<div className="alert alert-warning rounded-md">
					<i className="fa-solid fa-circle-exclamation"></i>
					<span>
						<strong>Aguarde!</strong>
						Informações estão sendo carregadas
					</span>
				</div>
				<div className="alert alert-success rounded-md">
					<i className="fa-solid fa-check"></i>
					<span>
						<strong>Autenticado!</strong>
						Usuário validado com sucesso, redirecionando...
					</span>
				</div>
				<button className="mt-6 lg:w-full bg-blue-500 btn-outline btn-primary hover:bg-blue-800 text-base-content btn">
					Entrar
				</button>
				<NavLink to="/register" class="my-1 text-right block underline text-primary" >
					registre-se
				</NavLink>
			</form>
		</div>
	);
}

export default LoginUser;
