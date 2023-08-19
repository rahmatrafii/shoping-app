import React from "react";

export default function ProductDetailLoading() {
  return (
    <div className="pt-36 pb-32">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex gap-x-10 w-[1100px] h-[500px]">
          <div className="w-1/2 h-[500px] bg-slate-300 rounded-sm"></div>
          <div className="w-1/2">
            <div className="w-1/2 h-5 bg-slate-300 rounded-sm mb-5"></div>
            <div className="w-1/3 h-5 bg-slate-300 rounded-sm mb-5"></div>
            <div className="w-1/4 h-5 bg-slate-300 rounded-sm mb-5"></div>
            <div className="w-full h-[240px] bg-slate-300 mb-5"></div>
            <div className="w-full h-16 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
