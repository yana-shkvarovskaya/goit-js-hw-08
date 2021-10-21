import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const   STORAGE_VIDEO_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');

const player = new vimeoPlayer(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(STORAGE_VIDEO_KEY, JSON.stringify(data));
};

const currentTime = JSON.parse(localStorage.getItem(STORAGE_VIDEO_KEY));

player.setCurrentTime(currentTime.seconds)