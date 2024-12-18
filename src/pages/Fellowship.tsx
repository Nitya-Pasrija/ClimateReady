import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "../components/Navbar";
import VerticalTimeline from "../components/Timeline";
import Footer from "../components/Footer";

const Fellowship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("eligibility");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="pt-12 pb-24 px-6 max-w-[1200px] mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold text-center text-green-800 mb-12">
          Fellowship Program
        </h1>

        <section className="mb-12">
          <p className="text-lg text-green-700 mb-6">
          Climate READY Fellowship Program seeks to empower a generation of changemakers who lead change in their communities and are capacitated to serve as well- equipped facilitators to impart and advocate for holistic climate education, implement activity- based modules in school eco clubs, and inspire others to engage in environmental stewardship. 
          </p>
          <p className="text-lg text-green-700 mb-6">
          Pilot program would be running from September 21, 2024, to March 21, 2025. This 6-month long, voluntary program involves a time commitment of approximately 8-10 hours per week, where a cohort of 30 fellows will engage in various activities, trainings and projects aimed at empowering the fellows as agents of change in their colleges and communities.
          <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc-Hd9oeVvZB7iBl_GTStbqQ9dG0mo4RZRAyFerUYJjSOeavw/viewform"
              className="font-bold text-green-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply here
            </a>
            .
          </p>
        </section>
        <section className="mb-12">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <div className="flex border-b border-green-300">
              <button
                className={`flex-1 py-2 text-lg font-semibold ${activeTab === "eligibility" ? "bg-green-200 text-green-800" : "text-green-600"}`}
                onClick={() => handleTabClick("eligibility")}
              >
                Eligibility
              </button>
              <button
                className={`flex-1 py-2 text-lg font-semibold ${activeTab === "offer" ? "bg-green-200 text-green-800" : "text-green-600"}`}
                onClick={() => handleTabClick("offer")}
              >
                What We Offer
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "eligibility" && (
                <div>
                  <p className="text-lg text-green-700">
                    To be eligible for our Fellowship Program, applicants must:
                    <ul className="list-disc list-inside mt-2">
                      <li>Be currently enrolled in or have recently completed a degree program.</li>
                      <li>Demonstrate a passion for environmental sustainability and climate action.</li>
                      <li>Show a commitment to contributing to community projects.</li>
                      <li>Have strong communication and organizational skills.</li>
                    </ul>
                  </p>
                </div>
              )}

              {activeTab === "offer" && (
                <div>
                  <p className="text-lg text-green-700">
                    Our Fellowship Program offers:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <span className="font-bold text-green-800">Personal Capacity Building: </span>
                        The fellow will participate in virtual and in-person meetings, training workshops, and consultations aimed at enhancing their personal and professional growth through targeted upskilling opportunities.
                      </li>
                        
                      <li>
                        <span className="font-bold text-green-800">Youth Mobilization & Community Engagement: </span>
                        Fellows will bring together like-minded youth by organizing community events, awareness campaigns, and other pro-environment activities, fostering a strong connection between their academic environment and community impact.
                      </li>
                        
                      <li>
                        <span className="font-bold text-green-800">Student Empowerment in Schools: </span>
                        Activation of eco clubs in nearby government schools, overseeing program implementation, organizing at least 12 weekly sessions, and ensuring active student participation in environmental initiatives.
                      </li>
                    </ul>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        <VerticalTimeline />
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-4">FAQs</h2>
          <div className="space-y-4">
            {[
              { question: "What is the duration of the fellowship?", answer: "The fellowship lasts for 6 months, starting from 20th September." },
              { question: "How many fellows will be selected?", answer: "We generally select 15 fellows each year." },
              { question: "Can international students apply?", answer: "Unfortunately, this is an in-person initiative, so participants need to be based in India. However, we encourage you to stay connected with us through our social media channels :)" },
              { question: "Is the fellowship remote or in-person?", answer: "The fellowship may have both remote and in-person components depending on the project." },
              { question: "How can I contact the program coordinators?", answer: "You can contact us via email at projectclimateready@gmail.com for any queries related to the fellowship." }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-green-100 p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-green-800">{faq.question}</p>
                  {activeFAQ === index ? (
                    <FiChevronUp className="text-green-600" />
                  ) : (
                    <FiChevronDown className="text-green-600" />
                  )}
                </div>
                {activeFAQ === index && (
                  <p className="mt-2 text-green-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Fellowship;
