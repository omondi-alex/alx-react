import $ from 'jquery';
import _ from 'lodash';

// Add elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize counter
let count = 0;

// Function to update counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Debounced function to bind to button click
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Bind function to button click
$('#btn').click(debouncedUpdateCounter);

