import { useState, useEffect,useContext } from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { ApiContext } from "../ApiContext.jsx";

export default function Community() {
  const { hubData } = useContext(ApiContext);

  if (!hubData) return <p>Loading...</p>;
  

  return (
    <div className="p-8 text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
      <p className="text-gray-600 mb-6">
        Be part of our fitness family! Share your progress, motivate others,
        and grow together.
      </p>

   

      {/* ✅ Vertical Social Links */}
      {hubData && (
        <div className="flex flex-col items-center gap-4">
          {hubData.yt_url && (
            <a
              href={hubData.yt_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Youtube size={20} /> YouTube
            </a>
          )}
          {hubData.insta_url && (
            <a
              href={hubData.insta_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <Instagram size={20} /> Instagram
            </a>
          )}
          {hubData.fb_url && (
            <a
              href={hubData.fb_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Facebook size={20} /> Facebook
            </a>
          )}
        </div>
      )}
    </div>
  );
}
