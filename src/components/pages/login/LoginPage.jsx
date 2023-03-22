import { useEffect } from "react";

const LoginPage = () => {
    useEffect(()=> {
        document.title = "Gericht | Login"
    }, [])
    return ( 
        <section>
            Thsi si the login page
        </section>
     );
}
 
export default LoginPage;