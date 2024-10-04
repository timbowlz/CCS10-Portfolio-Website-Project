const scrollContainer = document.querySelector ('.members');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 2;
}
)