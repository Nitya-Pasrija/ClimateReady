import React, { useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ReportForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !subject || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      await addDoc(collection(firestore, 'issues'), {
        name,
        email,
        subject,
        description,
      });
      setSuccess('Report submitted successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError('Failed to submit report. Please try again.');
    }
  };

  return (
    <section className="m-12">
      <h2 className="text-2xl font-bold text-center mb-6">Report Event</h2>
      <p className="text-center mb-4">See something wrong? Want us to look into? Report now!</p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">
              Subject of the Issue:
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description of the Issue:
            </label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Describe the issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Submit Report
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReportForm;
