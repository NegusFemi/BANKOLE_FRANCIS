/*PLAY AND PAUSE AUDIO*/
const songs = [mySong, mySong1, mySong2];
const icons = [icon, icon1, icon2];

icons.forEach((iconElement, index) => {
    iconElement.addEventListener('click', () => {
        const songElement = songs[index];

        if (!songElement.paused) {
            // Pause the clicked song if it is playing
            songElement.pause();
            iconElement.innerHTML = '<i class="fa-regular fa-circle-play" style="color: rgba(4, 33, 39, 0.952); font-size: 6rem !important; !important; cursor: pointer; margin-top: 1rem;"></i>';
        } else {
            // Pause all other songs and reset their icons
            songs.forEach((s, i) => {
                if (!s.paused) {
                    s.pause();
                    icons[i].innerHTML = '<i class="fa-regular fa-circle-play" style="color: rgba(4, 33, 39, 0.952); font-size: 6rem !important; cursor: pointer; margin-top: 1rem !important; position: relative;"></i>';
                }
            });
            // Play the selected song and update its icon
            const isMobile = window.matchMedia('(max-width: 37.5em)').matches;
            const pauseMargin = isMobile ? '-0.5rem !important' : '1rem !important';
            songElement.play();
            iconElement.innerHTML = `<i class="fa-regular fa-circle-pause" style="color: rgba(4, 33, 39, 0.952); font-size: 6rem; cursor: pointer; margin-top: ${pauseMargin}; position: relative !important; z-index: 9999 !important"></i>`;
        }
    });
});
