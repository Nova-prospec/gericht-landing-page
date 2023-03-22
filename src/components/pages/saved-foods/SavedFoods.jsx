import { useEffect, useState } from "react";

const SavedFoods = ({cart, setCart}) => {
    
    // const cart = JSON.parse(localStorage.getItem("cart"))
    const handleDelete = (food) => {
        setCart(cart.filter(
            (item) => {
                return item.mealId !== food.mealId
            }
        ))
        alert(`You removed ${food.mealName} from the saved foods section`)
    }

    useEffect(()=> {
        document.title = "Gericht | Saved Foods"
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    if (cart.length == 0) {
        return (
            <section className="bg-primary-black py-6 px-5">
                <h1 className="text-white font-cormorant text-[2rem]">Saved Items</h1>
                <p className="text-primary-grey font-open-sans italic">You have no saved items.</p>
            </section>
        )
    }

     return ( 
        <section className="bg-primary-black py-6 px-5">
            <h1 className="text-white font-cormorant text-[2rem]">Saved Foods</h1>

            <div className="grid grid-cols-4 md:grid-cols-2 py-6 gap-3">
            {
                cart.map((food) => {
                    return (
                        <div>
                            <img src={food.mealImage} className="rounded" alt={`${food.mealName} - ${food.mealId}`} />
                            <p className="text-white font-open-sans my-2">{food.mealName}</p>
                            <button onClick={() => handleDelete(food)} className="bg-primary-green px-3 py-3 my-2 rounded font-cormorant font-semibold">Remove Food</button>
                        </div>
                    )
                })
            }
            </div>
        </section>
     );
}
 
export default SavedFoods;