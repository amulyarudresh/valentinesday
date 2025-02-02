document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'collage.html';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let newLeft = Math.random() * (containerRect.width - noBtnRect.width);
    let newTop = Math.random() * (containerRect.height - noBtnRect.height);

    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
});