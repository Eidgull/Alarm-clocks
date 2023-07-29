const SelectMune=document.querySelectorAll('select');
const timeBox=document.getElementById('time');
const AlereBtn=document.getElementById('myBtn');
const content=document.getElementById('contand');



let AlearTime ;
let setAlram ='noset';

let getsonds= new Audio('music/ring.mp3')


for(let i=23; i>=0 ; i--){
   
  i = i < 10 ? '0'+ i : i;

  let Optaion=`<option value="${i}">${i}</option>`
  let MYselect=SelectMune[0].value;
  SelectMune[0].firstElementChild.insertAdjacentHTML("afterend",Optaion)

}


 
for(let i=59; i>=0 ; i--){
  i = i < 10 ? '0'+ i : i;
  let Optaion=`<option value="${i}">${i}</option>`
  let MYselect=SelectMune[1].value;
  SelectMune[1].firstElementChild.insertAdjacentHTML("afterend",Optaion)

}

setInterval(()=>{  
 
  let date =new Date();
  let  h=date.getHours();
  let  m=date.getMinutes();
  let  s=date.getSeconds();
  

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
   timeBox.innerHTML=`${h}:${m}:${s}`;
   
   if(AlearTime===`${h}:${m}`){

    getsonds.play('music/ring.mp3');
    getsonds.loop=true;
   }
  
   
},1000)


AlereBtn.addEventListener('click',()=>{
   AlearTime=`${SelectMune[0].value}:${SelectMune[1].value}`

    if(AlearTime.includes('Hour') || AlearTime.includes('Munite')){
    alert('زمان هشدار را به درستی وارد کنید ')
    }

    chickstate(setAlram);

}) 


function chickstate(state){
   
  if(state=='noset'){
    content.classList.add('disable');
    AlereBtn.innerText="clear Alarm";
   setAlram='set'
  }else{

    content.classList.remove('disable');
    AlearTime='';
    
    getsonds.pause();
  setAlram='noset'
    AlereBtn.innerText="set Alarm";

  }
  

}











