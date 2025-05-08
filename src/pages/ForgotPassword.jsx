import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";

const ForgotPassword = () => {
	const location = useLocation();
	const [email, setEmail] = useState(location?.state?.email || "");
	console.log(location);

	const handleReset = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		console.log(email);
		toast.success("Password reset link sent to " + email + "!" );
		setTimeout(() => {
			console.log("Redirecting to Gmail...");
			window.open("https://mail.google.com", "_blank");
		}, 2000);
	};

	return (
		<div className='card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl p-5 shadow-primary'>
			<h1 className='text-3xl font-bold ps-6 mt-6'>Reset Your Password</h1>
			<div className='card-body font-medium'>
				<form
					onSubmit={handleReset}
					className='fieldset'
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='input'
						placeholder='Email'
						required
					/>
					<button
						type='submit'
						className='btn btn-neutral mt-4'
					>
						Reset Password
					</button>
					<p className='text-center py-2'>
						Go Back to{" "}
						<Link
							to='/login'
							className='text-primary underline'
						>
							Login
						</Link>
					</p>
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
