import { useEffect } from "react";
const LandingPage = () => {
    useEffect(()=> {
        document.title = "Gericht | Landing Page"
    }, [])
    
    return ( 
        <section>
            This is the landing page
        </section>
     );
}
 
export default LandingPage;