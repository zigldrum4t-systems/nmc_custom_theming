//import tealoium_events from "tealium_event.json";

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
    document.getElementById('content-vue') ? document.getElementById('content-vue').classList.add('content-translation', 'translation') : null;
    document.getElementById('view-toggle') ? document.getElementById('view-toggle').classList.add('view-toggle-translation') : null;
    document.getElementById('app-navigation') ? document.getElementById('app-navigation').classList.add('app-navigation-translation', 'translation') : null;
    document.getElementById('app-navigation-vue') ? document.getElementById('app-navigation-vue').classList.add('app-navigation-translation', 'translation') : null;

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
      labelElement.innerText = t('core', 'Add');

     if(ele){
       ele.appendChild(labelElement);
     }
  }

  

window.addEventListener('click',function(e){
  var targetElement = e.target || e.srcElement;
  
  if(targetElement.id=="select_alselect_all_filesl_files"){
    var utag_data = {
      wt_link_id: "content.checkbox.selectall",
      page_content_id : "files.list.select", // page name
      page_type : "files" // page type
      }
      
  }
  if(targetElement.innerHTML=="Upload file" || targetElement.innerHTML=="Datei hochladen"){
    var utag_data = {
      wt_link_id: "plus.button.upload",
      page_content_id : "files.list.select", // page name
      page_type : "files" // page type
      }
      utag.view(utag_data);
  }

  if(targetElement.innerHTML=="Password protect" || targetElement.innerHTML=="Passwortschutz"){
    var utag_data = {
      wt_link_id: "share.view.setting.password",
      page_content_id : "share.view.settings", // page name
      page_type : "files share" // page type
      }
      utag.view(utag_data);
  }


  if(targetElement.innerHTML=="Can edit" || targetElement.innerHTML=="Kann bearbeiten"){
    var utag_data = {
      wt_link_id: "share.view.setting.edit",
      page_content_id : "share.view.settings", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }


  if(targetElement.innerHTML=="Set expiration date" || targetElement.innerHTML=="Ablaufdatum setzen"){
    var utag_data = {
      wt_link_id: "share.view.setting.edit",
      page_content_id : "share.view.settings", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }

  if(targetElement.innerHTML=="File drop only" || targetElement.innerHTML=="Sammelbox"){
    var utag_data = {
      wt_link_id: "share.view.setting.droponly",
      page_content_id : "share.view.settings", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }

  
  
  if(e.target.innerHTML=="New folder" || e.target.innerHTML=="Neuer Ordner"){
    var utag_data = {
      wt_link_id: "plus.button.createfolder",
      page_content_id : "files.list.select", // page name
      page_type : "theme" // page type
      }
      utag.view(utag_data);
  }
  var title = $(targetElement).attr('title');
  if(title!='' && title!='undefined' && title!=undefined){
    
    if(title=="All Media"){
      var utag_data = {
        wt_link_id: "files.view.media.allmedia",
        page_content_id : "files.view.media.all", // page name
        page_type : "Media" // page type
        }
        utag.view(utag_data);
    }
    
    if(title=="My photos"){
      var utag_data = {
        wt_link_id: "content.checkbox.selectall",
        page_content_id : "files.view.media.myphotos", // page name
        page_type : "theme" // page type
        }
        utag.view(utag_data);
    }
    
    if(title=="My videos"){
      var utag_data = {
        wt_link_id: "content.checkbox.selectall",
        page_content_id : "files.view.media.myvideos", // page name
        page_type : "theme" // page type
        }
        utag.view(utag_data);
    }
    if(title=="Favorites"){
      var utag_data = {
        wt_link_id: "content.checkbox.selectall",
        page_content_id : "files.view.media.favorites",
        page_type : "theme" // page type
        }
        utag.view(utag_data);
    }
    if(title=="Shared with me"){
      var utag_data = {
        wt_link_id: "content.checkbox.selectall",
        page_content_id : "files.view.media.receivedshares", // page name
        page_type : "theme" // page type
        }
        utag.view(utag_data);
    }
    

  }

  if(targetElement.className=="status-buttons__primary primary"){
    var utag_data = {
      wt_link_id: "content.button.send",
      page_content_id : "share.SendTo", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }

  if(targetElement.className=="status-buttons__select"){
    var utag_data = {
      wt_link_id: "content.button.cancel",
      page_content_id : "share.SendTo", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }

  if(targetElement.className=="app-sidebar__close.icon-close"){
    var utag_data = {
      wt_link_id: "share.view.create.cancel",
      page_content_id : "share.view.create", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);
  }
  if(targetElement.className=="add-new-link-btn"){
    var utag_data = {
      wt_link_id: "share.view.create.newlink",
      page_content_id : "share.view.create", // page name
      page_type : "share" // page type
      }
      utag.view(utag_data);

  }
  if(targetElement.className!=="" && targetElement.className !=="active"  &&  targetElement.className !=="selected"){
    var elementClassname = targetElement.className; 
    if(elementClassname!==''){
      if(!elementClassname.includes('-menu-')){
  
        var eventClassName = targetElement.className; 
        var envent_class = eventClassName.split("nav-icon-");
        if(envent_class[0].includes('menu__trigger')){
          var utag_data = {
            wt_link_id: "top.bar.menu.search",
            page_content_id : "top.bar.menu", // page name
            page_type : "theme" // page type
            }
            utag.view(utag_data);
          }
  
         else if(envent_class[0].includes('emailmenu')){
            var utag_data = {
              wt_link_id: "top.bar.menu.emailcenter",
              page_content_id : "top.bar.menu", // page name
              page_type : "theme" // page type
              }
              utag.view(utag_data);
          }
          else if(envent_class[0].includes('displayname')){
            var utag_data = {
              wt_link_id: "content.checkbox.selectall",
              page_content_id : "Content.Button.NewFolder", // page name
              page_type : "NewFolder" // page type
            }
            utag.view(utag_data);
          }
          if(envent_class[0]!==""){
              var envent_class0 = envent_class[0].split("svg");
              if($.trim(envent_class0[0])=="favorites"){
                var utag_data = {
                  wt_link_id: "content.checkbox.selectall",
                  page_content_id : "left.menu.favorites", // page name
                  page_type : "theme" // page type
                  }
                  utag.view(utag_data);  
              }
          }

          if(envent_class[1]!==""){
              var envent_class1 = envent_class[1].split("svg");
              if($.trim(envent_class1[0])=="favorites"){
                var utag_data = {
                  wt_link_id: "left.menu.favorites",
                  page_content_id : "left.menu", // page name
                  page_type : "files" // page type
                  }
                utag.view(utag_data);
              }
              else if($.trim(envent_class1[0])=="files"){
                var utag_data = {
                  wt_link_id: "left.menu.allfiles",
                  page_content_id : "left.menu", // page name
                  page_type : "files" // page type
                  }
                  utag.view(utag_data);
                
              }
              else if($.trim(envent_class1[0])=="sharingout"){
                var utag_data = {
                  wt_link_id: "left.menu.sharesfromme",
                  page_content_id : "left.menu", // page name
                  page_type : "theme" // page type
                  }
                  utag.view(utag_data);
                  //alert("sharingout =" + utag_data);
              }
              else if($.trim(envent_class1[0])=="sharingin"){
                var utag_data = {
                  wt_link_id: "left.menu.sharesfromothers",
                  page_content_id : "left.menu", // page name
                  page_type : "theme" // page type
                  }
                  utag.view(utag_data);
              }
            }
      }
      else if(elementClassname.contains('menu-')){
      }
    }
  }
  else if(targetElement.attributes){
    if(targetElement.attributes.href.value.includes('apps/')){
      var envent_class = targetElement.attributes.href.value.split('apps/')
      if(envent_class[1]=="files/"){
        var utag_data = {
          wt_link_id: "top.bar.menu.myfiles",
          page_content_id : "top.bar.menu", // page name
          page_type : "top bar" // page type
          }
          utag.view(utag_data);
      }
      else if(envent_class[1]=="dashboard/"){
        var utag_data = {
          wt_link_id: "top.bar.menu.welcome",
          page_content_id : "top.bar.menu", // page name
          page_type : "top bar" // page type
          }
          utag.view(utag_data);
      }
      else if(envent_class[1]=="photos/"){
        var utag_data = {
          wt_link_id: "top.bar.menu.media",
          page_content_id : "top.bar.menu", // page name
          page_type : "top bar" // page type
          }
          utag.view(utag_data);
      }
      else if(envent_class[1]=="photos/videos"){
        var utag_data = {
          wt_link_id: "content.checkbox.selectall",
          page_content_id : "top.bar.menu.media", // page name
          page_type : "theme" // page type
          }
          utag.view(utag_data);
      }
    }
    else{
      if(targetElement.attributes.href.value=="/index.php/settings/user"){
        var utag_data = {
          wt_link_id: "top.bar.menu.userprofile",
          page_content_id : "top.bar.menu", // page name
          page_type : "theme" // page type
          }
          utag.view(utag_data);
      }
    }
  }
  else if(targetElement=="Object HTMLSpanElement"){
  }
  else if(targetElement && targetElement.id== 'sharingout'){
    }
 
  }); 