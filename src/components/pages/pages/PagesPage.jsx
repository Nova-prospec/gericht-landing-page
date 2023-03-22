import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PagesPage = () => {
    const [categories, setCategories] = useState(null)
    const [foodItems, setFoodItems] = useState(null)
    const [error, setError] = useState(null)
    const [activeButton, setActiveButton] = useState(null)

    
    const handleClick = (e) => {
        let category = e.target.innerHTML;
        fetchData(category)
        setActiveButton(category)
    }
    const fetchData = (text) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${text}`)
        .then(res => res.json())
        .then(data => {
            setFoodItems(data.meals)
        })
    } 
    useEffect(()=> {
        const abortController = new AbortController()
        document.title = "Gericht | Pages"
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {signal: abortController.signal})
        .then(res => {
            if (!res.ok) {
                return
            }else{
                return res.json()
            }
            
         
        
        })
        .then(data => {
            setCategories(data.categories)
        })
        .catch(err => {
            if (err.name == "AbortError") {
                
                console.error(err)
            }
            else{
                setError("Failed to fetch the requested resources")
            }
        })

        return () => abortController.abort()
    
    }, [])

    
    return ( 
        <section className="bg-primary-black py-16 px-5">
            <h1 className="text-3xl font-cormorant capitalize my-3 text-white">Search Meals Or select categories from below</h1>
           {
            error !== null ? <p className="text-white font-open-sans">{error}</p> : ""
           }
           <div className="block">
            {
                categories && categories.map((category) => {
                    return (
                        <button key={category.strCategory} onClick={handleClick} className={`px-4 py-2 rounded mx-1 my-1 text-white font-open-sans text-sm ${activeButton && activeButton == category.strCategory ? "bg-orange-500" : "bg-orange-400" }`}>{category.strCategory}</button>
                    ) 
                })
            }
            </div>
            <div className="grid grid-cols-4 gap-2 lg:grid-cols-2 md:grid-cols-3">
                {
                    foodItems && foodItems.map((item) => {
                        return (
                        
                            <div className="my-6" key={item.strMeal}>
                                <Link to={`/pages/${Number(item.idMeal)}`}><img src={item.strMealThumb} loading="lazy" className="rounded" alt={item.strMeal} /></Link>
                                <div>
                                    <p className="text-white font-open-sans text-lg my-3 sm:text-center capitalize">{item.strMeal}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default PagesPage;