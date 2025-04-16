import React from "react";
import "./Terms.css";

export default function Terms() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p>Last updated: April 16, 2025</p>

        <h2 className="terms-section">1. Introduction</h2>
        <p>
          Welcome to NostaPay. By using our service, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using our services.
        </p>

        <h2 className="terms-section">2. Account Creation</h2>
        <p>
          To access our services, you must create an account. You agree to provide accurate and up-to-date information during the registration process.
        </p>

        <h2 className="terms-section">3. Use of Services</h2>
        <p>
          You agree to use NostaPay’s services for lawful purposes only and not for any illegal activity or unauthorized transactions.
        </p>

        <h2 className="terms-section">4. Limitation of Liability</h2>
        <p>
          NostaPay is not responsible for any financial losses or damages arising from the use of our platform. We provide our services "as is".
        </p>

        <h2 className="terms-section">5. Privacy Policy</h2>
        <p>
          Our Privacy Policy governs the collection and use of your personal data. Please review it to understand how we process your information.
        </p>

        <h2 className="terms-section">6. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of the jurisdiction in which NostaPay operates. Any disputes will be resolved under these laws.
        </p>
      </div>
    </div>
  );
}
