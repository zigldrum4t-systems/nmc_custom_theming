window.onload = function() {
    brandBarAnimation();
    guestInfoText();
    searchIconLabel();
    // searchInputLabel();
    appendFolderName();
};

function brandBarAnimation() {
    setTimeout(function() {
        document.getElementsByClassName('header-brandbar')[0] ? document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate') : null;
        document.getElementsByClassName('logo-area__inner')[0] ? document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified') : null;
        document.getElementsByClassName('brandbar')[0] ? document.getElementsByClassName('brandbar')[0].classList.add('brand-bar-translation') : null;
        document.getElementById('app-navigation-toggle') ? document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation') : null;
        var ele = document.getElementsByClassName('full-width-breadcrumb');

        for (let i = 0; i < ele.length; i++) {
            ele[i] ? ele[i].classList.add('breadcrumb-translation') : null;
        }


    }, 3000);
    // let workSpaceelement = document.getElementById('showRichWorkspacesToggle');
    // let workSpaceevent = new Event('change');
    // workSpaceelement.dispatchEvent(workSpaceevent);
    // document.getElementById('showRichWorkspacesToggle').checked = true;
    // document.getElementById('showRichWorkspacesToggle').nextElementSibling.innerHTML = 'Show folder info text';
}


function guestInfoText() {
    var ele = document.getElementById('closePopUp');
    if (ele) {
        ele.onclick = function() {
            document.getElementsByClassName('content-dialog') ?
                document.getElementsByClassName('content-dialog')[0].classList.add('hide') : null;
            return false;
        }
    }
}

function searchIconLabel() {
    var spanElement = document.createElement('span');
    spanElement.className = 'menu-search-text';
    spanElement.innerText = 'Search';
    document.getElementsByClassName('header-menu__trigger')[0] ?
        document.getElementsByClassName('header-menu__trigger')[0].appendChild(spanElement) : null;
}

function searchInputLabel() {
    var ele = document.getElementsByClassName('header-menu__trigger')[0];
    if (ele) {
        ele.onclick = function() {
            var spanElement = document.createElement('span');
            spanElement.className = 'search-input-label';
            spanElement.innerText = 'Search Apps, Files, Comments, Contacts, Events, Tasks, Settings …';
            document.getElementsByClassName('unified-search__form')[0] ?
                document.getElementsByClassName('unified-search__form')[0].appendChild(spanElement) : null;
        }
    }
}

function appendFolderName() {
    var ele = document.getElementsByClassName('guest-emptycontent')[0];
    if (ele) {
        var folderName = ele.firstElementChild.getAttribute('data-value');
        var emptyElement = document.getElementById('emptycontent');
        emptyElement.getElementsByClassName('folder-name')[0] ?
            emptyElement.getElementsByClassName('folder-name')[0].innerText = folderName : null;
    }
}