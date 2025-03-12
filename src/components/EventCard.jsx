import { Link } from "react-router-dom";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="group w-80 rounded-lg overflow-hidden shadow-lg bg-mygray transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      
      {/* Event Image */}
      <div>
        <img
          src={event.img}
          className="h-36 w-full object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="bg-mygray p-3 text-white">
        {/* Title */}
        <h3 className="text-lg text-gray-900 font-bold font-qs">{event.title}</h3>

        {/* Event Date & Time */}
        <div className="mt-2 flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-yellow-400" />
          <span className="text-gray-900  font-qs">{event.date}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-blue-400" />
          <span className="text-gray-900  font-qs">{event.time}</span>
        </div>

        {/* Description */}
        <p className="mt-2 text-xs text-gray-600  font-qs line-clamp-2">
          {event.description}
        </p>

        <div className="mt-4 w-[90%] mx-auto">
  <Link
    to="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-full gap-2 rounded-lg bg-black px-4 py-3 text-sm font-medium  font-qs text-white shadow-md transition hover:bg-blue-600"
  >
    Event Details
    <ExternalLink className="w-4 h-4" />
  </Link>
</div>

      </div>
    </div>
  );
};

export default EventCard;
