import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefCard = ({singleChef}) => {
    const {likes,chefName,chefPicture,numRecipes,yearsOfExperience,id} = singleChef;
    return (
    
        
        <div className='text-center mx-auto'>
          <Card className='width'>
            <Card.Img variant="top" src={chefPicture} />
            <Card.Body>
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
               <p className='mb-0'>Recipes:{numRecipes}</p>
               <p className='mb-0'>Experiences:{yearsOfExperience}</p>
               <p className='mb-0 ' >Likes:{likes}</p>
              </Card.Text>
              <Link to={`/chefData/${id}`}><Button   variant="warning">View Details  </Button></Link>
            </Card.Body>
          </Card>
        </div>
    
    );
};

export default ChefCard;