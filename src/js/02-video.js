import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// Обработчик события timeupdate, вызывается при обновлении времени воспроизведения
const handleTimeUpdate = throttle(function (event) {
  const currentTime = event.seconds; // Текущее время воспроизведения
  sessionStorage.setItem('videoplayer-current-time', currentTime); // Сохраняем текущее время в сессионное хранилище
}, 1000); // Ограничиваем частоту вызова обработчика 1 раз в секунду

// Устанавливаем обработчик события timeupdate
player.on('timeupdate', handleTimeUpdate);

// При загрузке страницы восстанавливаем время воспроизведения, если оно сохранено в сессионном хранилище
const currentTime = sessionStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}



// Если вы хотите использовать <iframe> для загрузки видео плеера Vimeo, то не будет возможности управлять временем воспроизведения и сохранять его состояние при перезагрузке страницы. <iframe> предоставляет только встроенный плеер, и доступ к его функциональности ограничен.

// Если сохранение времени воспроизведения и возобновление видео с этого момента является неотъемлемой частью вашего проекта, то рекомендуется использовать Vimeo Player API и Player из пакета @vimeo/player вместо <iframe>. Это обеспечит вам полный контроль над плеером и его состоянием.

// Однако, если вы настаиваете на использовании <iframe>, и вам не требуется сохранять время воспроизведения при перезагрузке страницы, вы можете просто использовать <iframe> без дополнительной логики JavaScript. В этом случае время воспроизведения будет сбрасываться при перезагрузке страницы.