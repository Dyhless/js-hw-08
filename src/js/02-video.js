import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// Обработчик события timeupdate, вызывается при обновлении времени воспроизведения
const handleTimeUpdate = throttle(function (event) {
  const currentTime = event.seconds; // Текущее время воспроизведения
  localStorage.setItem('videoplayer-current-time', currentTime); // Сохраняем текущее время в локальное хранилище
}, 1000); // Ограничиваем частоту вызова обработчика 1 раз в секунду

// Устанавливаем обработчик события timeupdate
player.on('timeupdate', handleTimeUpdate);

// При загрузке страницы восстанавливаем время воспроизведения, если оно сохранено в локальном хранилище
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}
