/* for_each album.songs as song
song_element=
  <tr>
    <td>index</td>
    <td>song.title</td>
    <td>song.duration</td>
  </tr>
append song_element to #song-list
end for_each */
{
  album.songs.forEach((song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class='song-number'>${index +1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</td>
      </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);
    })

    $('#song-list').append(song.element);
  });
}
