//Initializing the variables

const uipreviousresult = document.getElementById('previousresult');
const uiinputfield = document.getElementById("inputfield");
const uisquareroot = document.querySelector(".input .commands .squareroot");
const uipi = document.querySelector(".input .commands .pi");
const uiclearall = document.querySelector(".clearall");
const uidelete = document.querySelector(".delete");
const ui7 =document.querySelector(".seven");
const ui8 =document.querySelector(".eight");
const ui9 =document.querySelector(".nine");
const ui4 =document.querySelector(".four");
const ui5 =document.querySelector(".five");
const ui6 =document.querySelector(".six");
const ui3 =document.querySelector(".three");
const ui2 =document.querySelector(".two");
const ui1 =document.querySelector(".one");
const ui0 =document.querySelector(".zero");
const uidot =document.querySelector(".dot");
const uiequal =document.querySelector(".equal");
const uisum=document.querySelector('.sum');
const uiminus=document.querySelector('.minus');
const uimultiple=document.querySelector('.multiple');
const uidivide=document.querySelector('.divide');

//Adding values to the buttons

ui0.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="0"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${0}`;
  }  
});
ui1.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="1"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${1}`;
  }  
});
ui2.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="2"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${2}`;
  }  
});
ui3.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="3"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${3}`;
  }  
});
ui4.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="4"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${4}`;
  }  
});
ui5.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="5"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${5}`;
  }  
});
ui6.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="6"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${6}`;
  }  
});
ui7.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="7"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${7}`;
  }  
});
ui8.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="8"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${8}`;
  }  
});
ui9.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="9"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${9}`;
  }  
});
uidot.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="."; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${"."}`;
  }  
});

//Clear,pi

uiclearall.addEventListener("click",function(){
  uipreviousresult.value=uiinputfield.value;
  uiinputfield.value='';
})

uipi.addEventListener("click",function(){
  if(uiinputfield.value === ''){
    uiinputfield.value="3.14"; 
  }else{
    uiinputfield.value=`${uiinputfield.value}${"3.14"}`;
  } 
});

//Delete
uidelete.addEventListener("click",function(){
  if(uiinputfield.value ===""){
    uiinputfield.value="";
  }else{
    let num=uiinputfield.value;
    num =num.toString();
    num=num.slice(0, -1);
    num=parseInt(num);
    console.log(num);
    if(num===''){
      uiinputfield.value="";
    }else{
      uiinputfield.value = num;
    }
  }
})

//Math function functionality

//sum
uisum.addEventListener("click",function(){
  if(uiinputfield.value===''){
    uiinputfield.value='';
  }else{
    uiinputfield.value=`${uiinputfield.value}${'+'}`;
  }
})

//minus
uiminus.addEventListener("click",function(){
  if(uiinputfield.value===''){
    uiinputfield.value='';
  }else{
    uiinputfield.value=`${uiinputfield.value}${'-'}`;
  }
})

//multiply
uimultiple.addEventListener("click",function(){
  if(uiinputfield.value===''){
    uiinputfield.value='';
  }else{
    uiinputfield.value=`${uiinputfield.value}${'*'}`;
  }
})

//divide
uidivide.addEventListener("click",function(){
  if(uiinputfield.value===''){
    uiinputfield.value='';
  }else{
    uiinputfield.value=`${uiinputfield.value}${'/'}`;
  }
})

//sqrt
uisquareroot.addEventListener("click",function(){
  if(uiinputfield.value !=''){
    let base=uiinputfield.value;
    uiinputfield.value=`${Math.pow(base,1/2)}`;
  }
})


//equal

uiequal.addEventListener("click",function(){
  let exp = uiinputfield.value;
  if(exp){
    uiinputfield.value=eval(exp);
  }
})