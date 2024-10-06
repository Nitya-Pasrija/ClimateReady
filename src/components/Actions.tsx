import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  name: string;
  location: string;
  details: string;
  instagramLink: string;
  date: string;
}

const Actions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");

  const events: Event[] = [
    
  ];

  const filteredEvents = events
    .filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  return (
    <div className="max-w-[1100px] mx-auto my-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Your Events</h1>

      <div className="flex flex-col p-6 bg-white border border-green-300 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 p-2 border border-green-300 rounded-lg text-lg"
          />

          <div className="flex items-center gap-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "oldest")}
              className="p-2 border border-green-300 rounded-lg text-lg"
            >
              <option value="latest">Show Latest</option>
              <option value="oldest">Show Oldest</option>
            </select>

            <Link to="/create-event">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Create New
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 border border-green-300 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold text-green-700">{event.name}</h2>
                <p className="text-sm text-gray-600">{event.location}</p>
                <p className="text-gray-700">{event.details}</p>
                <a
                  href={event.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View on Instagram
                </a>
              </div>
            ))
          ) : (
            <p className="text-green-600 text-center text-2xl font-semibold">
              Whoops, no events at the moment! Take this chance to lead an initiative :)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
