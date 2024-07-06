import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      company: 'Tech Corp',
      review: 'Great company with a positive work environment!',
    },
    {
      name: 'Jane Smith',
      company: 'Innovate LLC',
      review: 'A lot of learning opportunities and supportive management.',
    },
    {
      name: 'Sam Wilson',
      company: 'Design Studio',
      review: 'Creative and inspiring place to work!',
    },
  ]);

  const [form, setForm] = useState({
    name: '',
    company: '',
    review: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ name: '', company: '', review: '' });
  };

  return (
    <div className="container mx-auto p-6 bg-green-700">
      <h1 className="text-5xl font-bold text-center mb-6">Company Reviews</h1>
      
      <div className="space-y-4 mb-6 bg-green-700">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <p className="text-sm text-gray-600">{review.company}</p>
            <p className="mt-2 text-gray-800"><span>{review.review}</span></p>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <h3 className="text-2xl font-bold mb-4">Submit Your Review</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Review</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
