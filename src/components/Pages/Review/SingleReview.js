import React from "react";
import Rating from "react-rating";
import { Card, Col } from "react-bootstrap";
import "./Review.css"
import { Fade } from "react-reveal";

const SingleReview = (props) => {
  const { name, rating, comment } = props.review;

  return (
    <div className="single rating">
      <Col>
        <Fade right> <Card>
          <Card.Body style={{ backgroundColor: "blue", borderRadius: "10px", border: "3px solid green" }}>
            <Card.Title style={{ color: 'black', fontSize: '20px' }} className=" text-center fw-bold p-2 rounded">
              {name}
            </Card.Title>
            <Card.Text style={{ color: 'black', fontSize: '15px' }} className="text-dark text-center fw-bold">
              {comment}
            </Card.Text>
            <p className="text-black text-center fw-bold">
              Rating : {rating}/5
            </p>
            <Rating
              className="text-warning"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={rating}
              readonly
            />
          </Card.Body>
        </Card></Fade>
      </Col>
    </div>
  );
};

export default SingleReview;