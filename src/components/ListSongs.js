import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import Song from "./Song.js"

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(() => {
    setidSong(song.id)
  }, [song])
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <Song
              index={index}
              song={song}
              idCurrentSong={idSong}
              handlePlaySong={handlePlaySong}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
