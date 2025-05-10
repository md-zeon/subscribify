import { useState, useEffect, use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthContext";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};

	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/my-profile'>My Profile</NavLink>
			</li>
			<li>
				<NavLink to='/my-subscriptions'>My Subscriptions</NavLink>
			</li>
		</>
	);

	const handleLogout = () => {
		logout()
			.then(() => {
				toast.success("Logout successful");
			})
			.catch((error) => {
				toast.error("Logout failed: " + error.message);
			});
	};

	return (
		<div className='navbar bg-base-100 border-b max-w-7xl mx-auto px-4 border-primary/50'>
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
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
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
						{theme.charAt(0).toUpperCase() + theme.slice(1)}
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
								className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Light'
								onChange={() => handleThemeChange("light")}
								value='light'
								checked={theme === "light"}
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Synthwave'
								onChange={() => handleThemeChange("synthwave")}
								value='synthwave'
								checked={theme === "synthwave"}
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Winter'
								onChange={() => handleThemeChange("winter")}
								value='winter'
								checked={theme === "winter"}
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Luxury'
								onChange={() => handleThemeChange("luxury")}
								value='luxury'
								checked={theme === "luxury"}
							/>
						</li>
						<li>
							<input
								type='radio'
								name='theme-dropdown'
								className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
								aria-label='Forest'
								onChange={() => handleThemeChange("forest")}
								value='forest'
								checked={theme === "forest"}
							/>
						</li>
					</ul>
				</div>

				{/* User Profile */}
				{user ? (
					<>
						<div className='dropdown dropdown-end group'>
							<div className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img
										alt='Profile Picture'
										src={user.photoURL || "https://img.icons8.com/fluency-systems-regular/48/user-male-circle--v1.png"}
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
							className='btn btn-primary btn-sm'
						>
							Logout
						</button>
					</>
				) : (
					<Link
						to='/login'
						className='btn btn-primary btn-sm'
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
