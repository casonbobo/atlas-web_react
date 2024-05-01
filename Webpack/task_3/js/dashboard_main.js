import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
const logoElement = document.createElement('div');
logoElement.id = 'logo';

const counterButtonElement = document.createElement('button');
counterButtonElement.id = 'counter-button';
counterButtonElement.classList.add('button');
$(function(){
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<btn>Click here to get started</btn>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;

    const updateCounter = _.debounce(() => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }, 500);

    $('btn').on(updateCounter);
});
