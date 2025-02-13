import React from "react";
import Marquee from "react-fast-marquee";

const faqData = [
  {
    id: 1,
    bgColor: "bg-qovayellow",
    color: "vsblack",
    title: "How does Qova help me stay safe on the Internet",
    description: [
      "Instant advice on online threats",
      "Risk assessments to help you avoid dangers",
      "Discreet connections to trained counselors and child protection agencies",
      "Engaging learning materials via text, images, and videos",
    ],
  },
  {
    id: 2,
    bgColor: "bg-qovapink",
    color: "white",
    title: "Who is Qova for?",
    description: [
      "Qova is designed for young people aged 9-19 in Africa who use the internet. It helps them recognize online risks, stay informed, and take action to protect themselves.",
    ],
  },
  {
    id: 3,
    bgColor: "bg-qovaskyblue",
    color: "vsblack",
    title: "How does Qova protect my privacy",
    description: [
      "Your safety and privacy are our top priorities. Qova does not store personal chats and follows strict data protection policies. Any connections to helplines or counselors are confidential and secure.",
    ],
  },
  {
    id: 4,
    bgColor: "bg-qovagreen",
    color: "vsblack",
    title: "How often is Qova updated",
    description: [
      "Qova is updated weekly to stay ahead of new online threats and ensure you always get relevant, up-to-date advice.",
    ],
  },
  {
    id: 5,
    bgColor: "bg-white",
    color: "vsblack",
    title: "How can I contribute to Qova’s mission?",
    description: [
      "You can help by spreading the word, reporting any online risks you encounter, and providing feedback to improve Qova. If you’re an educator, parent, or organization, you can also partner with us to expand Qova’s reach.",
    ],
  },
  {
    id: 6,
    bgColor: "bg-white",
    color: "vsblack",
    title: "What is Qova?",
    description: [
      "Qova is an AI-powered chatbot and metahuman companion designed to help young people stay safe online. It provides real-time guidance on digital risks like cyberbullying, misinformation, online exploitation, and more—through text, images, and video responses.",
    ],
  },
  {
    id: 7,
    bgColor: "bg-qovagreen",
    color: "vsblack",
    title: "Is Qova free to use?",
    description: [
      "Yes! The basic version of Qova is free. We also offer premium features for advanced safety tools and exclusive content.",
    ],
  },
  {
    id: 8,
    bgColor: "bg-qovayellow",
    color: "vsblack",
    title: "Can I talk to a real person through Qova?",
    description: [
      "Yes! If you need additional support, Qova can connect you discreetly to trained counselors, helplines, and local child protection organizations.",
    ],
  },
  {
    id: 9,
    bgColor: "bg-qovapink",
    color: "white",
    title: "How can I access Qova?",
    description: [
      "You can use Qova:",
      "📱 On Mobile – Download the Qova app (Available on iOS & Android)",
      "💻 On Web – Try the chatbot directly from your browser",
    ],
  },
  {
    id: 10,
    bgColor: "bg-qovapurple",
    color: "white",
    title: "Where can I get help if I experience online harm?",
    description: [
      "Qova provides direct access to trusted helplines, support organizations, and legal resources to ensure you get the help you need—whenever you need it.",
    ],
  },
];

const FAQs = () => {
  return (
    <section className="bg-vsblack py-20">
      <h2 className="text-white md:text-5xl text-3xl text-center font-semibold mb-20">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="overflow-x-hidden">
        <Marquee pauseOnHover={true} className="flex gap-6 pl-20">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl shadow-lg ${item.bgColor} mr-6 text-${item.color} flex flex-col gap-3 flex-shrink-0 w-[25rem] h-[18rem]`}
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="text-sm space-y-2">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FAQs;
