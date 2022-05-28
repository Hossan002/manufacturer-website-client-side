import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block" style={{ width: '100vw', height: '50vh' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iZq1slW-2b-TuQJFjeMMRCAnDpN9jOCMyQ&usqp=CAU"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" style={{ width: '100vw', height: '50vh' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlYQkf5w88BfyjPF6VPH9XDNAVVhH3k86QQ&usqp=CAU"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" style={{ width: '100vw', height: '50vh' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjWTp20d3RcZP3WKa3-3_o9mghIDLohRbWg&usqp=CAU"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;