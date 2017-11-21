$(document).ready(() => {
    $('a[href^="#fn"]').each((id, el) => {
        const $el = $(el);
        const index = id + 1;
        $el.html(index);
        $el.attr('href', '#fn' + index);
        if (!$el.hasClass('footnote-backref')) {
            const href = $el.attr('href');
            const $note = $(href);
            $el.parent().after(`<div id="${href.replace('#', '')}" class="sidenote"><a class="footnote-backref" href="#fnref${index}">${index}</a>${$note.html()}</div>`);
        }
    });

    $('.footnotes-sep').hide();
    $('.footnotes').hide();
});
