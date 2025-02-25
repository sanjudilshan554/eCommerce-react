import React from "react";

const FAQsPage = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Please refer to our return policy page for more details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use that number to track your package.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping rates and times may vary based on your location.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Once an order is placed, it cannot be modified. However, you can cancel the order within a limited time period and place a new one.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via the contact page or email us directly at support@example.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
        
      <div className="flex justify-center">
        <img src="/src/assets/images/faq.jpeg"></img>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions? We have answers. Check out the most common questions
          below.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
