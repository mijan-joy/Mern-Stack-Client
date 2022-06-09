import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    if(!user){
        return <Loading></Loading>
    }

    return (
        <section className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">User Name: {user.displayName}</h2>
                    <p> User Email: {user.email}</p>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;