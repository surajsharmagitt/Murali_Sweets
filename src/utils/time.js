import { useState, useEffect } from 'react';

/**
 * Gets the current hour and minute in Guntur, India (Asia/Kolkata timezone)
 */
export function getISTTime() {
  try {
    const options = { timeZone: 'Asia/Kolkata', hour12: false };
    const formatter = new Intl.DateTimeFormat('en-US', {
      ...options,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    const parts = formatter.formatToParts(new Date());
    const hour = parseInt(parts.find(p => p.type === 'hour').value, 10);
    const minute = parseInt(parts.find(p => p.type === 'minute').value, 10);
    return { hour, minute };
  } catch (e) {
    // Fallback if Intl is not fully supported or throws
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const istDate = new Date(utc + (3600000 * 5.5));
    return { hour: istDate.getHours(), minute: istDate.getMinutes() };
  }
}

/**
 * Checks if the store is currently open (10:00 AM to 10:00 PM IST)
 */
export function checkIsOpen() {
  const { hour, minute } = getISTTime();
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 10 * 60; // 10:00 AM
  const closeMinutes = 22 * 60; // 10:00 PM
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

/**
 * Custom React hook that returns whether the store is open and updates it regularly.
 */
export function useStoreStatus() {
  const [isOpen, setIsOpen] = useState(checkIsOpen());

  useEffect(() => {
    // Check initial status
    setIsOpen(checkIsOpen());

    // Update status every 30 seconds
    const timer = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  return isOpen;
}
