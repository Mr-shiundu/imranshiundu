// Create the cursor div
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Add the 'expand' class on hover over specific elements (like links, buttons, etc.)
const hoverElements = document.querySelectorAll('a, button, .interactive');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
  });
});
