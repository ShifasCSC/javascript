document.addEventListener('mousemove', (c) => {
    const cursors = document.querySelector('.cursor');
    
    const x = c.clientX;
    const y = c.clientY;
    
    setTimeout(() => {
        cursors.style.left = `${x}px`;
        cursors.style.top =` ${y}px`;
    }, 100); 
});