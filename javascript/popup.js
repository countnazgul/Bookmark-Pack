//var treeData = TreeData();
//console.log(treeData);

var treeData;
chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    str = bookmarkTreeNodes;
    str = JSON.stringify(str);
    str = str.replace(/"title":/g, '"label":');
    treeData = JSON.parse(str);
    
    tree = $('#tree').niTree({treeData: treeData}),
    $log = $('#log');
    tree.niTree('collapseAll');
});

$('#btn_checked_leafs').on('click', function(){
    $log.prepend('[' + tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', ') + ']\n');
    toPost =tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', ');
    SendData(toPost);
});


function SendData(toPost) {
  xhr = new XMLHttpRequest();
  xhr.open("POST", "http://tuna-optimal.codio.io:8080/new");
  xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
      if(response.error) {
        $('#response').text(response.error);
      } else {
        $('#response').append('<a href='+ response.url +'  target="_blank">'+response.url+'</a>');
      }
    }
  }
  xhr.send('data=' + toPost);
}

