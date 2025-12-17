import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
// This theme object should ideally be dynamic or from a global config.
// For demonstration, it's hardcoded here to reflect the theme provided in the JSON.
const theme = {
  font: "font-sans",
  radius: "rounded-xl",
  shadow: "shadow-lg",
  palette: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-purple-600 text-white",
    accent: "bg-teal-500 text-white",
    neutral: "bg-gray-100 text-gray-800",
    text_primary: "text-gray-900",
    text_secondary: "text-gray-600"
  },
  gradient_from: "from-blue-500",
  gradient_to: "to-purple-600",
  section_y: "py-16 lg:py-24"
};
// This sectionsData array should ideally be passed as props or fetched from an API.
// For demonstration, it's hardcoded here to match the 'sections' array in the JSON output.
const sectionsData = [
  {
    "type": "hero",
    "headline": "Unlock Your Potential with Our Innovative Solution",
    "sub": "Streamline your workflows, boost productivity, and achieve your goals faster than ever before.",
    "cta_text": "Get Started Now",
    "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0cfaee1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
  },
  {
    "type": "features",
    "items": [
      { "title": "Intuitive Interface", "desc": "Our platform is designed for ease of use, making complex tasks simple and accessible to everyone." },
      { "title": "Powerful Analytics", "desc": "Gain deep insights into your data with our advanced analytics tools, helping you make informed decisions." },
      { "title": "Seamless Integration", "desc": "Connect effortlessly with your existing tools and services for a unified workflow experience." }
    ]
  },
  {
    "type": "pricing",
    "plans": [
      { "name": "Basic", "price": "$19/month", "features": ["1 User", "Basic Features", "Email Support"], "cta": "Choose Basic" },
      { "name": "Pro", "price": "$49/month", "features": ["5 Users", "Advanced Features", "Priority Support"], "cta": "Choose Pro" },
      { "name": "Enterprise", "price": "Custom", "features": ["Unlimited Users", "All Features", "Dedicated Support", "SLA"], "cta": "Contact Sales" }
    ]
  },
  {
    "type": "faq",
    "items": [
      { "q": "What is your return policy?", "a": "Our return policy allows for returns within 30 days of purchase, provided the item is in its original condition." },
      { "q": "How do I contact customer support?", "a": "You can reach our customer support team via email at support@example.com or by phone at 1-800-555-0123." },
      { "q": "Do you offer international shipping?", "a": "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary." }
    ]
  }
];
function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  return (
  <>
    <NuvraBadge />
    <div className={`min-h-screen flex flex-col ${theme.font}`}>
      <Navbar />
      <main className="flex-grow">
        {sectionsData.map((section, index) => {
          const sectionId = section.type + "-" + index;
          if (section.type === "hero") {
            return (
              <section key={sectionId} className={`${theme.section_y} ${theme.gradient_from} ${theme.gradient_to} text-white relative overflow-hidden`}>
                <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up">{section.headline}</h1>
                  {section.sub && <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in-up delay-100">{section.sub}</p>}
                  {section.cta_text && (
                    <button className={`inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium ${theme.radius} ${theme.palette.accent} hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200`}>
                      {section.cta_text}
                    </button>
                  )}
                </div>
                {section.image_url && (
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img
                      src={section.image_url}
                      alt="Hero background"
                      className="w-full h-full object-cover"
                      width="1920"
                      height="1080"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </section>
            );
          } else if (section.type === "features") {
            return (
              <section id="features" key={sectionId} className={`${theme.section_y} ${theme.palette.neutral}`}>
                <div className="container mx-auto px-4">
                  <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-12 ${theme.palette.text_primary}`}>Key Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`p-8 ${theme.radius} bg-white ${theme.shadow} flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:${theme.shadow}`}>
                        <h3 className={`text-xl font-semibold mb-3 ${theme.palette.text_primary}`}>{item.title}</h3>
                        <p className={`${theme.palette.text_secondary}`}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          } else if (section.type === "pricing") {
            return (
              <section id="pricing" key={sectionId} className={`${theme.section_y} bg-white`}>
                <div className="container mx-auto px-4">
                  <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-12 ${theme.palette.text_primary}`}>Simple & Transparent Pricing</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.plans.map((plan, planIndex) => (
                      <div key={planIndex} className={`p-8 ${theme.radius} ${theme.shadow} bg-white border border-gray-200 flex flex-col text-center`}>
                        <h3 className={`text-2xl font-bold mb-4 ${theme.palette.text_primary}`}>{plan.name}</h3>
                        <p className={`text-4xl font-extrabold mb-6 ${theme.palette.primary}`}>{plan.price}</p>
                        <ul className="text-gray-600 mb-8 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="mb-2 flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {plan.cta && (
                          <button className={`mt-auto px-6 py-3 border border-transparent text-base font-medium ${theme.radius} ${planIndex === 1 ? theme.palette.primary : `bg-gray-200 text-gray-800`} ${planIndex === 1 ? "hover:bg-blue-700" : "hover:bg-gray-300"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}>
                            {plan.cta}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          } else if (section.type === "faq") {
            return (
              <section id="faq" key={sectionId} className={`${theme.section_y} ${theme.palette.neutral}`}>
                <div className="container mx-auto px-4 max-w-3xl">
                  <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-12 ${theme.palette.text_primary}`}>Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`bg-white ${theme.radius} ${theme.shadow}`}>
                        <button
                          className="flex justify-between items-center w-full p-6 text-lg font-medium text-left"
                          onClick={() => setOpenFaqIndex(openFaqIndex === itemIndex ? null : itemIndex)}
                          aria-expanded={openFaqIndex === itemIndex}
                          aria-controls={`faq-answer-${itemIndex}`}
                        >
                          <span className={`${theme.palette.text_primary}`}>{item.q}</span>
                          <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${openFaqIndex === itemIndex ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        {openFaqIndex === itemIndex && (
                          <div id={`faq-answer-${itemIndex}`} role="region" className="px-6 pb-6 text-gray-700">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          return null;
        })}
      </main>
      <Footer />
    </div>
  
  </>
);
}
export default App;