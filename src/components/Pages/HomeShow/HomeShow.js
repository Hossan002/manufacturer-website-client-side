import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Rotate } from 'react-reveal';
import Product from '../Product/Product';
import "./HomeShow.css"

const HomeShow = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ravine-57936.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div style={{ marginTop: 40 }}>
      <Rotate bottom cascade> <h2 className="text-center" style={{ color: "Green" }}>Our Electrical Tools Manufacturer</h2></Rotate>
      <Container className="mb-5" >

        <Row>
          {services.map((service) => (
            <Product
              key={service._id} service={service}></Product>
          )).slice(0, 6)}
        </Row>
      </Container>
    </div>
  );
};

export default HomeShow;