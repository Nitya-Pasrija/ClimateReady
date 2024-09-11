import React from 'react';

type CardProps = {
  number: number;
  title: string;
};

const Card: React.FC<CardProps> = ({ number, title }) => {
  return (
    <li className="flex flex-col bg-green-50 p-8 sm:p-10 rounded-lg w-full sm:w-[350px] lg:w-[380px] min-h-[380px] shadow-lg border border-green-200">
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-green-600 font-bold text-8xl sm:text-9xl">{String(number).padStart(2, '0')}</p>
        <p className="mt-4 text-xl font-semibold text-green-800 text-center">{title}</p>
      </div>
    </li>
  );
};

export default Card;
