

 let title = document.getElementById("title");
 window.addEventListener("online", set);
 window.addEventListener("offline", set);

 function set(){
     if(navigator.onLine){
         title.innerHTML="You Are online";
         title.style.color="green";
     }
     else{
         title.innerHTML="You Are offline";
         title.style.color="red";
     }
 }

 set();