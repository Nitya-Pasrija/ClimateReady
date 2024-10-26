import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

interface Event {
  id: string;
  createdBy: string;
}

interface MemberStats {
  name: string;
  eventCount: number;
}

const BoardStats: React.FC = () => {
  const [memberStats, setMemberStats] = useState<MemberStats[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(firestore, "events");
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsList = eventsSnapshot.docs.map((doc) => doc.data() as Event);

        // Aggregate the number of events per member
        const statsMap: { [key: string]: number } = {};

        eventsList.forEach((event) => {
          const creator = event.createdBy;
          if (statsMap[creator]) {
            statsMap[creator] += 1;
          } else {
            statsMap[creator] = 1;
          }
        });

        // Convert the map to an array and sort it by event count and name
        const sortedStats = Object.keys(statsMap)
          .map((name) => ({ name, eventCount: statsMap[name] }))
          .sort((a, b) => {
            if (b.eventCount === a.eventCount) {
              return a.name.localeCompare(b.name); // Alphabetical if counts are equal
            }
            return b.eventCount - a.eventCount; // Sort by event count
          });

        setMemberStats(sortedStats);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto my-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Leaderboard</h1>

      {/* Podium for top 3 */}
      {memberStats.length > 0 && (
        <div className="flex justify-center space-x-8 mb-8">
          {/* Second Place */}
          {memberStats[1] && (
            <div className="text-center">
              <div className="bg-[#C0C0C0] p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold text-gray-700">2nd Place</div>
                <div className="text-3xl font-bold text-gray-800">{memberStats[1].name}</div>
              </div>
            </div>
          )}

          {/* First Place */}
          {memberStats[0] && (
            <div className="text-center">
              <div className="bg-yellow-300 p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold text-gray-700">1st Place</div>
                <div className="text-4xl font-bold text-yellow-600">{memberStats[0].name}</div>
              </div>
            </div>
          )}

          {/* Third Place */}
          {memberStats[2] && (
            <div className="text-center">
              <div className="bg-[#CD7F32] p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold text-gray-700">3rd Place</div>
                <div className="text-3xl font-bold text-gray-800">{memberStats[2].name}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* List of all members */}
      <div className="p-6 bg-white border border-green-300 rounded-lg shadow-lg">
        {memberStats.length > 0 ? (
          <ul className="space-y-4">
            {memberStats.map((member, index) => (
              <li
                key={member.name}
                className={`p-4 border border-green-300 rounded-lg shadow-sm flex justify-between items-center ${
                  index === 0 ? "bg-yellow-100" : index === 1 ? "bg-gray-100" : index === 2 ? "bg-brown-100" : ""
                }`}
              >
                <div className="text-lg font-bold text-green-700">
                  {index + 1}. {member.name}
                </div>
                <div className="text-sm text-gray-600">
                  Events Created: {member.eventCount}
                </div>

                {/* Display current rank */}
                <div className="text-gray-500">Rank: {index + 1}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-600 text-center text-2xl font-semibold">
            No members have created events yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default BoardStats;
