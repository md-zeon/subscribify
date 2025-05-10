import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthContext";
import Title from "../components/Title";

const MyProfile = () => {
	const { user, updateUserProfile, setLoading } = use(AuthContext);
	const [name, setName] = useState(user?.displayName || "");
	const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

	const handleUpdateProfile = (e) => {
		e.preventDefault();
		updateUserProfile(name, photoURL)
			.then(() => {
				toast.success("Profile updated successfully!");
				setLoading(false);
			})
			.catch((error) => {
				toast.error("Failed to update profile: " + error.message);
			});
	};

	return (
		<div className='card bg-base-100 shadow-xl shadow-primary p-6 max-w-md mx-auto my-12'>
			<Title>My Profile</Title>

			<div className='card-body'>
				<div className='flex justify-center mb-4'>
					<img
						src={user?.photoURL}
						alt='User avatar'
						className='w-24 rounded-full inline'
					/>
				</div>
				<h2 className='card-title text-2xl justify-center mb-5'>My Profile</h2>
				<div className='space-y-4'>
					<p>
						<strong>Name:</strong> {name}
					</p>
					<p>
						<strong>Email:</strong> {user?.email}
					</p>
					<p className='break-words'>
						<strong>Photo URL:</strong> {photoURL.slice(0, 45)}
						{photoURL.length > 45 ? "..." : ""}
					</p>
				</div>
				<form
					onSubmit={handleUpdateProfile}
					className='space-y-4 mt-6'
				>
					<div className='form-control'>
						<label className='label'>Name</label>
						<input
							type='text'
							className='input input-bordered'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>Photo URL</label>
						<input
							type='text'
							className='input input-bordered'
							value={photoURL}
							onChange={(e) => setPhotoURL(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='btn btn-primary'
					>
						Update Profile
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyProfile;
