import React from "react";
import { Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Recipe = ({ singleRecipe }) => {
  const { recipeName, ingredients, cookingMethod, rating } = singleRecipe;
  return (
    <div>
      <div className="mt-3">
        <div className=" mx-auto">
          <Card style={{height:'350px'}} className="relative">
            <Card.Body>
              <Card.Title>{recipeName}</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <span className="text-danger fw-bold">Ingredients:</span>{" "}
                  {ingredients}
                </p>

                <p className=" mb-0">
                  {" "}
                  <span className="text-danger fw-bold">
                    Cooking Method:{" "}
                  </span>{" "}
                  {cookingMethod}
                </p>

                <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
