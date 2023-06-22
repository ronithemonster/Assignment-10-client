import React from "react";
import icon from "../../../assets/social.jpg";

const Footer = () => {
  return (
    <div className="bg-black text-white container mt-5  ">
      <div>
        <div>
          <div>
            <h2>Recipe-Hunter</h2>
            <p>
              There are many variation of delicious foods which cooked by
              experiencess chef.
            </p>
          </div>
          <div className="d-flex ps-5 ">
            <div className=" ps-5">
              <h3>Company</h3>
              <ul className="ps-5">
                <li>About us </li>
                <li>latest Foods</li>
                <li>Careers</li>
                <li>Work</li>
              </ul>
            </div>
            <div className="ps-5">
              <h3>Product</h3>
              <ul>
                <li>New Menu</li>
                <li>Comfort and relax</li>
                <li>Customers</li>
                <li>Custom</li>
              </ul>
            </div>
            <div className="ps-5">
              <h3>Support</h3>
              <ul>
                <li>Help People</li>
                <li>Sales</li>
                <li>Become a Partner</li>
                <li>new Item</li>
              </ul>
            </div>
            <div className="ps-5">
              <h3>Contact</h3>
              <p>524 Broadway , NYC</p>
              <p>+1 777 - 978 - 5570</p>
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <p>@2023 SFC tech. All Rights Reserved</p>
          </div>
          <div>
            <p>Powered by Recipe-Hunter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
