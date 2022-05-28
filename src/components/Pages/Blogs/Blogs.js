import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Rotate } from 'react-reveal';
import "./Blogs.css"

const Blogs = () => {
  return (
    <section style={{ width: '80%', height: "500px", background: "gray", margin: '30px auto' }}>
      <Rotate left style={{ height: "800px" }}>
        <Accordion defaultActiveKey="0" style={{ height: "800px" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How will you improve the performance of a React Application? </Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              When it's necessary, keep component state local. To avoid unwanted re-renders, memorize React components. React code splitting with dynamic import (). In React, this is known as windowing or list virtualization. In React, lazy image loading is possible.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              React employs an observable object as the state, which monitors changes to the state and assists the component in responding appropriately. For example, if we alter the state of any component, the webpage will not re-render since React State will not be able to detect the changes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We traditionally use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts? </Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              When it's necessary, keep component state local. To avoid unwanted re-renders, memorize React components. React code splitting with dynamic import (). In React, this is known as windowing or list virtualization. In React, lazy image loading is possible.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header  >You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              Performing proper destructuring
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What is a unit test? Why should write unit tests?</Accordion.Header>
            <Accordion.Body style={{ height: "100px", fontSize: "20px" }}>
              Unit tests are automated tests created and run by software engineers to ensure that a piece of software (referred to as a "unit") follows its design and functions as intended. In procedural programming, a unit can be a single function or process, although it's more likely to be an entire module.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion></Rotate>
    </section>
  );
};

export default Blogs;