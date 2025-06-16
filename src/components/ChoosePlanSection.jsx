import React from "react";
import { FaCheck } from "react-icons/fa";
import "./ChoosePlanSection.css";
import { title } from "framer-motion/client";
import underlineImage from "../assets/Element12.png"; 

const plans= [
    {
        title:"Free",
        price:"0$",
        features:[
            "Capture ideas and find them quickly",
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect Primary Google Calendar account ",
            "Add due dates, reminders, and notifications to youre tasks",

        ],
        style:"free",
        Animation: "fade-up"
    },
    {
         title: "Personal",
    price: "$11.99",
    features: [
      "Keep home and family on track",
      "Capture ideas and find them quickly",
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    style: "personal",
    animation: "fade-down"
    },
    {
         title: "Organization",
    price: "$49.99",
    features: [
      "Capture ideas and find them quickly",
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    style: "organization",
    animation: "fade-up"
  },
    
];

const ChoosePlanSection = () => {
  return (
    <section className="plan-section">
      <h2 className="plan-heading" data-aos="fade-down">Choose <span className="underline-heading3"> Your Plan
            <img src={underlineImage} alt="Underline" className="heading-underline" />
          </span> </h2>
      <div className="plan-cards">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.style}`}
            data-aos={plan.animation}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">

              {plan.features.map((feature, idx) => (
                <li key={idx}><span className="check-icon"><FaCheck /></span>{feature}</li>
              ))}
            </ul>
            <button className={`get-started-btn ${plan.style}`}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ChoosePlanSection;