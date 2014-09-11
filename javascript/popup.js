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

$('#btn_checked_leafs').on('click', function(){
    toPost = tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', ');
    if( toPost.length > 0) {
      $log.prepend(tree.niTree('get', {selected: true, leafsOnly: true, attributeToSelect: 'url'}).join(', '));
      SendData(toPost.split(','));
    } else {
      $('#response').text('');
      $('#response').text('No  selections :(');
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
        $('#response').append('<a href='+ response.url +'  target="_blank">'+response.url+'</a>');
      }
    }
  }
  xhr.send('data=' + toPost + '&key=703efa68d8874c63af18758149f403f4');
}
