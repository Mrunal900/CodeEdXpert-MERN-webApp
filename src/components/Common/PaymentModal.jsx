// PaymentPage.js

import React, { useState } from 'react';

const PaymentModal = (token, courses, user, navigate, dispatch) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Perform validation and integrate with a payment gateway (not shown in this example).
    
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <div>
        <div>
          {
            courses.length > 0 (
              courses.map((course, index)=>(
                <div key={index}>
                  <p>{course.name}</p>
                  <p>{course.price}</p>
                </div>
              ))
            )
          }
        </div>
        <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto">
          <label className="block mb-2">
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              placeholder="1234 5678 9012 3456"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>

          <label className="block mb-2">
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              maxLength="5"
              placeholder="MM/YY"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>

          <label className="block mb-4">
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              placeholder="123"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;