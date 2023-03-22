import { useEffect } from "react";

const BookTable = () => {

    useEffect(()=> {
        document.title = "Gericht | Book Table"
    }, [])
    return (
        <section>
            Tghis is the book table page
        </section>
      );
}
 
export default BookTable;