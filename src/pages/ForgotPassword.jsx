import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthContext";
import Title from "../components/Title";

const ForgotPassword = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState(location?.state?.email || "");
	const { resetPassword } = use(AuthContext);

	const handleReset = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		resetPassword(email)
			.then(() => {
				toast.success("Password reset link sent to " + email + "!");
				setTimeout(() => {
					console.log("Redirecting to Gmail...");
					window.open("https://mail.google.com", "_blank");
					navigate("/login");
				}, 2000);
			})
			.catch((error) => {
				toast.error("Error sending password reset link: " + error.message);
			});
	};

	return (
		<div className='card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl p-5 shadow-primary my-12'>
			<Title>Reset Password</Title>
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
