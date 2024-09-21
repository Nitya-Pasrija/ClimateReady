import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "../components/Navbar";
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
                      <li>A monthly stipend to cover living expenses.</li>
                      <li>Opportunities to work on impactful environmental projects.</li>
                      <li>Access to exclusive networking events and workshops.</li>
                      <li>Mentorship from industry experts and thought leaders.</li>
                      <li>A certificate upon successful completion of the fellowship.</li>
                    </ul>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Timeline</h2>
          <div className="flex items-center">
            <div className="relative flex items-center w-full">
              <div className="absolute w-full border-t-2 border-green-300 top-1/2 transform -translate-y-1/2" />
              <div className="flex justify-between w-full">
                {[
                  { label: "Applications Open", date: "1st August" },
                  { label: "Applications Close", date: "15th August" },
                  { label: "Results Announced", date: "19th August" },
                  { label: "Fellowship Commences", date: "20th August" }
                ].map((event, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="mt-2 text-center text-green-700">
                      <p className="font-semibold">{event.label}</p>
                      <p>{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-4">FAQs</h2>
          <div className="space-y-4">
            {[
              { question: "What is the duration of the fellowship?", answer: "The fellowship lasts for 6 months, starting from 20th August." },
              { question: "How many fellows will be selected?", answer: "We typically select 10-15 fellows each year." },
              { question: "Can international students apply?", answer: "Yes, international students are welcome to apply, provided they meet the eligibility criteria." },
              { question: "Is the fellowship remote or in-person?", answer: "The fellowship may have both remote and in-person components depending on the project." },
              { question: "How can I contact the program coordinators?", answer: "You can contact us via email at contact@climateready.org for any queries related to the fellowship." }
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
