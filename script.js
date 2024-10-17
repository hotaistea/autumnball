document.getElementById('vote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const king = document.getElementById('king').value;
    const queen = document.getElementById('queen').value;
    alert(`Спасибо за ваш голос! Вы выбрали Короля: ${king} и Королеву: ${queen}.`);
    document.getElementById('vote-form').reset();
});

const playMusicButton = document.getElementById('play-music');
const pauseMusicButton = document.getElementById('pause-music');
const music = document.getElementById('background-music');

playMusicButton.addEventListener('click', () => {
    music.play();
});

pauseMusicButton.addEventListener('click', () => {
    music.pause();
});
