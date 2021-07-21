(function($) {

    $.fn.textWildCardArea = function() {

        let parentSelector = function($textArea) {
            return 'ul[data-toggle="tag"][data-target="#' + $textArea.attr('id') + '"] li ';
        }

        const addTagToTextArea = function($textArea, tag) { $textArea.val($textArea.val() + tag); }
        const removeTagToTextArea = function($textArea, tag) { $textArea.val($textArea.val().toLowerCase().replaceAll(tag.toLowerCase(), '')); }

        const getTags = function($textArea) {
            return $(parentSelector($textArea) + '[data-tag]')
                .get()
                .map(function(x) { return x.dataset.tag; });
        }

        const activeTag = function($tag) {
            $tag.classList.remove('tag--unavailable');
            $tag.classList.add('tag--available');
        }
        const inactiveTag = function($tag) {
            $tag.classList.remove('tag--available');
            $tag.classList.add('tag--unavailable');
        }
        const toogleTagState = function($textArea) {

            const tags = getTags($textArea);

            tags.forEach(function(tag) {

                if ($textArea.val().toLowerCase().indexOf(tag.toLowerCase()) == -1) {
                    const $tag = $(parentSelector($textArea) + '.tag.tag--unavailable[data-tag="' + tag + '"');
                    $tag[0] && activeTag($tag[0]);
                } else {
                    const $tag = $(parentSelector($textArea) + '.tag.tag--available[data-tag="' + tag + '"');
                    $tag[0] && inactiveTag($tag[0]);
                }
            });
        }

        const bindUiEvents = function($textArea) {

            $(parentSelector($textArea)).on('click', '[data-tag]', function(e) {
                const el = e.currentTarget;

                if (el.classList.contains('tag--available')) {
                    addTagToTextArea($textArea, el.innerHTML);
                    inactiveTag(el);
                    return;
                }

                if (el.classList.contains('tag--unavailable')) {
                    removeTagToTextArea($textArea, el.innerHTML);
                    activeTag(el);
                }
            });

            $textArea.keyup(function(e) {
                toogleTagState($textArea);
            });
        }

        this.each(function() {
            var $textArea = $(this);

            bindUiEvents($textArea);
            toogleTagState($textArea);
        });

        return this;
    };

})(jQuery);