import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        {/* Contact Information */}
        <div className="box">
          <h3>Contact Us</h3>
          <p>Academy address</p>
          <p>City, State Zip</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@academy.com</p>
        </div>

        {/* Library Hours */}
        <div className="box">
          <h3>Library Hours</h3>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social Media Links */}
        <div className="box">
          <h3>Follow Us</h3>
          <a href="https://picsartacademy.am/">Academy Website</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://example.com">Feedback Form</a>
        </div>
      </div>
    </footer>
  );
}
