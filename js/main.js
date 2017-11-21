let refs = {};

$(document).ready(() => {
    // Load references
    $.getJSON('../refs.json', (data) => {
        refs = data;
        references();
        sideNotes();
    });
});

function references() {
    // Parse references
    $('cite').each((id, el) => {
        $el = $(el);
        // Get reference ID
        const text = $el.text();
        const refID = text.split(':')[0];

        // Get reference object
        const ref = refs[refID];

        // Get passage
        let passage = text.split(':')[1];

        let citation = `${ref.author}, <i>${ref.title}</i> (${ref.year})`;
        if (passage) {
            citation += `, p.&nbsp;${passage}`;
        }

        $el.html(citation);
    });
}

function sideNotes() {
    // Parse sidenotes
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

    // Hide footnotes
    $('.footnotes-sep').hide();
    $('.footnotes').hide();
}
