"use client";

import { useMemo, useState } from "react";
import { dryCleanPrices, priceLetters, type PriceItem } from "@/lib/prices";
import PriceIcon from "./PriceIcon";
import ItemIcon from "./ItemIcon";

export default function PriceList() {
  const [activeLetter, setActiveLetter] = useState<string>(priceLetters[0] ?? "A");
  const [query, setQuery] = useState("");

  const filtered = useMemo<PriceItem[]>(() => {
    const q = query.trim().toLowerCase();
    return dryCleanPrices.filter((p) => {
      const matchesLetter = !q && p.name.toUpperCase().startsWith(activeLetter);
      const matchesQuery = q && (p.name.toLowerCase().includes(q) || p.fabric.toLowerCase().includes(q));
      return q ? matchesQuery : matchesLetter;
    });
  }, [activeLetter, query]);

  // group by category for nicer layout
  const grouped = useMemo(() => {
    const map = new Map<string, PriceItem[]>();
    filtered.forEach((p) => {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="w-full">
      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search an item (e.g. Saree, Jacket)…"
          className="w-full pl-12 pr-4 py-3 rounded-full border border-navy/15 bg-white/80 backdrop-blur focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none font-body text-sm shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-body-text/50 hover:text-gold text-sm"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Letter strip */}
      {!query && (
        <div className="sticky top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-ivory/80 backdrop-blur-md border-y border-gold/10 mb-8">
          <div className="max-w-7xl mx-auto flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
            {priceLetters.map((L) => (
              <button
                key={L}
                onClick={() => setActiveLetter(L)}
                className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full font-nav font-semibold text-sm transition-all duration-200 ${
                  activeLetter === L
                    ? "bg-gold text-white shadow-lg scale-110"
                    : "bg-white text-navy hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {L}
              </button>
            ))}
            <span className="shrink-0 self-center ml-2 font-body text-xs text-body-text/60 whitespace-nowrap">
              {filtered.length} items
            </span>
          </div>
        </div>
      )}

      {/* Items */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-heading text-2xl text-navy/60">No items found</p>
          <p className="font-body text-body-text/60 mt-2">Try a different letter or search term.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-4">
                <PriceIcon category={category} />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">{category}</h3>
                <span className="font-body text-xs text-body-text/50 ml-auto">{items.length} items</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((p, i) => (
                  <div
                    key={p.name + p.fabric + i}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-navy/5 hover:border-gold/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-navy/5 group-hover:border-gold/30 transition-colors overflow-hidden">
                      {p.svgrepo ? (
                        <img src={`/icons/${p.svgrepo}.svg`} alt={p.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <span className="text-gold">
                          <ItemIcon icon={p.icon} category={p.category} />
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-nav font-semibold text-navy text-sm truncate">{p.name}</p>
                      {p.fabric !== "Standard" && (
                        <p className="font-body text-xs text-body-text/60">{p.fabric}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-heading font-bold text-gold text-lg leading-none">₹{p.price}</p>
                      <p className="font-body text-[10px] text-body-text/40 mt-0.5">per item</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
