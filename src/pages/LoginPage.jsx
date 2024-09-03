import React from 'react';
import LoginUser from '../components/Login/LoginUser'
import LoginMarketing from '../components/Login/LoginMarketing'


function LoginPage() {
	return (
		<div className='h-screen flex flex-row justify-between'>
			<div className='w-2/3'>
				<LoginMarketing />
			</div>
			<div className='w-1/3'>
				<LoginUser />
			</div>
		</div>
	);
}

export default LoginPage;