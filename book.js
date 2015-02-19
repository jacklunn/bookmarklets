(function(){

  // the minimum version of jQuery we want
  var v = "1.3.2";

  var dict = {"obama":"barack"};

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }

  function handleText(textNode, dict) {
    window.alert(dict['obama']);
    var text = textNode.nodeValue;
    var offset, newNode;
    for(var entry in dict){
      console.log(entry);
    }
  }

  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      handleText($('body')[0], dict);
    })();
  }

})();
