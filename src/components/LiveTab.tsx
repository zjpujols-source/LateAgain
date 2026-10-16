import React from 'react';
import { ArtistConfig } from '../types/artist';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, ExternalLink } from 'lucide-react';

interface LiveTabProps {
  config: ArtistConfig;
}

export const LiveTab: React.FC<LiveTabProps> = ({ config }) => {
  const liveConfig = config.tabs.live;
  const tourDates = liveConfig.tourDates || [];
  const flyerUrl = liveConfig.flyerUrl || (tourDates.length > 0 ? tourDates[0].flyerUrl : null);

  const hasShows = liveConfig.status === 'active' && tourDates.length > 0;

  return (
    <div className="py-8 sm:py-16 animate-in fade-in duration-500 bg-black text-white min-h-[75vh] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-8 sm:mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 block">
            / TOUR & LIVE SHOWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
            {hasShows ? "Upcoming Live Shows" : "Live Dates"}
          </h2>
        </div>

        {hasShows ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Official Show Flyer */}
            {flyerUrl && (
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm sm:max-w-md bg-zinc-900 border border-white/20 shadow-2xl overflow-hidden group">
                  <a
                    href={tourDates[0]?.ticketUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[4/5] w-full cursor-pointer overflow-hidden"
                    title="Click to view tickets & event info"
                  >
                    <img
                      src={flyerUrl}
                      alt="Official Live Tour Flyer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-[0.25em] font-bold bg-white text-black px-5 py-2.5 shadow-2xl flex items-center gap-2">
                        <span>Get Tickets</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                  
                  {/* Subtle caption */}
                  <div className="p-3 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span>OFFICIAL POSTER</span>
                    <span className="text-zinc-500">LOS ANGELES, CA</span>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Tour Dates List */}
            <div className={`space-y-6 ${flyerUrl ? "lg:col-span-7" : "lg:col-span-12"}`}>
              {tourDates.map((show) => (
                <div
                  key={show.id}
                  className="bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-white/40 transition-colors"
                >
                  {/* Presenter / Tag */}
                  {show.presenter && (
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] px-2.5 py-1 bg-white/10 text-zinc-300 border border-white/10 rounded-none">
                        {show.presenter}
                      </span>
                    </div>
                  )}

                  {/* Main Event Headline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                      {config.artistName} Live at {show.venue}
                    </h3>
                    {show.specialGuests && (
                      <p className="text-xs sm:text-sm text-zinc-400">
                        <span className="text-zinc-500 uppercase tracking-wider text-[11px] block sm:inline mr-2">With Special Guests:</span>
                        <span className="text-zinc-200 font-semibold">{show.specialGuests}</span>
                      </p>
                    )}
                  </div>

                  {/* Date, Time & Venue Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-white/10 text-sm">
                    {/* Date & Time */}
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-2 text-white font-bold tracking-wider">
                        <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{show.date}</span>
                      </div>
                      {show.doors && (
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span>Doors: {show.doors}</span>
                        </div>
                      )}
                    </div>

                    {/* Venue & Location */}
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-2 text-white font-bold tracking-wider">
                        <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{show.venue}</span>
                      </div>
                      {show.address && (
                        <div className="text-xs text-zinc-400 pl-6 truncate" title={show.address}>
                          {show.address}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Ticket Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    {show.price && (
                      <div className="text-xs font-mono text-zinc-400">
                        Tickets from <span className="text-white font-bold text-sm">{show.price}</span>
                      </div>
                    )}
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm transition-all shadow-xl active:scale-95"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Buy Tickets On DICE</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Fallback when no shows are active */
          <div className="p-12 sm:p-16 bg-zinc-900/40 border border-white/15 space-y-6 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <Calendar className="w-12 h-12 text-zinc-400" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
              SHOWS COMING SOON
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 tracking-wider max-w-md">
              Follow on social platforms or check back soon for upcoming tour dates and live performance announcements.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
