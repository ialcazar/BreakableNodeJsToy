var urlUtils = exports;

var removeLastSlash = function(msg){
  var msgLength =msg.length;
   if(msg.charAt(msgLength-1) ==="/"){
    msg = msg.slice(0,msgLength-1);
  }

  return msg;
};

urlUtils.removeLastSlash = removeLastSlash;