import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfileGrid = ({ currentProfiles }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-15">
            {currentProfiles.length > 0 ? (
                currentProfiles.map((profile) => (
                    <motion.div
                        key={profile.client_id}
                        className="ring-2 ring-blue-950 p-4 rounded shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={profile.client_profile_url}
                            alt={profile.client_name}
                            className="md:w-full h-96 object-cover roundedw-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded"
                        />
                        <h2 className="flex justify-between items-center px-5 text-lg font-medium mt-4">
                            <span className='text-gray-600'>Name</span>
                            <span className="text-blue-600 font-semibold">{profile.client_name}</span>
                        </h2>

                        <Link
                            to={`/profile/${profile.client_id}`}
                            className="block mt-5 text-blue-800 font-bold text-center"
                        >
                            View Details
                        </Link>
                    </motion.div>
                ))
            ) : (
                <motion.div
                    className="text-center col-span-full text-gray-500 font-bold text-center my-11"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    No profiles found.
                </motion.div>
            )}
        </div>
    );
};

export default ProfileGrid;
