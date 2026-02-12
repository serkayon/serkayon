import "../pages/Pricing.css";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
export default function Subscription() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="pricing-wrapper">
        <h1 className="pricing-title">Pricing and Planning</h1>

        <h2 className="text-3xl md:text-5xl mb-20 mt-10 font-mono">
          Bio-PM(Predictive Maintenance)
        </h2>

        <div className="card-container">
          {/* Trial */}

          <div className="pricing-card trial">
            <h3>7 Days Trial</h3>
            <p className="price">$0</p>

            <ul>
              <li>✓ Limited access</li>
              <li>✕ No credit card required</li>
              <li>✕ Secure & encrypted</li>
              <li>✕ Fast performance</li>
              <li>✕ Email support</li>
              <li>✕ Regular updates</li>
              <li>✕ Easy onboarding</li>
            </ul>

            {/* <button className="btn dark">Start Free Trial</button> */}
          </div>
          {/* Yearly */}
   
          <div className="pricing-card yearly premium">
            {/* RIBBON (behind circle) */}
            <div className="yearly-ribbon"></div>

            {/* CIRCLE BADGE */}
            <div className="yearly-badge">
              <span>
                OFFER
                <br />
                16%
              </span>
            </div>

            <h3>Yearly</h3>
            <p className="price">
              $13.99 <span>/month</span>
            </p>

            <ul>
              <li>✓ Best value plan</li>

              <li>✓ Premium support</li>
              <li>✓ Lifetime updates</li>
              <li>✓ Maximum savings</li>
              <li>✓ High security</li>
              <li>✓ Unlimited access</li>
            </ul>
            <div className="contact-box">
              For multiple machines in one dashboard
              <span
                className="contact-glow"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </span>
            </div>

        
          </div>

          {/* Monthly */}
          <div className="pricing-card monthly">
            <h3> Monthly</h3>
            <p className="price">
              $16.99<span> /month</span>
            </p>

            <ul>
              <li>✕ Unlimited access</li>

              <li>✓ Priority support</li>
              <li>✕ Maximum savings</li>
              <li>✓ Faster updates</li>
              <li>✓ Performance boost</li>

              <li>✓ Trusted by users</li>
            </ul>

          </div>
        </div>
        <h2 className="text-3xl md:text-5xl mb-20 mt-10 font-mono">
          Bio-CIG (Column Integrity Guard)
        </h2>

        <div className="card-container">
          {/* Trial */}
          <div className="pricing-card trial">
            <h3>7 Days Trial</h3>
            <p className="price">$0</p>

            <ul>
              <li>✓ Limited access</li>
              <li>✕ No credit card required</li>
              <li>✕ Secure & encrypted</li>
              <li>✕ Fast performance</li>
              <li>✕ Email support</li>
              <li>✕ Regular updates</li>
              <li>✕ Easy onboarding</li>
            </ul>

            {/* <button className="btn dark">Start Free Trial</button> */}
          </div>

          <div className="pricing-card yearly premium">
            {/* RIBBON (behind circle) */}
            <div className="yearly-ribbon"></div>

            {/* CIRCLE BADGE */}
            <div className="yearly-badge">
              <span>
                OFFER
                <br />
                20%
              </span>
            </div>

            <h3>Yearly</h3>
            <p className="price">
              $119.99<span>/month</span>
            </p>

            <ul>
              <li>✓ Best value plan</li>

              <li>✓ Premium support</li>
              <li>✓ Lifetime updates</li>
              <li>✓ Maximum savings</li>
              <li>✓ High security</li>
              <li>✓ Unlimited access</li>
            </ul>
            <div className="contact-box">
              For multiple machines in one dashboard
              <span
                className="contact-glow"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </span>
            </div>
          </div>

          {/* Monthly */}
          <div className="pricing-card monthly">
            <h3>Monthly</h3>
            <p className="price">
              $149.99<span>/month</span>
            </p>

            <ul>
              <li>✕ Unlimited access</li>

              <li>✓ Priority support</li>
              <li>✕ Maximum savings</li>
              <li>✓ Faster updates</li>

              <li>✓ Performance boost</li>
              <li>✓ Trusted by users</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
