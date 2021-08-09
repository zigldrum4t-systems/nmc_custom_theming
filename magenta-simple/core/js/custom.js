window.onload = function() {
    brandBarAnimation();
};

function brandBarAnimation() {
    setTimeout(function() {
        document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate');
        document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified');
        document.getElementsByClassName('brandbar')[0].classList.add('brand-bar-translation');
        document.getElementById('controls').classList.add('controls-translation', 'translation');
        document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation');
        document.getElementsByClassName('full-width-breadcrumb')[0].classList.add('breadcrumb-translation');
    }, 3000);
    // let workSpaceelement = document.getElementById('showRichWorkspacesToggle');
    // let workSpaceevent = new Event('change');
    // workSpaceelement.dispatchEvent(workSpaceevent);
    // document.getElementById('showRichWorkspacesToggle').checked = true;
    // document.getElementById('showRichWorkspacesToggle').nextElementSibling.innerHTML = 'Show folder info text';
}