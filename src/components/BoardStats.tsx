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

        const statsMap: { [key: string]: number } = {};

        eventsList.forEach((event) => {
          const creator = event.createdBy;
          if (statsMap[creator]) {
            statsMap[creator] += 1;
          } else {
            statsMap[creator] = 1;
          }
        });

        const sortedStats = Object.keys(statsMap)
          .map((name) => ({ name, eventCount: statsMap[name] }))
          .sort((a, b) => {
            if (b.eventCount === a.eventCount) {
              return a.name.localeCompare(b.name);
            }
            return b.eventCount - a.eventCount;
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

      {memberStats.length > 0 && (
        <div className="flex justify-center space-x-8 mb-8">
          {memberStats[1] && (
            <div className="text-center">
              <div className="bg-green-800 min-w-[200px]  text-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">2nd Place</div>
                <div className="text-3xl font-bold">{memberStats[1].name}</div>
              </div>
            </div>
          )}
          {memberStats[0] && (
            <div className="text-center">
              <div className="bg-green-800 min-w-[200px]  text-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">1st Place</div>
                <div className="text-3xl font-bold">{memberStats[0].name}</div>
              </div>
            </div>
          )}
          {memberStats[2] && (
            <div className="text-center">
              <div className="bg-green-800 min-w-[200px]  text-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">3rd Place</div>
                <div className="text-3xl font-bold">{memberStats[2].name}</div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-6 bg-white border border-green-300 rounded-lg shadow-lg">
        {memberStats.length > 0 ? (
          <>
            <div className="flex justify-between font-bold text-green-800 mb-4">
              <div className="w-1/3 text-left">Rank</div>
              <div className="w-1/3 text-center">Name</div>
              <div className="w-1/3 text-right">Number of Events</div>
            </div>
            <ul className="space-y-4">
              {memberStats.map((member, index) => (
                <li
                  key={member.name}
                  className={`p-4 border border-green-300 rounded-lg shadow-sm flex justify-between items-center ${
                    index < 3 ? "bg-green-600 text-white" : ""
                  }`}
                >
                  <div className="w-1/3 text-left">{index + 1}</div>
                  <div className="w-1/3 text-center">{member.name}</div>
                  <div className="w-1/3 text-right">{member.eventCount}</div>
                </li>
              ))}
            </ul>
          </>
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
