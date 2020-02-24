import React from "react";
import "./styles.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import Background_image from "./img/pharmacy-back-of-store_pharmacist-secrets.jpg";
export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background_image})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="he">We're Coming Soon!</h1>
            <p style={{ fontWeight: "bolder" }}>
              We'll be here soon with our website
            </p>
            <div class="footer-social-icons">
              <h4 class="_14">Follow us on</h4>
              <ul class="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/PharmedicAD/"
                    class="social-icon"
                  >
                    <i class="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    <i class="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    <i class="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    <i class="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="" class="social-icon">
                    <i class="fab fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
