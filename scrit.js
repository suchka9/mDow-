function switchScreen(screenName) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const target = document.getElementById(`screen_${screenName}`);
    if (target) target.classList.add('active');
}
