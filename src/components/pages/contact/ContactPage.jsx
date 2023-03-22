import { useEffect } from "react";
const ContactPage = () => {
    useEffect(()=> {
        document.title = "Gericht | Contact Us"
    }, [])

    return ( 
        <section>
            This is the contact page 
        </section>
     );
}
 
export default ContactPage;