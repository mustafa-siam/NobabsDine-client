import { useContext } from "react"
import { authcontext } from "../Providers/Authprovider"

const useAuth=()=>{
    const context=useContext(authcontext)
    return context;
}
export default useAuth;