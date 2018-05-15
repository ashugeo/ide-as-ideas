let refs = {};

$(document).ready(() => {
    // Load references
    $.getJSON('./refs.json', (data) => {
        refs = data;
        parseVideos();
        parseReferences();
        parseSidenotes();
        externalLinks();

        if ($('html').attr('lang') === 'fr') {
            frenchTypo();
        }
    });

    autoNightMode();
});

$(document).on('click', 'a', (e) => {
    const $el = $(e.currentTarget);

    if ($el.attr('id') && $el.attr('id').indexOf('fnref') > -1) {
        return false;
    } else if ($el.hasClass('footnote-backref')) {
        return false;
    }
});

let target = [{id: ''}];
let newTarget;

$(window).on('scroll', (e) => {
    $('h1, h2, h3').each((id, el) => {
        const $el = $(el);
        if ($el.offset().top - 10 > window.scrollY) {
            return;
        }
        newTarget = $el;
    });

    if (newTarget && [0].id !== target[0].id) {
        target = newTarget;
        $('.stackedit__toc a.active').removeClass('active');
        $('.stackedit__toc a[href="#' + target[0].id + '"]').addClass('active');
    }
})

// $(document).on('click', '.stackedit__toc a', (e) => {
//     const $el = $(e.currentTarget);
//     const $anchor = $($el.attr('href'));
//     $('html, body').animate({scrollTop: $anchor.offset().top}, 500);
//     return false;
// });

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

$(document).on('click', '.ctrl div', (e) => {
    const $el = $(e.currentTarget);
    const tool = $el.attr('data-tool');

    if (tool === 'toc') {
        $('.stackedit__left').toggleClass('open');
    } else if (tool === 'smaller' || tool === 'bigger') {
        let size = parseInt($('body').css('font-size'));
        size += tool === 'bigger' ? 1 : -1;
        size = Math.min(Math.max(size, 12), 24);
        $('body').css('font-size', size);
    } else if (tool === 'mode') {
        $('body').toggleClass('dark');
    }
});

function parseReferences() {
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

function parseSidenotes() {
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
        if ($el[0].pathname === "/ide-as-ideas/") return;
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

    // No orphan question mark (' ?')
    document.body.innerHTML = document.body.innerHTML.replace(/ \?/g, '&nbsp;?');
}

function parseVideos() {
    $('.video').each((id, el) => {
        const $el = $(el)
        const url = $el.html();
        $el.replaceWith('<video class="' + ($el.hasClass('selected') ? 'selected' : '') + '" controls><source src="video/' + url + '" type="video/mp4"></video>')
    });
}

function autoNightMode() {
    const time = new Date().getHours();
    if (time < 7 || time > 21) {
        $('body').addClass('dark');
        $('.auto-dark').addClass('visible');
    }
}

$(document).on('click', '.auto-dark .close', () => {
    $('.auto-dark').removeClass('visible');
});

$(document).on('click', '.auto-dark .back-light', () => {
    $('body').removeClass('dark');
    $('.auto-dark').removeClass('visible');
    return false;
});
