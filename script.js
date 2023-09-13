var istatus=document.querySelector("h5")

var btn=document.querySelector("#add")
var check = 0
btn.addEventListener("click",function(){
    if(check == 0){
  istatus.innerHTML="Friends"
  istatus.style.color="green"
  btn.innerHTML="Remove Friends" 
  check=1
}
  else{
    istatus.innerHTML="Strangers"
  istatus.style.color="red"
  btn.innerHTML = "Add Friends" 
  check=0

  }

})
