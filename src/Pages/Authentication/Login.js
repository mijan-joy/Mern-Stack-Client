import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] =useSignInWithGoogle(auth);
  const { register, formState: {errors}, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken( user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      toast.success('Login successfully');
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  if( error || gError){
    signInError = <p className='text-red-500'><small>
      { error?.message || gError?.message }</small></p>
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    
  };
    
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-center text-2xl font-bold text-secondary">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
                <label className="label">
                   <span className="label-text">Email</span>
                </label>
                <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered input-secondary w-full max-w-xs"
                {...register("email",{
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email"
                }
                })}
                />
            <label className="label">
              {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                type="password"
                placeholder="Password"
                className="input input-bordered input-secondary w-full max-w-xs"
                {...register("password",{
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                />
            <label className="label">
              {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            </label>
            </div>
            {signInError}
            <input className="btn w-full max-w-xs text-white input-bordered input-secondary"
            type="submit"
            value="Login" />
          </form>
          <p><small>New In Doctors Portal 
            <Link to="/signup" className='text-primary'> Create an Account</Link>
            </small></p>

          <div className="divider text-secondary font-bold">OR</div>
          <button className="btn btn-outline" onClick={() => signInWithGoogle()} >Continue With Google</button>
        </div>
      </div>
    </div>
    );
};

export default Login;