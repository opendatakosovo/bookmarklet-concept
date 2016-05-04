
function addCSS(url){
  var headID = document.getElementsByTagName("head")[0];
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = url;
  cssNode.media = 'screen';
  headID.appendChild(cssNode);
}

function toggleItem(id){
  var item = document.getElementById(id);
  if(item){
    if ( item.style.display == "none"){
      item.style.display = "";
    }
    else{
      item.style.display = "none";
    } 
  }
}

(function(){

  var iframe_url = "bookmarklet-form.html";
  addCSS("css/custom-css.css");
 
  var div = document.createElement("div");
  div.id = "google_sheets_bookmarklet_id";
  
  var str = "";
  str += "<table id='google_sheets_bookmarklet_table' valign='top' width='570' cellspacing='0' cellpadding='0'><tr><td width ='550' height='80'>";
  str += "<iframe frameborder='0' scrolling='no' name='google_sheets_bookmarklet_iframe' id='google_sheets_bookmarklet_iframe' src='" + iframe_url + "' width='550px' height='290px' style='textalign:right; backgroundColor: white;'></iframe>";
  str += "</td><td onClick='toggleItem(\"google_sheets_bookmarklet_id\");' title='click to close window' valign='top' align='center' width='20px'>";
  str += "<a href='javascript:void(0);' style='width:100%; text-align: middle; color: #FF0000;'>X</a>";
  str += "</td></tr></table>";
  
  div.innerHTML = str;
  

  document.body.insertBefore(div, document.body.firstChild);
})()

