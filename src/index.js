import "./styles.css"
import activateDropdown from "./activateDropDown";

//test and showcase dropdown function with sample elements
const hoverElem = document.querySelector('.navbar_row1 > div:first-child');
const dropdownElem = document.querySelectorAll('.navbar_row1 > :not(:first-child)');

// const hoverElem2 = document.querySelector('.navbar_row2 > div:first-child');
// const dropdownElem2 = document.querySelectorAll('.navbar_row2 > :not(:first-child)');

activateDropdown(hoverElem, dropdownElem);
// activateDropdown(hoverElem2, dropdownElem2);
