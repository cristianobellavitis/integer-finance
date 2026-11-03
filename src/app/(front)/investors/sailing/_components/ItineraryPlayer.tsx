"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { LEGS, OUTRO_START } from "./legChapters";

// Index of the leg playing at time t: -1 during the intro, LEGS.length during the outro.
function legAt(t: number) {
  if (t >= OUTRO_START) return LEGS.length;
  let index = -1;
  LEGS.forEach((leg, i) => {
    if (t >= leg.start) index = i;
  });
  return index;
}

export default function ItineraryPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const userPaused = useRef(false);

  // Play by itself (muted) while on screen, unless the visitor paused it or prefers reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !userPaused.current) {
          void video.play().catch(() => undefined);
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const current = legAt(time);

  const seek = useCallback((t: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = t;
    setTime(t);
    if (!userPaused.current) void video.play().catch(() => undefined);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) return seek(0);
      if (index >= LEGS.length) return seek(OUTRO_START);
      seek(LEGS[index]!.start);
    },
    [seek],
  );

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(current - 1);
    } else if (event.key === " " || event.key === "k") {
      event.preventDefault();
      togglePlay();
    }
  };

  const leg = current >= 0 && current < LEGS.length ? LEGS[current] : null;
  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-white shadow-lg"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause the itinerary video" : "Play the itinerary video"}
        className="group relative block w-full"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/sailing/greece/poster.jpg"
          className="aspect-video w-full bg-brand-900"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        >
          <source src="/videos/sailing-greece.mp4" type="video/mp4" />
        </video>
        {!playing && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-md transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </span>
        )}
      </button>

      <div className="relative h-1 w-full bg-border" aria-hidden>
        <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex items-center gap-3 p-4 sm:gap-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous leg"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-brand-900 transition-colors hover:border-primary hover:bg-brand-900 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-grow" aria-live="polite">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {leg
              ? `Leg ${leg.n} of ${LEGS.length}${leg.getaway ? " · Client getaway" : ""}`
              : current < 0
                ? "The voyage"
                : "Journey's end"}
          </p>
          <p className="truncate font-heading text-lg font-semibold text-brand-900">
            {leg ? leg.title : current < 0 ? "Sicily to Marmaris" : "96 nights under sail"}
          </p>
          <p className="text-sm text-muted-foreground">
            {leg ? `${leg.dates} · ${leg.days} days` : "16 May – 20 August"}
          </p>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-brand-900 transition-colors hover:border-primary hover:bg-brand-900 hover:text-white sm:flex"
        >
          {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
        </button>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next leg"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-brand-900 transition-colors hover:border-primary hover:bg-brand-900 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1 px-4 pb-4" role="group" aria-label="Jump to a leg">
        {LEGS.map((item, i) => (
          <button
            key={item.n}
            type="button"
            onClick={() => goTo(i)}
            title={`Leg ${item.n}: ${item.title} (${item.dates})`}
            aria-label={`Leg ${item.n}: ${item.title}`}
            aria-current={i === current ? "step" : undefined}
            className={cn(
              "flex h-8 min-w-0 items-center justify-center rounded text-xs font-semibold transition-colors",
              item.getaway ? "flex-[0.6]" : "flex-1",
              i === current
                ? "bg-brand-900 text-white"
                : i < current
                  ? "bg-primary/20 text-brand-900 hover:bg-primary/40"
                  : "bg-muted text-muted-foreground hover:bg-primary/20",
            )}
          >
            {item.n}
          </button>
        ))}
      </div>
    </div>
  );
}
