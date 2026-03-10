import { MapPin, Heart, PartyPopper } from 'lucide-react';
import './Events.css';

const events = [
  { time: '16:30', text: 'Сбор гостей', icon: <MapPin size={24} /> },
  { time: '17:00', text: 'Начало вечеринки', icon: <Heart size={24} /> },
  { time: '23:00', text: 'Все целуют Артема', icon: <PartyPopper size={24} /> },
];

export const Events = () => {
  return (
    <div className="event-container" data-aos="fade-down" data-aos-duration="1000">
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <span className="event-icon">{event.icon}</span>
            <span className="event-text">
              {event.time} {event.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
