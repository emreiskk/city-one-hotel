import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../design-system/Button';
import { Calendar, Users, Search, ChevronDown } from 'lucide-react';

const formatDate = (date) => date.toISOString().split('T')[0];
const TODAY_ISO = formatDate(new Date());

export const BookingBar = ({ onSearchBooking }) => {
  const { content } = useLanguage();
  const { bookingBar } = content;

  // Varsayılan giriş ve çıkış tarihleri (Lazy initializers to ensure purity)
  const [checkIn, setCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  });

  const [checkOut, setCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return formatDate(d);
  });

  const [adults, setAdults] = useState(bookingBar.defaultGuests.adults);
  const [childrenCount, setChildrenCount] = useState(bookingBar.defaultGuests.children);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchBooking({
      checkIn,
      checkOut,
      adults: Number(adults),
      children: Number(childrenCount),
      roomId: null
    });
  };

  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 lg:-mt-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
      <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-[#090F1C]/95 border border-slate-800 shadow-2xl backdrop-blur-2xl">
        
        {/* Top Header: Clean, Discreet Luxury Reassurance */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3.5 sm:mb-4 border-b border-slate-800/80">
          <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
            {bookingBar.title}
          </h3>
          <span className="text-[11px] sm:text-xs font-semibold text-gold-400/90 tracking-wide uppercase">
            {bookingBar.labels.directBookingBadge}
          </span>
        </div>

        {/* Booking Form Grid: 4 Clean Columns on Desktop (Check-In, Check-Out, Guests, Submit) */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-3.5 items-end">
          
          {/* Check-in Date */}
          <div className="col-span-1 md:col-span-3 space-y-1 sm:space-y-1.5">
            <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="truncate">{bookingBar.labels.checkIn}</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={checkIn}
                min={TODAY_ISO}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full h-10 sm:h-11 glass-input text-white text-xs sm:text-sm rounded-xl pl-2.5 pr-8 sm:pl-3.5 sm:pr-9 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                required
              />
              <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="col-span-1 md:col-span-3 space-y-1 sm:space-y-1.5">
            <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="truncate">{bookingBar.labels.checkOut}</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full h-10 sm:h-11 glass-input text-white text-xs sm:text-sm rounded-xl pl-2.5 pr-8 sm:pl-3.5 sm:pr-9 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                required
              />
              <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Guests: Adults & Children */}
          <div className="col-span-2 md:col-span-3 space-y-1 sm:space-y-1.5">
            <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{bookingBar.labels.adults} / {bookingBar.labels.children}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative flex items-center">
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full h-10 sm:h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-7 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num} className="bg-hotel-950 text-white">
                      {num} {bookingBar.labels.adults}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
              <div className="relative flex items-center">
                <select
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(e.target.value)}
                  className="w-full h-10 sm:h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-7 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                >
                  {[0, 1, 2, 3].map((num) => (
                    <option key={num} value={num} className="bg-hotel-950 text-white">
                      {num} {bookingBar.labels.children}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Search / Submit Button */}
          <div className="col-span-2 md:col-span-3 space-y-1 sm:space-y-1.5">
            <div className="h-5 hidden md:block" aria-hidden="true" />
            <Button
              type="submit"
              variant="gold"
              fullWidth
              size="md"
              icon={Search}
              iconPosition="right"
              className="h-10 sm:h-11 w-full px-4 text-xs xl:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md"
            >
              <span>{bookingBar.labels.submitButton}</span>
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default BookingBar;
