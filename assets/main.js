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
    let resultsDisplay = $('#resultsdisplay'),
        form = $('form'),
        lightbox = $('#lightbox'),
        $search = $('#search'),
        searchbox = $('#searchbox'),
        inputText = $('input:first'),
        close = $('#close');

    search();

    function search() {
        inputText.val('');
        searchbox.focus();

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
            data: {
                format: 'json',
                action: 'query',
                list: 'search',
                continue: '',
                srlimit: 16,
                srsearch: input
            }
        });


        request.done(function (data) {
            let arr = [];
            let length = data.query.search.length;
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    arr[i] = (
                        '<div class="results background-' + random() + '">' +
                        '<h2 class="title">' + data.query.search[i].title + '</h2>' +
                        '<p class="snippit">' + data.query.search[i].snippet + '\u2026</p>' +
                        '<a class="read" href="https://en.wikipedia.org/wiki/' + data.query.search[i].title + '" target="_blank">READ MORE</a>' +
                        '</div>'
                    );
                }

                lightbox.addClass('lightboxOut');
                resultsDisplay.html(arr.join(''));
            }
        });
    }

    $(document).keyup(function (e) {
        if (e.keyCode === 27) lightbox.addClass('lightboxOut');
    })

    $search.on('click', function (e) {
        lightbox.removeClass('lightboxOut');
        search();
        e.preventDefault();
    });


    close.on('click', function (e) {
        lightbox.addClass('lightboxOut');
    })


})