import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const EventMaker: React.FC = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchUserName = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          const userDoc = await getDoc(doc(firestore, 'users', user.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData?.name || 'Anonymous User');
          } else {
            setUserName('Anonymous User');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserName('Anonymous User');
        }
      }
    };

    fetchUserName();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!eventName || !location || !instagramLink || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      await addDoc(collection(firestore, 'events'), {
        event: eventName,
        location: location,
        link: instagramLink,
        details: description,
        createdBy: userName,
      });
      setSuccess('Event created successfully!');
      navigate('/dashboard'); 
      setEventName('');
      setLocation('');
      setInstagramLink('');
      setDescription('');
    } catch (err) {
      setError('Failed to create event. Please try again.');
      console.error('Error adding document: ', err);
    }
  };

  return (
    <section className="m-12">
      <h2 className="text-2xl font-bold text-center mb-6">Create an Event</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <div className="mb-4">
            <label htmlFor="event-name" className="block text-gray-700">
              Event Name:
            </label>
            <input
              type="text"
              id="event-name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">
              Location:
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="instagram-link" className="block text-gray-700">
              Instagram Link:
            </label>
            <input
              type="url"
              id="instagram-link"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Instagram post link"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Create Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventMaker;
