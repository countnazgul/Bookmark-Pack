function process_bookmark(bookmarks) {

    for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
        }

        if (bookmark.children) {
            process_bookmark(bookmark.children);
        }
    }
}

/*
function printBookmarks(id) {
 chrome.bookmarks.getChildren(id, function(children) {
    children.forEach(function(bookmark) {
      console.debug(bookmark.title);
      printBookmarks(bookmark.id);
    });
 });
}
*/

function printBookmarks(bookmarks) {
  bookmarks.forEach(function(bookmark) {
    console.debug(bookmark.id + ' - ' + bookmark.title + ' - ' + bookmark.url);
    if (bookmark.children)
      printBookmarks(bookmark.children);
  });
}

//chrome.bookmarks.getTree( process_bookmark );
chrome.bookmarks.getTree(function(bookmarks) {
  console.log(JSON.stringify(bookmarks));
  printBookmarks(bookmarks);
});



chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("listing bookmarks: " );
  chrome.bookmarks.getTree( process_bookmark );
});

/*var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

var projects = [];
var wholedata;
$.post( "http://tuna-optimal.codio.io:8080/getbyuser", { user: "John"})
    .done(function( data ) {
      data = JSON.parse(data);
      wholedata = data;
      for(i = 0; i < data.length; i ++)
      {
        projects.push(data[i].project);
      }
      
      projects = jQuery.unique( projects );
});



$('#scrollable-dropdown-menu .typeahead')
  .typeahead(null, {
      name: 'countries',
      displayKey: 'value',
      source: substringMatcher(projects),
        templates: {
                 empty: [
                  '<div id="notfound" class="empty-message"">no results found</div>'
                ]},
                 matcher: function(item) {
        console.log(item);
    }
        })
  .on('typeahead:selected', onAutocompleted);

function onAutocompleted($e, datum) {
  console.log('autocompleted');
  console.log(datum);
  drawLinks(datum);
}

function onSelected($e, datum) {
  console.log('selected');
  drawLinks(datum);
}

function onCursorChanged($e, datum) {
  console.log('selected');
  drawLinks(datum);
}

function drawLinks(project) {
  $('#links').clear;
  for(i = 0; i < wholedata.length; i++) {
    if(wholedata[i].project = project) {
      console.log(wholedata[i]);
      $('#links').append(wholedata[i].link + '</br>');
    }
  }
}

function test() {
  console.log('test');
}


chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    //console.log(tablink);
    document.getElementById('currentTabUrl').textContent = tablink;
});


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('send');
    // onClick's logic below:
    link.addEventListener('click', function() {
    $.post( "http://tuna-optimal.codio.io:8080/add", { user: "John", project: "2pm", 'link' : document.getElementById('currentTabUrl').textContent })
      .done(function( data ) {
        console.log( "Data Loaded: " + data );
  });
    });
});
*/