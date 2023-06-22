import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import bgimg from "../../../assets/bgIMG.jpg";
import { FaArrowRight } from "react-icons/fa";
import ChefCard from "./ChefCard/ChefCard";
import "../../../assets/pasa.css";
import TopRecipes from "./TopRecipes";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="Container">
      <Card className="bg-dark Container  text-white">
        <Card.Img src={bgimg} alt="Card image" />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title className="fs-1 fw-bold  align-middle ">
            Get the best and World-Wide <br />{" "}
            <div className="text-center text-warning"> Chef Here..</div>
          </Card.Title>
          <Card.Text className="fw-semibold ">
            If you are a chef, no matter how good a chef you are, it's not good
            cooking for yourself; the joy is in cooking for others - it's the
            same with music. <br />
            <div className="text-center text-white">
              {" "}
              looking for a chef , Browse this Website. have a fun!{" "}
            </div>
          </Card.Text>
          <Card.Text>
            <Button variant="warning" size="lg">
              VISIT MY BLOGS <FaArrowRight />
            </Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      {/* chef section  */}
      <h5 className="mt-5 mb-5 text-center">Chef Section </h5>
      <div className="container kalaPasa ">
        {data.map((singleChef) => (
          <ChefCard key={singleChef.id} singleChef={singleChef}>
            {" "}
          </ChefCard>
        ))}
      </div>

      {/* top recepies  */}
    <TopRecipes> </TopRecipes>
    </div>
  );
};

export default Home;
