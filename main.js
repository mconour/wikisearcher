let unique = [];


random = () => {
    if (!unique.length) {
        for (let i = 0; i < 9; i++) {
            unique.push(i);
        }
    }

    let index = Math.floor(Math.random() * unique.length);
    let number = unique[index];
    unique.splice(index, 1);

    return number;
}

console.log(random());

$(function () {
    'use strict';
    let resultsPage = $('#resultsPage'),
        form = $('form'),
        lightbox = $('#lightbox'),
        $search = $('#search'),
        searchBar = $('#searchbar'),
        inputText = $('input:first'),
        close = $('#close');

    search();

    function search() {
        inputText.val('');
        searchBar.focus();

        form.submit(function (e) {
            getWiki();
            e.preventDefault();
        });
    }


    function getWiki() {
        let input = inputText.val();
        let request = $.ajax({
            dataType: 'jsonp',
			cache: true,
			url: 'https://en.wikipedia.org/w/api.php',
        })
    }


})