"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
}) {
  const pathname = usePathname();
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-neutral-800/70 bg-black/40 px-4 py-2.5 shadow-[0_1px_0_#0000000d] backdrop-blur-md">
          <Link href="/" className="hidden md:flex items-center gap-2 font-semibold tracking-tight text-neutral-100">
            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-white`}>TZ</span>
            <span>Tolga.Z</span>
          </Link>
          
          {/* Mobile Navigation Icons */}
          <div className="flex items-center justify-center gap-8 md:hidden w-full">
            <Link
              href="/"
              className="relative flex flex-col items-center pb-2"
            >
              <svg className="w-7 h-7 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l10.5 10.5a.75.75 0 0 1-1.06 1.06L20.75 14.18V21a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.5a.75.75 0 0 1-.75-.75v-6.82L3.53 15.4a.75.75 0 0 1-1.06-1.06L11.47 3.84Z"/>
              </svg>
              {pathname === "/" && (
                <div className="absolute -bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/work"
              className="relative flex flex-col items-center pb-2"
            >
              <svg className="w-7 h-7 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v6.75a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Z" clipRule="evenodd"/>
              </svg>
              {pathname === "/work" && (
                <div className="absolute -bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/about"
              className="relative flex flex-col items-center pb-2"
            >
              <svg className="w-7 h-7 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd"/>
              </svg>
              {pathname === "/about" && (
                <div className="absolute -bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/contact"
              className="relative flex flex-col items-center pb-2"
            >
              <svg className="w-7 h-7 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
              </svg>
              {pathname === "/contact" && (
                <div className="absolute -bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="relative text-sm text-neutral-300 transition hover:text-white"
            >
              Home
              {pathname === "/" && (
                <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/work"
              className="relative text-sm text-neutral-300 transition hover:text-white"
            >
              Projects
              {pathname === "/work" && (
                <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/about"
              className="relative text-sm text-neutral-300 transition hover:text-white"
            >
              About
              {pathname === "/about" && (
                <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
            <Link
              href="/contact"
              className="relative text-sm text-neutral-300 transition hover:text-white"
            >
              Contact
              {pathname === "/contact" && (
                <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
              )}
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:border-neutral-400 hover:scale-105"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
