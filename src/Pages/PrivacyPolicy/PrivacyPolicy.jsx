import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p>
          At NostaPay, we are committed to protecting your personal information and your right to privacy. This policy explains what information we collect, how we use it, and what rights you have.
        </p>

        <h2 className="privacy-section">Information We Collect</h2>
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Transaction data related to wallet activity</li>
          <li>Device and usage information</li>
        </ul>

        <h2 className="privacy-section">How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and manage your NostaPay account</li>
          <li>Improve our services and user experience</li>
          <li>Communicate with you regarding updates, security, or service-related matters</li>
        </ul>

        <h2 className="privacy-section">Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data</li>
          <li>Opt out of marketing communications</li>
          <li>Request a copy of the information we hold about you</li>
        </ul>

        <p>For questions or concerns, please contact us at support@nostapay.com.</p>
      </div>
    </div>
  );
}
