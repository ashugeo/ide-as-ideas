let refs = {};

$(document).ready(() => {
    // TODO: remove this
    $.ajaxSetup({ cache: false });

    // Load references
    $.getJSON('refs.json', (data) => {
        refs = data;
        videos();
        references();
        sideNotes();
        externalLinks();

        if (window.location.pathname === '/ide-as-ideas/') {
            frenchTypo();
        }
    });
});

$(document).on('click', 'a', (e) => {
    const $el = $(e.currentTarget);

    if ($el.attr('id') && $el.attr('id').indexOf('fnref') > -1) {
        return false;
    } else if ($el.hasClass('footnote-backref')) {
        return false;
    }
});

$(document).on('mouseover', 'a', (e) => {
    const $el = $(e.currentTarget);

    if ($el.attr('id') && $el.attr('id').indexOf('fnref') > -1) {
        const note = $el.attr('id').replace('fnref', '');
        $('#fn' + note).addClass('visible');
    }
});

$(document).on('mouseleave', 'a', (e) => {
    $('.sidenote').removeClass('visible');
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

        // Author
        let citation = `${ref.author}, `;

        // Title
        if (ref.link) {
            citation += `<i><a href="${ref.link}" target="_blank">${ref.title}</a></i>`;
        } else {
            citation += `<i>${ref.title}</i>`;
        }

        // Year
        if (ref.year) {
            citation += ` (${ref.year})`;
        }

        // Editor
        if (ref.editor) {
            citation += `, ${ref.editor}`;
        }

        // Passage
        if (passage) {
            citation += `, p.&nbsp;${passage}`;
        }

        $el.html(citation);
    });
}

function sideNotes() {
    // Parse sidenotes
    let index = 1;

    $('.stackedit__html > *').each((pId, pEl) => {
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

function externalLinks() {
    $('.stackedit__html a:not([href^="#"])').each((id, el) => {
        const $el = $(el);
        if ($el[0].pathname === "/") return;
        $el.attr('target', '_blank');
    });
}

function frenchTypo() {
    // “” to «»
    document.body.innerHTML = document.body.innerHTML.replace(/“/g, '«&nbsp;').replace(/”/g, '&nbsp;»');

    // No orphan colon (' : ')
    document.body.innerHTML = document.body.innerHTML.replace(/ :/g, '&nbsp;:');

    // No orphan semicolon (' ;')
    document.body.innerHTML = document.body.innerHTML.replace(/ ;/g, '&nbsp;;');
}

function videos() {
    $('.video').each((id, el) => {
        const url = $(el).html();
        $(el).replaceWith('<video controls><source src="/video/' + url + '" type="video/mp4"></video>')
    });
}
