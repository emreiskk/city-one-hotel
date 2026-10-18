import React from 'react';

/**
 * SectionSkeleton: React.Suspense ile dinamik yüklenen bölümler için şık skeleton yükleme göstergesi
 */
export const SectionSkeleton = ({ height = 'h-96' }) => {
  return (
    <div className={`w-full ${height} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center items-center`}>
      <div className="w-full max-w-md space-y-4 animate-pulse">
        <div className="h-4 bg-slate-800 rounded-full w-1/3 mx-auto" />
        <div className="h-8 bg-slate-800 rounded-lg w-3/4 mx-auto" />
        <div className="h-4 bg-slate-800/60 rounded-md w-full" />
        <div className="h-4 bg-slate-800/40 rounded-md w-5/6 mx-auto" />
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="h-24 bg-slate-800/50 rounded-xl" />
          <div className="h-24 bg-slate-800/50 rounded-xl" />
          <div className="h-24 bg-slate-800/50 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
