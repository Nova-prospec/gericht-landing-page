import { useEffect } from "react";
const BlogPage = () => {
    useEffect(()=> {
        document.title = "Gekricht | Blog"
    }, [])
    return ( 
        <section>
            This is the blog page
        </section>
     );
}
 
export default BlogPage;