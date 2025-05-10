import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Title from "../components/Title";

const Register = () => {
	const { createUser, updateUserProfile, googleSignIn } = use(AuthContext);
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photoURL = form.photoURL.value;
		const password = form.password.value;
		if (password.length < 6) {
			toast.error("Password must be at least 6 characters long.");
			return;
		}
		if (!/[A-Z]/.test(password)) {
			toast.error("Password must contain at least one uppercase letter.");
			return;
		}
		if (!/[a-z]/.test(password)) {
			toast.error("Password must contain at least one lowercase letter.");
			return;
		}

		createUser(email, password)
			.then((result) => {
				updateUserProfile(name, photoURL)
					.then(() => {
						toast.success("Registration successful!");
						form.reset();
						navigate("/");
					})
					.catch((error) => {
						toast.error("Profile update error: " + error.message);
					});
			})
			.catch((error) => {
				toast.error("Registration failed: " + error.message);
			});
		form.reset();
	};

	const handleGoogleLogin = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				toast.success("Login successful!");
				// console.log(user);
				navigate(location?.state || "/");
			})
			.catch((error) => {
				toast.error("Login failed: " + error.message);
			});
	};

	return (
		<div className='card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl p-5 shadow-primary my-12'>
			<Title>Register</Title>
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
						name='photoURL'
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
								className='absolute top-7 z-10 right-4 cursor-pointer text-gray-800'
								size={18}
								onClick={() => setIsHidden(!isHidden)}
							/>
						) : (
							<FaEyeSlash
								className='absolute top-7 z-10 right-4 cursor-pointer text-gray-800'
								size={18}
								onClick={() => setIsHidden(!isHidden)}
							/>
						)}
					</div>
					<button
						type='submit'
						className='btn btn-primary mt-4'
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
				<div className='divider divider-primary'>Or</div>
				<div className='text-center'>
					{/* Google */}
					<button
						onClick={handleGoogleLogin}
						className='btn btn-neutral text-white w-full'
					>
						<FcGoogle />
						Sign up with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
