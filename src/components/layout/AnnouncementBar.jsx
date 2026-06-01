import { useSettings } from '../../context/SettingsContext';

export default function AnnouncementBar() {
  const { settings } = useSettings();
  const announcementsList = settings.announcements || [
    "FREE DELIVERY IN GUNTUR ON ORDERS ABOVE ₹999",
    "MADE FRESH DAILY WITH 100% PURE GHEE",
    "100+ VARIETIES OF SWEETS & NAMKEEN"
  ];

  const items = [
    ...announcementsList,
    `ORDER ON WHATSAPP: ${settings.contacts?.phone_1 || '9985650303'}`
  ];

  const text = items.join('   •   ').toUpperCase();

  return (
    <div className="announcement-bar">
      <div className="marquee">
        <span>{text} &nbsp;&nbsp;•&nbsp;&nbsp; </span>
        <span>{text} &nbsp;&nbsp;•&nbsp;&nbsp; </span>
      </div>
    </div>
  );
}

