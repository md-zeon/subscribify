import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import { toast } from "react-toastify";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
	const [theme, setTheme] = useState("Default");
	const { user, logout } = use(AuthContext);
	// console.log(user);
	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/my-profile'>My Profile</NavLink>
			</li>
		</>
	);

	const handleLogout = () => {
		logout()
			.then(() => {
				// Sign-out successful.
				toast.success("Logout successful");
			})
			.catch((error) => {
				// An error happened.
				toast.error("Logout failed: ", error.message);
			});
	};

	return (
		<div className='navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{" "}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{links}
					</ul>
				</div>
				<Link
					to='/'
					className='font-extrabold italic text-primary text-xl'
				>
					Subscribify
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{links}</ul>
			</div>
			<div className='navbar-end gap-2'>
				{/* Theme Switcher */}
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-sm m-1'
					>
						{theme}
						<FaAngleDown />
					</div>
					<ul
						tabIndex={0}
						className='dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl'
					>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Default'
								onClick={() => setTheme("Default")}
								value='light'
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Synth Wave'
								onClick={() => setTheme("Synthwave")}
								value='synthwave'
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Winter'
								onClick={() => setTheme("Winter")}
								value='winter'
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Luxury'
								onClick={() => setTheme("Luxury")}
								value='luxury'
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Forest'
								onClick={() => setTheme("Forest")}
								value='forest'
							/>
						</li>
					</ul>
				</div>

				{user ? (
					<>
						<div className='dropdown dropdown-end group'>
							<div className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img
										alt='Profile Picture'
										src={user.photoURL}
									/>
								</div>
							</div>
							<div className='card absolute right-5 top-10 bg-base-100 shadow hidden group-hover:flex'>
								<div className='card-body px-5 py-3'>
									<span className='font-bold text-lg'>{user.displayName}</span>
								</div>
							</div>
						</div>
						<button
							onClick={handleLogout}
							className='btn btn-primary'
						>
							Logout
						</button>
					</>
				) : (
					<Link
						to='/login'
						className='btn btn-primary'
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
