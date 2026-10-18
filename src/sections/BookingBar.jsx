import React, { useState } from 'react';
import { siteContent } from '../config/siteContent';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Calendar, Users, BedDouble, Search, BadgePercent, ChevronDown } from 'lucide-react';

export const BookingBar = ({ onSearchBooking }) => {
  const { bookingBar, roomsSection } = siteContent;

  // Varsayılan giriş tarihi: yarın, çıkış: 2 gün sonrası
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState(formatDate(defaultCheckOut));
  const [adults, setAdults] = useState(bookingBar.defaultGuests.adults);
  const [childrenCount, setChildrenCount] = useState(bookingBar.defaultGuests.children);
  const [selectedRoomId, setSelectedRoomId] = useState(roomsSection.rooms[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchBooking({
      checkIn,
      checkOut,
      adults: Number(adults),
      children: Number(childrenCount),
      roomId: selectedRoomId
    });
  };

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 lg:-mt-14 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
      <Card variant="goldBorder" hover={false} className="p-3.5 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-2xl">
        
        {/* Top Direct Booking Badge Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-white/10">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide block">
              {bookingBar.title}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400">
              {bookingBar.subtitle}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-[11px] sm:text-xs font-medium text-gold-300 shadow-sm self-start sm:self-auto">
            <BadgePercent className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{bookingBar.labels.directBookingBadge}</span>
          </div>
        </div>

        {/* Booking Form Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-3.5 items-end">
          
          {/* Check-in Date */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{bookingBar.labels.checkIn}</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full h-11 glass-input text-white text-xs sm:text-sm rounded-lg pl-3 pr-10 bg-hotel-900/90 text-slate-100 cursor-pointer focus:ring-1 focus:ring-gold-500/50"
                required
              />
              <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{bookingBar.labels.checkOut}</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full h-11 glass-input text-white text-xs sm:text-sm rounded-lg pl-3 pr-10 bg-hotel-900/90 text-slate-100 cursor-pointer focus:ring-1 focus:ring-gold-500/50"
                required
              />
              <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Guests: Adults & Children */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{bookingBar.labels.adults} / {bookingBar.labels.children}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative flex items-center">
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-lg pl-3 pr-7 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50"
                >
                  {[1, 2, 3, 4].map((num) => (
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
                  className="w-full h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-lg pl-3 pr-7 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50"
                >
                  {[0, 1, 2, 3].map((num) => (
                    <option key={num} value={num} className="bg-hotel-950 text-white">
                      {num} Çocuk
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Room Selection */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
              <BedDouble className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{bookingBar.labels.roomType}</span>
            </label>
            <div className="relative flex items-center">
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-lg pl-3 pr-8 bg-hotel-900/90 cursor-pointer truncate focus:ring-1 focus:ring-gold-500/50"
              >
                {roomsSection.rooms.map((room) => (
                  <option key={room.id} value={room.id} className="bg-hotel-950 text-white">
                    {room.name} ({room.formattedPrice})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Search / Submit Button */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-1.5">
            <div className="h-5 hidden lg:block" aria-hidden="true" />
            <Button
              type="submit"
              variant="gold"
              fullWidth
              size="md"
              icon={Search}
              iconPosition="right"
              className="h-11 w-full px-4 text-xs xl:text-sm font-semibold tracking-normal sm:tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-gold-glow/50"
            >
              {bookingBar.labels.submitButton}
            </Button>
          </div>

        </form>

      </Card>
    </div>
  );
};
