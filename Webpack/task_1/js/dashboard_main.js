import $ from 'jquery';
import _ from 'lodash';

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
