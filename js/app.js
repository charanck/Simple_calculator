const del = document.getElementById("delete");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const dot = document.getElementById("dot")
const equal = document.getElementById("equal");
const multiply = document.getElementById("multiply");
const allclear = document.getElementById("allclear");
const current = document.getElementById("current");
const previous = document.getElementById("previous");

// input registration

function valueEntry(value){
  if (typeof value == "string"){
    let a = current.value
    val=a.toString()
    current.value = a + value
    return
  }
  let a = current.value
  val=a.toString()
  let b = value.toString()
  current.value = a + b
}

zero.addEventListener("click",function(){valueEntry(0)});
one.addEventListener("click",function(){valueEntry(1)});
dot.addEventListener("click",function(){valueEntry('.')});
two.addEventListener("click",function(){valueEntry(2)});
three.addEventListener("click",function(){valueEntry(3)});
four.addEventListener("click",function(){valueEntry(4)});
five.addEventListener("click",function(){valueEntry(5)});
six.addEventListener("click",function(){valueEntry(6)});
seven.addEventListener("click",function(){valueEntry(7)});
eight.addEventListener("click",function(){valueEntry(8)});
nine.addEventListener("click",function(){valueEntry(9)});
plus.addEventListener("click",function(){valueEntry('+')});
minus.addEventListener("click",function(){valueEntry('-')});
multiply.addEventListener("click",function(){valueEntry('*')});
divide.addEventListener("click",function(){valueEntry('/')});


// All clear
allclear.addEventListener("click",function(){
  if(current.value == 0){
    return
  }
  previous.value = current.value
  current.value = 0
})

// Delete
del.addEventListener("click",function(){
  let out=''
  for(i=0;i<current.value.length-1;i++){
    str = current.value[i].toString()
    out += str
  }
  current.value = out;
})

//Calculations
equal.addEventListener("click",function(){
  current.value = eval(current.value)
})



