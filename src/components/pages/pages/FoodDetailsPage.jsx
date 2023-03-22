import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {ArrowLeft} from "iconsax-react"

const FoodDetailsPage = ({cart, setCart}) => {
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState(null);
  const [error, setError] = useState(null);
  
  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  const handleSave = (detail) => {
    let {idMeal: mealId, strMeal: mealName, strMealThumb: mealImage } = detail

    // handle multiple additions of the same item to cart
    if (cart.some((item) => item.mealId == mealId )  ) {
        alert("This food is already in the saved-foods section")
        // console.log(cart);
    }
    else{
      setCart((prev) => [...prev, {mealId, mealName, mealImage}])
      alert(`You added ${mealName} to the saved foods section`)
      // console.log(cart);
    }
    
   
  }
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
      signal: abortController.signal,
    })
      .then((res) => {
      if (!res.ok) {
        throw Error("Failed to fetch the resources")
      }
      return res.json()
      
      })
      .then((data) => {
        setFoodDetail(data.meals);
        setError(null)
      })
      .catch((err) => {
        // check if the type of error is an abort error
        if (err.name == "AbortError") {
          console.error("Fetch Aborted");
        }else{

          setError(err.message);
        }
      });
    return () => abortController.abort();
  }, [id]);

  useEffect(
    ()=>{
      // update the saved foods each time the cart changes
          localStorage.setItem("cart", JSON.stringify(cart))
    },[cart]
  )
  if (error) {
    return (
      <section className="bg-primary-black py-6 px-5">
        <p className="text-white">{error}</p>
      </section>
    )

  }
  return (
    <section className="bg-primary-black py-6 px-5">
       <div className="flex w-min items-center gap-3">
        <Link to="/pages"><ArrowLeft size="28" color="#ffffff"/></Link>
        <Link to="/pages" className="text-white font-open-sans">Back</Link>
        </div>
      <h1 className="capitalize text-white font-cormorant text-[2.8rem] my-2">
       
        Meal details
      </h1>

      {foodDetail &&
        foodDetail.map((detail) => {
          return (
            <div key={detail.strMeal}>
              <img
                src={detail.strMealThumb}
                className="w-9/12 md:w-full"
                alt=""
              />
              <h2 className="text-white capitalize font-open-sans text-[1.5rem] my-2">
                {detail.strMeal}
              </h2>
              <div className="flex gap-2">
                {detail.strArea !== null ? (
                  <p className="text-primary-grey italic font-open-sans">
                    {detail.strArea}
                  </p>
                ) : (
                  ""
                )}
                {detail.strCategory !== null ? (
                  <p className="text-primary-grey italic font-open-sans">
                    {detail.strCategory}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <article className="mt-5">
                <h3 className="text-white my-2 font-open-sans text-[2rem]">
                  Ingredients
                </h3>
               {
                array.map((number) => {
                  // check if the detail object does not contain a strIngredient(x) key with a value, where x ranges from 1-20 
                  if (!detail[`strIngredient${number}`] || !detail[`strMeasure${number}`]) {
                    //dont return any ui if the above conditions return true
                    return

                  }
                  return (
                    <div key={detail?.[`strIngredient${number}`]} className="flex justify-between py-4 px-3 border-solid border-white border ">
                      <p className="text-white capitalize">{detail?.[`strIngredient${number}`]}</p>
                      <p className="text-white">{detail?.[`strMeasure${number}`]}</p>
                    </div>
                  )
                })
               }
              
                
              </article>
              <article className="mt-7">
                <h3 className="text-white my-2 font-open-sans text-[2rem]">
                  Instructions
                </h3>
                <p className="text-white font-open-sans">
                  {detail.strInstructions}
                </p>
              </article>
              <button onClick={() =>  handleSave(detail)} className="bg-primary-green py-2 px-4 rounded font-cormorant text-black font-semibold my-5">
                Save Food
              </button>
            </div>
          );
        })}
    </section>
  );
};

export default FoodDetailsPage;

{
  /* <div className="flex justify-between py-4 px-3 border-solid border-white border">
<div className="text-white">Beef</div>
<div className="text-white">900g</div>
</div>
<div className="flex justify-between py-4 px-3 border-solid border-white border">
<div className="text-white">Beef</div>
<div className="text-white">900g</div>
</div> */
}



// for (let index = 1; index < 20; index++) {

//   if (data.meals[0][`strIngredient${index}`] !== null || data.meals[0][`strMeasure${index}`] !== null) {
//     let ingredient = data.meals[0]?.[`strIngredient${index}`]
//   console.log(ingredient);
//   let ingredientMeasure = data.meals[0]?.[`strMeasure${index}`]
//   setArray((prev) => {
//     prev.push(
//       {
//         ingredient: ingredientMeasure
//       }
//     )
//   } )
  
//   }
// }