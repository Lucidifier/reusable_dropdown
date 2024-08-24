function activateDropdown(elementHovered, elementDropped) {
  elementHovered.addEventListener('mouseover', () => {
    for (const elem of elementDropped) {
      elem.style.display = 'block';
    }
  })
  elementHovered.addEventListener('mouseout', () => {
    for (const elem of elementDropped) {
      elem.style.display = 'none';
    }
  })
}

export default activateDropdown;