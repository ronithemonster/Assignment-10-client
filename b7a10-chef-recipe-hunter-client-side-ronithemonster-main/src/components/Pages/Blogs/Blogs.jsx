import React from "react";


const Blogs = () => {
  return (
    <>
   
    <h2 className="text-center my-5">Blog</h2>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <span className="fw-bold">1. Tell us the differences between uncontrolled and controlled components.</span>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"> Controlled components provide a more predictable and controlled way of managing state and user input, while uncontrolled components can be simpler to implement in certain cases. The choice between the two depends on the specific requirements of the application and the preferences of the developer.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <span className="fw-bold">2. How to validate React props using PropTypes?</span>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">PropTypes is a built-in library in React that provides a way to validate the data types of props passed into a component. It helps catch errors early in the development process and makes the code more reliable and easier to maintain. To use PropTypes, you can import the library from the 'prop-types' package and define the expected prop types for a component using the propTypes property. PropTypes provides validators for various data types such as string, number, boolean, object, array, etc., and you can also specify if a prop is required or not using the isRequired validator. By validating React props using PropTypes, you can ensure that your components receive the correct data types and avoid common errors.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <span className="fw-bold">3. Tell us the difference between nodejs and express js.</span>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js that provides additional features and tools for building web applications, such as middleware and routing. While Node.js provides the underlying runtime environment, Express.js provides the structure and functionality for building web applications on top of Node.js.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <span className="fw-bold"> 4. What is a custom hook, and why will you create a custom hook?</span>
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across different components. You can create a custom hook when you need to share logic between multiple components that are not related by the parent-child relationship. By encapsulating the shared logic in a custom hook, you can improve the readability and maintainability of your code, and avoid duplicating code in multiple components. Custom hooks allow you to abstract away complex logic and create reusable pieces of code that can be easily shared and tested.</div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Blogs;
