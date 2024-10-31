
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Inițializarea player-ului
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

// Cheia de stocare pentru timpul curent
const STORAGE_KEY = 'videoplayer-current-time';

// Funcția de actualizare a timpului curent
const updateCurrentTime = (data) => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

// Funcția de încărcare a timpului curent
const loadCurrentTime = () => {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime) {
        player.setCurrentTime(savedTime).catch((error) => {
            // Aici poți trata erorile, de exemplu, dacă timpul salvat nu este valid
            console.error('Error setting current time:', error);
        });
    }
};

// Ascultă evenimentul de timeupdate și actualizează timpul curent cu throttling
player.on('timeupdate', throttle(updateCurrentTime, 1000));

// La încărcarea paginii, reia redarea de la timpul salvat
loadCurrentTime();
