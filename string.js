function stringLength(string) {
  if(string===""){
    return "String can't be empty"
  }
  else if(string.length>10){
    return "Length is more than 10"
  }
  else{
    return string.length;
  }
    
  }

  module.exports = stringLength;
