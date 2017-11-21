$(document).ready(() => {
    let index = 1;
    $('p').each((pId, pEl) => {
        const $pEl = $(pEl);
        let notesWide = '';
        let notesSmall = '';

        $pEl.find('a[href^="#fn"]').each((aId, aEl) => {
            const $aEl = $(aEl);
            $aEl.html(index);
            $aEl.attr('href', '#fn' + index);
            if (!$aEl.hasClass('footnote-backref')) {
                const href = $aEl.attr('href');
                const $note = $(href);
                notesWide += `<div id="${href.replace('#', '')}" class="sidenote sidenote-wide">
                    <a class="footnote-backref" href="#fnref${index}">${index}</a>
                ${$note.html()}</div>`;
                notesSmall += `<div id="${href.replace('#', '')}" class="sidenote sidenote-small">
                    <a class="footnote-backref" href="#fnref${index}">${index}</a>
                ${$note.html()}</div>`;
            }
            index += 1;
        });

        $pEl.before(notesWide);
        $pEl.after(notesSmall);
    });

    $('.footnotes-sep').hide();
    $('.footnotes').hide();
});
