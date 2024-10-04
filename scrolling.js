const membersContainer = document.querySelector('.members');

membersContainer.addEventListener('wheel', (evt) => {
  const maxScrollLeft = membersContainer.scrollWidth - membersContainer.clientWidth;

  if ((membersContainer.scrollLeft === maxScrollLeft && evt.deltaY > 0) || 
      (membersContainer.scrollLeft === 0 && evt.deltaY < 0)) {
    // If at the end or the start of horizontal scroll, allow vertical scroll
    return;
  } else {
    // Otherwise, prevent vertical scroll and scroll horizontally
    evt.preventDefault();
    membersContainer.scrollLeft += evt.deltaY * 2; // Adjust horizontal scroll speed if needed
  }
});
