import React from "react";
 
function Footer() {
  const styles = {
    
    display:"flex",
    flexWrap:"wrap",
    padding: "20px 20px",
    backgroundColor: "black",
    color: "#3d98d4",
    gap:"10%",
  }
  return (
    <div style={styles}>
      <div>
        <h4>Our Services</h4>
        <ul type="none">
          <li>House Designing</li>
          <li>Interior Designing</li>
          <li>Exterior Designing</li>
        </ul>
      </div>
 
      <div>
        <h4>Locations</h4>
        <ul type="none">
          <li>Hyderabad</li>
          <li>Bangalore</li>
          <li>Visakhapatnam</li>
        </ul>
      </div>
 
      
 
      <div>
        <h4>Collaboration</h4>
        <ul type="none">
          <li>Aparna Constructions</li>
          <li>RK Constructions</li>
          <li>Madhava Constructions</li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul type="none">
          <li>+91 9876543210</li>
          <li>interdesigners@gmail.com</li>
          <li>facebook</li>
        </ul>
      </div>
    </div>
  );
}
 
export default Footer;