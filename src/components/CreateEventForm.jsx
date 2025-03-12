import React, { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "Religious",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Event submitted!");

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      category: "Religious",
    });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <section id="create-event-form" className="mt-12">
      {successMessage && (
        <div className="flex justify-center mb-4">
          <p className="text-green-600 text-lg font-semibold bg-green-100 px-4 py-2 rounded-md">
            {successMessage}
          </p>
        </div>
      )}
      <BlurFade delay={0.75} inView>
        <form
          className="bg-white p-6 rounded-lg shadow-2xl max-w-lg mx-auto space-y-4 border-2 border-[#0056D2] focus-within:ring-2 focus-within:ring-[#0056D2]/50"
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark transition"
          >
            Create Event
          </button>
        </form>
      </BlurFade>
    </section>
  );
};

export default CreateEventForm;
