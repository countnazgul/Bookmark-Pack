var background_page = chrome.extension.getBackgroundPage();

chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    str = bookmarkTreeNodes[0];
    str = str.children;
    str = JSON.stringify(str);
    str = str.replace(/"title":/g, '"label":');
    treeData = JSON.parse(str);
    
    tree = $('#tree').niTree({treeData: treeData}),
    $log = $('#log');
    tree.niTree('collapseAll');

});

chrome.tabs.query({}, function(tabs) {
  tabs.forEach(function(tab){
      chrome.tabs.get(tab.id, function(details){
        if(details.title.length >= 55) {
          title = details.title.substring(0,55) + ' ...';
        } else {
          title = details.title;
        }
        $('#tabs').append('<input type="checkbox" id="copy" name="copy" class="opentabs" value="' + details.url +'">' + title + '<br/>');
      })
    });
});

$('#btn_checked_leafs').on('click', function(){
  if(activeTab === 'Bookmarks') {
    toPost = tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', ');
    if( toPost.length > 0) {
      $log.prepend(tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', '));
      toPost = toPost.split(',');
      links = [];
      for(i = 0; i < toPost.length; i++) {
        links.push(encodeURIComponent(toPost[i]));
      }
      SendData(links.toString());
    } else {
      $('#response').text('');
      $('#response').text('No  selections :(');
    } 
  } else {
    var checkedValues = $('.opentabs:checked').map(function() {
      return this.value;
    }).get();
    if( checkedValues.length > 0) {
      links = [];
      for(i = 0; i < checkedValues.length; i++) {
        links.push(encodeURIComponent(checkedValues[i]));
      }
      
      SendData(links.toString());  
    } else {
      $('#response').text('');
      $('#response').text('No  selections :(');
    }
  }
});

var activeTab = 'Bookmarks';

$.ionTabs("#tabs_1", {
      onChange: function(obj){
        activeTab = obj.tab;
    }
});

function SendData(toPost) {
  xhr = new XMLHttpRequest();
  xhr.open("POST", "http://146.185.148.8/new");
  xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
      if(response.error) {
        $('#response').text('');
        $('#response').text(response.error);
      } else {
        $('#response').text('');
        $('#response').append('<a id="shortlink" href='+ response.url +'  target="_blank">'+response.url+'</a>');
        if(document.getElementById("copy").checked) {
          background_page.copyToClipboard(response.url);
        }
      }
    }
  }
  xhr.send('data=' + toPost + '&key=703efa68d8874c63af18758149f403f4');
}
