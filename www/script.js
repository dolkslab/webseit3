
var a =1;
function getWidth(){
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function getHeigth(){
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
function button1(){

  a++;
  document.getElementById("demo").innerHTML = a;
}
function button2(){
  a--;
  document.getElementById("demo").innerHTML = a;
  }

function button3(){
  console.log(w + " " + h)
  console.log("ik heb aids");
}

function kaas (){
  console.log("ik heb aids");
}



console.log("kaas");

var n_menucards = 6; //het aantal menukaarten aan de linkerkant. Het programma moet weten hoeveel erzijn zodat het weet welke de laatste is.
function menu_card_in(elementType, elementID){
  

  document.getElementById(elementType+"-"+(elementID)).style.height = String(Math.round(getHeigth()*0.1414*1.3))+"px";
  document.getElementById(elementType+"-"+(elementID)).style.width = 200+"%";

  if((elementID-1) !=0 && (elementID+1)<=n_menucards){
    document.getElementById(elementType+"-"+(elementID-1)).style.height = String(Math.round(getHeigth()*0.1414*0.85))+"px";
    document.getElementById(elementType+"-"+(elementID+1)).style.height = String(Math.round(getHeigth()*0.1414*0.85))+"px";
  }
  else if((elementID-1) !=0 && (elementID+1)>n_menucards){
    document.getElementById(elementType+"-"+(elementID-1)).style.height = String(Math.round(getHeigth()*0.1414*0.7))+"px";
  }
  else if((elementID+1)<=n_menucards && (elementID-1)==0){
    document.getElementById(elementType+"-"+(elementID+1)).style.height = String(Math.round(getHeigth()*0.1414*0.7))+"px";
  }

}


function menu_card_out(elementType, elementID){
  document.getElementById(elementType+"-"+(elementID)).style.height = String(Math.round(getHeigth()*0.1414))+"px";
  document.getElementById(elementType+"-"+(elementID)).style.width = 100+"%";

  if(elementID-1 !=0 && elementID+1<=n_menucards){
    document.getElementById(elementType+"-"+(elementID-1)).style.height = String(Math.round(getHeigth()*0.1414))+"px";
    document.getElementById(elementType+"-"+(elementID+1)).style.height = String(Math.round(getHeigth()*0.1414))+"px";
    }
  else if(elementID-1 !=0 && elementID+1>n_menucards){
    document.getElementById(elementType+"-"+(elementID-1)).style.height = String(Math.round(getHeigth()*0.1414))+"px";
    }
  else if(elementID+1<=n_menucards && elementID-1==0){
    document.getElementById(elementType+"-"+(elementID+1)).style.height = String(Math.round(getHeigth()*0.1414))+"px";
  }

}

function search_bar_in(){
  document.getElementById("search-bar").style.width = 100*(4/12)+"%";
  document.getElementById("top-bar").style.width = 100*(7/12)+"%";
}

function search_bar_out(){
  document.getElementById("search-bar").style.width = 100*(1/12)+"%";
  document.getElementById("top-bar").style.width = 100*(10/12)+"%";
  
}



