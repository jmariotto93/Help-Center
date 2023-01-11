import React from "react";

export default function Home() {
  return (
    <div>
      <header className="w-full h-20 bg-black">
        <div className="flex justify-between w-full px-10 items-center h-full">
          <div className="text-white text-lg">
            <p>Abstract | Help Center</p>
          </div>

          <div className="text-white text-lg flex gap-4">
            <button className="border-[1px] p-2 px-4 border-white rounded-md">
              Submit a request
            </button>

            <button className="w-[110px] rounded-md bg-indigo-600">
              Sign in
            </button>
          </div>
        </div>
      </header>
      <div className="h-80 bg-pink-200 flex justify-center w-full">
        <div className="w-full flex flex-col items-center h-full justify-center gap-8">
          <h1 className="text-6xl">How can we help?</h1>
          <input className="p-4 w-[53%] focus:outline-slate-600 border-2 border-slate-400 rounded-lg shadow-lg"  type="text" placeholder="Search"/>
        </div>
      </div>
    </div>
  );
}
