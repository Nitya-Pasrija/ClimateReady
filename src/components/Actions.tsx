import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

interface Event {
  id: string;
  createdBy: string;
  details: string;
  event: string;
  link: string;
  location: string;
}

const Actions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(firestore, "events");
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsList = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];

        setEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => 
    event.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1100px] mx-auto my-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Events</h1>

      <div className="flex flex-col p-6 bg-white border border-green-300 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 p-2 border border-green-300 rounded-lg text-lg"
          />
          
          <div className="flex items-center gap-4 ml-4">
            <Link to="/report-event">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Report an Event
              </button>
            </Link>
            <Link to="/create-event">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Create New Event
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
                <h2 className="text-xl font-bold text-green-700">{event.event}</h2>
                <p className="text-sm text-gray-600">Location: {event.location}</p>
                <p className="text-sm text-gray-600">Created By: {event.createdBy}</p>
                <p className="text-gray-700">{event.details}</p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View Event
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
