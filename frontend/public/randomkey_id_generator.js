function main(){
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
var key=makeid();
var id=makeid();
document.getElementById("voterid").value=id;
document.getElementById("voterkey").value=key;
}

