import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Title from "../components/Title";

const Login = () => {
	const { signIn, googleSignIn } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [isHidden, setIsHidden] = useState(true);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
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

		signIn(email, password)
			.then((userCredential) => {
				// Signed in
				toast.success("Login successful!");
				const user = userCredential.user;
				form.reset();
				navigate(location?.state || "/");
			})
			.catch((error) => {
				toast.error("Login failed: " + error.message);
			});
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
			<Title>Login</Title>
			<h1 className='text-3xl font-bold ps-6 mt-6'>Login</h1>
			<div className='card-body font-medium'>
				<form
					onSubmit={handleLogin}
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

					<div>
						<Link
							to='/forgot-password'
							state={{ email: email }}
							className='text-primary underline font-medium'
						>
							Forgot password?
						</Link>
					</div>
					<button
						type='submit'
						className='btn btn-primary mt-4'
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
				<div className='divider divider-primary'>Or</div>
				<div className='text-center'>
					{/* Google */}
					<button
						onClick={handleGoogleLogin}
						className='btn btn-neutral text-white w-full'
					>
						<FcGoogle />
						Sign In with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
