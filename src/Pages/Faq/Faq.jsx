import React from "react";
import "./Faq.css";

export default function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-item">
          <h3>What is NostaPay?</h3>
          <p>NostaPay is a global digital wallet that allows you to send, receive, and withdraw money securely and instantly.</p>
        </div>

        <div className="faq-item">
          <h3>Is NostaPay available in my country?</h3>
          <p>NostaPay is available in over 190 countries. You can sign up and verify availability based on your location.</p>
        </div>

        <div className="faq-item">
          <h3>How do I add funds?</h3>
          <p>We offer 500+ methods including local banks, e-wallets, cards, and more to add funds to your NostaPay account.</p>
        </div>

        <div className="faq-item">
          <h3>Is my money safe?</h3>
          <p>Yes. NostaPay uses bank-grade encryption and is compliant with international standards to keep your money safe.</p>
        </div>

        <div className="faq-item">
          <h3>Can I withdraw to local currency?</h3>
          <p>Absolutely. You can convert and withdraw your funds to local currency anytime through our supported channels.</p>
        </div>
      </div>
    </div>
  );
}
