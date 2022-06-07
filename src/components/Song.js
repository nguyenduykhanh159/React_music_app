import React from 'react';

function Song({index, song, idCurrentSong, handlePlaySong}) {
    return (
        <tr
            key={index}
            className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idCurrentSong === song.id && 'bg-slate-600 text-teal-400'}`}
            onClick={() => handlePlaySong(song.id)}
        >
            <td className="text-center">{index + 1}</td>
            <td>{song.name}</td>
            <td className="text-center">{song.author}</td>
            <td className="text-center">
                <a href={song.url}>
                    <i className="fa fa-download"></i>
                </a>
            </td>
        </tr>
    )
}

export default Song