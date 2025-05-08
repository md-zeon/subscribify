import React from "react";
import { Link } from "react-router";

const ForgotPassword = () => {
	return (
		<div className='card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl p-5 shadow-primary'>
			<h1 className='text-3xl font-bold ps-6 mt-6'>Reset Your Password</h1>
			<div className='card-body font-medium'>
				<form
					className='fieldset'
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					<div>
						<Link className='text-primary underline font-medium'>Forgot password?</Link>
					</div>
					<button
						type='submit'
						className='btn btn-neutral mt-4'
					>
						Login
					</button>
					<p className='text-center py-2'>
						Don't have an account?{" "}
						<Link
							to='/register'
							className='text-primary underline'
						>
							Create an account
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
