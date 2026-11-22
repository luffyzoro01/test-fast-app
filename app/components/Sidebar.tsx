"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/homepage", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/items", label: "Items" },
  { href: "/Testapi", label: "API JSON" },
  { href:"/myfarm", label: "My farm"}
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 backdrop-blur md:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
          <span>NovaStack</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Sidebar Drawer (Mobile) & Fixed Rail (Desktop) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800/80 bg-slate-950 transition-transform duration-200 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center gap-2.5 border-b border-slate-800/80 px-6 font-semibold tracking-tight text-white">
          <span className="inline-block h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
          <span>NovaStack</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Navigation
          </p>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Status Footer */}
        <div className="border-t border-slate-800/80 p-4">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-3 py-2.5 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              App Router Active
            </div>
            <p className="mt-0.5 text-slate-500">localhost:3000</p>
          </div>
        </div>
      </aside>
    </>
  );
}
