import React, { useEffect, useState } from 'react';
import "./Purchase.css";
import {  useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Rotate } from 'react-reveal';


const Purchase = () => {
  const {id}=useParams();
  const [service,setService]=useState({});
  const navigate = useNavigate();
  const  [user] = useAuthState(auth);

useEffect(() => {
const url=`https://cryptic-ravine-57936.herokuapp.com/service/${id}`;
fetch(url)
.then((res) => res.json())
.then((data) =>setService(data))
},[id,user])

const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email=user?.email;
    fetch("https://cryptic-ravine-57936.herokuapp.com/myOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setService(result);
        // console.log(result);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your order has been successfully submitted!',
          showConfirmButton: false,
          timer: 1500
        })
        reset()
        navigate('/myOrders')
      });
  console.log(data);
  
  };

  return (
    <>
      {!service.name ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container>
          <Row className="align-items-center">
            <Col sm={12} style={{ borderRight: "1px solid #ddd" }} md={6}>
              <img width="80%" src={service.img} alt="" />
            </Col>
            <Col className="my-4" sm={12} md={6}>
            <Rotate bottom>  <h2 className="text-center feature">Please confirm your order</h2></Rotate>
              <div className="mt-5">
                <h4>{service?.description}</h4>
                <h3 className="mt-3">Price: {service?.price} TK</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row className="mt-3">
                    <Col sm={12} md={6}>
                      <label htmlFor="name">
                        <b>Name</b>
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        className="form-control"
                        {...register("name")}
                        defaultValue={user?.displayName}
                      />
                    </Col>
                    <Col sm={12} md={6}>
                      <label htmlFor="email">
                        <b>Email</b>
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        defaultValue={user?.email}
                        className="form-control"
                        {...register("email")}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col sm={12} md={6}>
                      <label htmlFor="quantity">
                        <b>Available Quantity</b>
                      </label>
                      <input
                        id="avQuantity"
                        required
                        type="number"
                        className="form-control"
                        {...register("avQuantity")}
                        defaultValue={service?.avQuantity}
                      />
                    </Col>
                    <Col sm={12} md={6}>
                      <label htmlFor="quantity">
                        <b>Minimum Quantity</b>
                      </label>
                      <input
                        id="minQuantity"
                        required
                        type="number"
                        defaultValue={service?.minQuantity}
                        className="form-control"
                        {...register("minQuantity")}
                      />
                    </Col>
                  </Row>
                  <Row className="my-4">
                    <Col>
                      <label htmlFor="address">
                        <b>Address</b>
                      </label>
                      <input
                        id="address"
                        required
                        type="text"
                        className="form-control"
                        {...register("address")}
                        placeholder="Enter your address"
                      />
                    </Col>
                  </Row>
                  <Row className="my-4">
                    <Col>
                      <label htmlFor="phone">
                        <b>Phone</b>
                      </label>
                      <input
                        id="phone"
                        required
                        type="number"
                        className="form-control"
                        {...register("phone")}
                        placeholder="Enter your phone"
                      />
                    </Col>
                  </Row>
                  <input
                    value="Order Now"
                    style={{width: '100%', backgroundColor:'pink',height: '40px',borderRadius:'5px',fontSize:'20px'}}
                    type="submit"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
    );
};

export default Purchase;