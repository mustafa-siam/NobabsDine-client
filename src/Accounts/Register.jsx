import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerlottie from '../assets/register/register.json'
import { useContext } from "react";
import Swal from "sweetalert2";
import { authcontext } from "../Providers/Authprovider";

const Register = () => {
    const { creatuser} = useContext(authcontext);
    const navigate=useNavigate()
    const handleregister=(e)=>{
e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const registeruser = { name, photourl, email, password };
        console.log(registeruser)
        creatuser(email,password)
        .then(result=>{
            console.log(result.user)        
             Swal.fire({
          title: "Registration Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
         form.reset();
      setTimeout(() => navigate("/"), 1500);
        })
        .catch(error=>{
            console.error(error)
            Swal.fire({
        title: "Registration Failed",
        text: error.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
        })
    }
    return (
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row-reverse gap-12 p-2">
            <div className="w-1/2">
                <Lottie animationData={registerlottie}></Lottie>
            </div>
            <div className="h-screen flex items-center flex-col justify-center lg:w-1/2 w-full">
                <h1 className="text-3xl font-bold my-10 text-center">please Register</h1>
                <form onSubmit={handleregister} className="w-full shadow-xl p-6">
                    <fieldset className="fieldset">
                        <label className="fieldset-label text-lg">Your Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="username" />
                        
                        <label className="fieldset-label text-lg">Your Photo</label>
                        <input type="url" name="photourl" className="input w-full" placeholder="Photo Url" />
                        
                        <label className="fieldset-label text-lg">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        
                        <label className="fieldset-label text-lg">Password</label>
                        <div>
                            <input type='password' name="password" className="input w-full" placeholder="Password" />
                        </div>
                        
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    
                    <p className="text-center my-4">Already have an Account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;