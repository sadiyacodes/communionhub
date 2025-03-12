import React, { useState } from "react";
import EventCard from "./EventCard";
import EventsData from "./EventsData.json";
import { Plus } from "lucide-react";

const EventsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false); // State to toggle form

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents =
    selectedCategory === "All"
      ? EventsData
      : EventsData.filter((event) => event.category === selectedCategory);

      const scrollToForm = () => {
        const formSection = document.getElementById("create-event-form");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section className="w-full py-12 md:py-20 lg:py-24" id="events">
      <div className="container px-6 md:px-12">
        {/* Filter & Create Button */}
        <div className="flex flex-wrap justify-between items-center mt-6 pb-4 gap-4">
          {/* Filter Options */}
          <div className="flex space-x-4">
            {["All", "Religious", "Social", "Charity"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Create Event Button */}
          <a href="#create-event-form" className="flex">
          <button
          onClick={scrollToForm} 
            className="bg-gray-900 text-white px-5 py-2 rounded-md font-medium transition hover:bg-gray-700 flex items-center justify-center gap-2 group"
          >
            Create Event
            <Plus className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
          </button>
          </a>
        </div>

        {/* Events Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default EventsList;
