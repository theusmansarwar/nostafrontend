import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-title">About NostaPay</h1>

        <p className="about-description">
          <strong>NostaPay</strong> is a globally connected digital wallet designed for the modern era. Whether you're
          an individual user or a business, NostaPay offers fast, secure, and flexible financial solutions
          to help you manage your money anywhere, anytime.
        </p>

        <h2 className="section-title">What is NostaPay?</h2>
        <p className="about-description">
          NostaPay enables users to send, receive, and convert money instantly with over 500+ methods to
          fund or withdraw — including local banks, digital wallets, gift cards, and more. With a strong
          commitment to security and ease of use, we offer freedom from financial limitations.
        </p>

        <h2 className="section-title">Why Choose NostaPay?</h2>
        <ul className="feature-list">
          <li>🔒 100% safe and secure – regulated and monitored for peace of mind</li>
          <li>🌍 Available in 190+ countries</li>
          <li>💱 Hold digital dollars with 1:1 pegged stablecoin support</li>
          <li>⚡ Instant transfers between NostaPay users without commissions</li>
          <li>🏦 Compatible with Payoneer, PayPal, Wise, Upwork, Freelancer & more</li>
        </ul>

        <h2 className="section-title">How It Works</h2>
        <ol className="how-it-works">
          <li><strong>1. Create your account:</strong> Quick registration with official ID verification.</li>
          <li><strong>2. Add funds:</strong> Choose from 500+ methods to load your account.</li>
          <li><strong>3. Send, receive, withdraw:</strong> Move your money as needed, when needed.</li>
        </ol>

        <h2 className="section-title">For Businesses</h2>
        <p className="about-description">
          NostaPay Business Accounts are built to streamline international payouts and payments to global
          teams. Whether you run a freelancing platform, content network, or research firm, NostaPay helps
          you deliver fast and fair payments worldwide.
        </p>

        <h2 className="section-title">Join NostaPay Today</h2>
        <p className="about-description">
          Financial freedom is just a click away. Create your NostaPay account and unlock the full power
          of borderless digital money.
        </p>
      </div>
    </div>
  );
}
