"use client";
import './globals.css';
import * as motion from "motion/react-client"
import { Card } from "@/components/card";
import Search from "@/components/search";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-3 dark:bg-white">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between w-full">
            <a className="flex-none text-xl font-extrabold font text-white focus:outline-hidden focus:opacity-80 dark:text-neutral-800" href="#"> Nate
            </a>
              {/* Search input in header */}
              <div className="flex w-full ml-10 max-w-full">
                <Search />
              </div>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-2xs align-middle hover:bg-gray-700/20 focus:outline-hidden focus:bg-gray-700/20 text-sm dark:bg-white dark:hover:bg-gray-100 dark:border-gray-200 dark:text-gray-600 dark:focus:bg-gray-100" id="hs-navbar-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-dark">
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                <span className="sr-only">Toggle</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-dark" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-dark-collapse">
            <div className=" flex  mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-medium text-white focus:outline-hidden dark:text-black" href="https://nate.et" aria-current="page">My portfolio</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl text-center font-extrabold ">Welcome to Nate&#39;s Blog</h1>
        <p className="mb-6 font-mono text-center">This is a personal blog where I share my thoughts and experiences.</p>
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Render the Card component for each blog post */}
              <Card />
        </div>
      </main>
    </>
  );
}
