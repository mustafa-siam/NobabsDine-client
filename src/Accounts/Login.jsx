import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import signinlottie from '../assets/signin/signin.json'
import Lottie from 'lottie-react';
import { authcontext } from '../Providers/Authprovider';
const Login = () => {
     const {login}=useContext(authcontext)
  const navigate=useNavigate();
  const location=useLocation()
    const handlelogin=(e)=>{
          e.preventDefault();
           const form=e.target;
            const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
          console.log(result.user);
          form.reset();
             Swal.fire({
                         title: "Login Successfully",
                         icon: "success",
                         showConfirmButton:false,
                         timer:1000
                         })
             setTimeout(() =>navigate(location?.state ? location.state : '/'), 2000);
        })
        .catch(error=>{
          console.error(error)
           Swal.fire({
                         title: "Incorrect Username",
                         icon: "error",
                         showConfirmButton:false,
                         timer:1500
                         })
        })}
    return (
         <div className="flex  justify-center items-center flex-col-reverse lg:flex-row-reverse gap-14">
            <div className="w-1/2" >
                <Lottie animationData={signinlottie}></Lottie>
            </div>
             <div  className="h-screen flex items-center w-full lg:w-1/2 flex-col justify-center p-6">
          <h1 className="text-3xl font-bold my-10 text-center ">please Login</h1>
            <div className="w-full shadow-2xl p-6">
      <form onSubmit={handlelogin}>
      <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
        <p className="text-center my-4">Don't have an Account? <Link className="text-blue-600" to={'/register'}>Register</Link></p>
    </div>
        </div>
        </div>
    );
};

export default Login;