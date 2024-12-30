function openCard() {
    const card = document.getElementById('birthdayCard');
    const song = document.getElementById('birthdaySong');

    card.classList.add('open');
    song.play();
}