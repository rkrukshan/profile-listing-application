<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {currentProfiles.length > 0 ? (
        currentProfiles.map((profile) => (  // Mapping through the currentProfiles array
            <div key={profile.client_id} className="border p-4 rounded shadow">
                <img
                    src={profile.client_profile_url}  // Profile image
                    alt={profile.client_name}  // Alt text for the profile image
                    className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-bold mt-2">{profile.client_name}</h2>  {/* Profile name */}
                <p className="text-gray-600">{profile.client_city}</p>  {/* Profile city */}
                <Link
                    to={`/profile/${profile.client_id}`}  // Link to the profile details page
                    className="block mt-2 text-blue-500"
                >
                    View Details
                </Link>
            </div>
        ))
    ) : (
        <div className="text-center col-span-full text-gray-500">
            No profiles found.  {/* Message if no profiles are found */}
        </div>
    )}
</div>
