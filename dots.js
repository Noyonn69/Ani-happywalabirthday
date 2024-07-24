fetch('dots.txt')
    .then(response => response.text())
    .then(data => {
        const dots = data.split('\n').map(line => line.split(',').map(Number));
        const faceContainer = document.getElementById('faceContainer');

        dots.forEach(([x, y]) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = `${x * 5}px`;  // Scale the coordinates
            dot.style.top = `${y * 5}px`;   // Scale the coordinates
            faceContainer.appendChild(dot);
        });
    });
