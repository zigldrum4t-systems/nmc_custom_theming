window.onload = function () {
  brandBarAnimation();
  guestInfoText();
  searchIconLabel();
  searchInputLabel();
  appendFolderName();
  domElementsobserver();
  fileActionButtonSettings();
  breadcrumbAddLabel();
};

function brandBarAnimation() {
  setTimeout(function () {
    document.getElementsByClassName('header-brandbar')[0] ? document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate') : null;
    document.getElementsByClassName('logo-area__inner')[0] ? document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified') : null;
    document.getElementsByClassName('brandbar')[0] ? document.getElementsByClassName('brandbar')[0].classList.add('brand-bar-translation') : null;
    document.getElementById('app-navigation-toggle') ? document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation') : null;
    var ele = document.getElementsByClassName('full-width-breadcrumb');
    for (let i = 0; i < ele.length; i++) {
      ele[i] ? ele[i].classList.add('breadcrumb-translation') : null;
    }
    document.getElementById('content') ? document.getElementById('content').classList.add('content-translation', 'translation') : null;
    document.getElementById('view-toggle') ? document.getElementById('view-toggle').classList.add('view-toggle-translation') : null;
    document.getElementById('app-navigation') ? document.getElementById('app-navigation').classList.add('app-navigation-translation', 'translation') : null;

  }, 3000);

  var richWorkSpace = document.getElementById('showRichWorkspacesToggle');
  if (richWorkSpace) {
    richWorkSpace.checked = true;
    richWorkSpace.nextElementSibling.innerHTML = t('core', 'Show folder info text');
    richWorkSpace.dispatchEvent(new Event('change'));
  }

  document.getElementById('recommendations-setting-enabled') ?
    document.getElementById('recommendations-setting-enabled').classList.add('hide') : null;
}


function guestInfoText() {
  var ele = document.getElementById('closePopUp');
  if (ele) {
    ele.onclick = function () {
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
    ele.onclick = function () {
      var labelElement = document.createElement('label');
      labelElement.className = 'search-input-label';
      labelElement.innerText = t('core', 'Search files, folders or settings …');
      document.getElementsByClassName('unified-search__form-input')[0] ?
      document.getElementsByClassName('unified-search__form-input')[0].required = true : null;
      document.getElementsByClassName('unified-search__form')[0] ?
      document.getElementsByClassName('unified-search__form')[0].appendChild(labelElement) : null;
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

function domElementsobserver() {
  var domObserver = new MutationObserver(function (domMutations) {
    domMutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        var ele = [].some.call(mutation.addedNodes, function (e) {
          if (e && e.classList) {
            return e.classList.contains('oc-dialog');
          } else {
            return false;
          }
        });
        if (ele && document.getElementById('picker-filestable')) {
          document.getElementById('picker-filestable').classList = '';
          document.getElementById('picker-filestable').classList.add('filelist');
        }
      }
    });
  });

  domObserver.observe(document.body, { attributes: true, childList: true, characterData: true });
}

function fileActionButtonSettings() {
  setTimeout(function () {
  var ele = document.querySelectorAll('.filesSelectMenu ul li, .filesSelectionMenu ul li');
      for(var i=0; li=ele[i]; i++) {
        if(li.className === 'item-toggleSelectionMode'){
          li.parentNode.removeChild(li);
        }
        else if(li.className === 'item-tags'){
          li.parentNode.removeChild(li);
        }
      }
    }, 200);
}

function breadcrumbAddLabel() {
  var ele = document.querySelectorAll('#controls .actions.creatable a')[0];
  var labelElement = document.createElement('label');
      labelElement.className = 'add-label';
      labelElement.innerText = t('app', 'Add');

     if(ele){
       ele.appendChild(labelElement);
     }
  }
