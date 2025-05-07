import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const Register = () => {
	const [isHidden, setIsHidden] = useState(true);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photoURL = form.photoURL.value;
		const password = form.password.value;
		console.log(name, email, photoURL, password);
	};
	return (
		<div className='card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl p-5 shadow-primary'>
			<h1 className='text-3xl font-bold ps-6 mt-6'>Register</h1>
			<div className='card-body font-medium'>
				<form
					onSubmit={handleRegister}
					className='fieldset'
				>
					{/* Name */}
					<label className='label'>Name</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
						required
					/>
					{/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					{/* photoURL */}
					<label className='label'>photoURL</label>
					<input
						type='text'
						name='photoURL '
						className='input'
						placeholder='photoURL '
						required
					/>
					{/* Password */}
					<div className='relative'>
						<label className='label'>Password</label>
						<input
							type={isHidden ? "password" : "text"}
							name='password'
							className='input'
							placeholder='Password'
							required
						/>
						{isHidden ? (
							<FaEye
								className='absolute top-7 right-4 cursor-pointer text-gray-800'
								size={18}
								onClick={() => setIsHidden(!isHidden)}
							/>
						) : (
							<FaEyeSlash
								className='absolute top-7 right-4 cursor-pointer text-gray-800'
								size={18}
								onClick={() => setIsHidden(!isHidden)}
							/>
						)}
					</div>
					<button
						type='submit'
						className='btn btn-neutral mt-4'
					>
						Register
					</button>
					<p className='text-center py-2'>
						Already have an account?{" "}
						<Link
							to='/login'
							className='text-primary underline'
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
