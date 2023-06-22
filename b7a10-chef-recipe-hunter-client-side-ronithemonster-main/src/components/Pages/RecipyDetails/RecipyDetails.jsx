import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { AiFillLike } from "react-icons/ai";
// import { FaStar,FaRegStar } from "react-icons/fa";
// import Rating from "react-rating";
import Recipe from "./Recipe";

const RecipyDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/chefData/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex text-bg-secondary">
        <div className="mb-0">
          <Card>
            <Card.Img
              style={{ height: "400px", width: "350px" }}
              variant="top"
              src={details.chefPicture}
            />
          </Card>
        </div>
        <div className="container ms-5 px-5 py-2">
          <h3 className="fw-bold text-warning mb-5">{details.chefName}</h3>
          <p>
            <span className="text-warning">Bio:</span> {details.description}
          </p>

          <p>
            <span className="text-warning">Like:</span>
            {details.likes}
          </p>

          <p>
            <span className="text-warning">Number of recipe: </span>{" "}
            {details.numRecipes} items
          </p>
          <p>
            <span className="text-warning">Experiences:</span>
            {details.yearsOfExperience} years
          </p>
        </div>
      </div>

      {/* recipe section ..  */}

      <h5 className="mt-5 fw-bold"> Chef's Recipes: </h5>
     <div className="kalaPasa ">

        {
            details?.recipe?.map(singleRecipe=> <Recipe 
                key={singleRecipe.recipeId}
                singleRecipe = {singleRecipe}
            
            > </Recipe>)
        }
     </div>
    </div>
  );
};

export default RecipyDetails;
