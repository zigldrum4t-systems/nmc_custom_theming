window.onload = function() {
    brandBarAnimation();
    breadcrumb();
};


function brandBarAnimation() {
    setTimeout(function() {
            document.getElementsByClassName('MenuWrapperParent')[0].classList.add('brand-bar-translation', 'translation');
            document.getElementById('controls').classList.add('controls-translation', 'translation');
            document.getElementById('view-toggle').classList.add('view-toggle-translation', 'translation');
            document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation', 'translation');
        }, 6000)
        // let workSpaceelement = document.getElementById('showRichWorkspacesToggle');
        // let workSpaceevent = new Event('change');
        // workSpaceelement.dispatchEvent(workSpaceevent);
        // document.getElementById('showRichWorkspacesToggle').checked = true;
        // document.getElementById('showRichWorkspacesToggle').nextElementSibling.innerHTML = 'Show folder info text';

    setTimeout(function() {
        document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate', 'translation');
        document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified', 'translation');
    }, 6500);

}

function breadcrumb() {
    document.getElementById('app-navigation-toggle').onclick = function() {
        setTimeout(function() {
            var element = document.getElementById('app-content');
            if (element.getAttribute('style') === null) {
                console.info('null');
            } else {
                console.info('not null');
            }
        }, 100);
    }
}