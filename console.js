// const para=document.getElementsByClassName9('para')
// para2[0].textcontent="this is now updated paragraph"
// para2[1].style.color="green"
// console.log(para)

// const para2=document.queryselectoeAll('para')
// para2[0].textcontent="this is now updated paragraph"
// para2[1].style.color="green"
// console.log(para2)
// para2.foreach((ele)=>console.log(ele.textcontent))

// const para=document.getElementById("myPara");
// para.style.color="blue";
// console.log(para)

// const para=document.getElementsByClassName("myPara")
// para[0].textContent="Hello World"
// para[1].style.color="green"
// console.log(para)

// const para2=document.querySelectorAll(".myPara")
// para2.[0].textContent="Hello World"
// para2.[1].style.color="pink"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContent))    


// const para=document.querySelector(".myPara")
// para.style.color="purple"
// console.log(para)


// const para2=document.querySelectorAll(".myPara")
// para2[0].innerText="Hello World"
// para2[1].style.color="orange"
// para2[1].innerHTML="<b>Welcome to JavaScript</b>"
// console.log(para2)

// const button=document.querySelector('button')

// button.classList.add('btn')

// function message(){
//     alert("You have clicked the button")
// }
// button.addEventListener('click',message)
// button.removeEventListener('click',message)

// const button=document.querySelector('#btn')
// const button2=document.querySelector('#stop')

// button.addEventListener('click',message)

// button2.addEventListener('click',function(){
//     button2.removeEventListener('click',message)
// })


// const btn=document.querySelector("#btn")
// btn.addEventListener('keydown',function(event){
//     console.log(event.key)
// })

// btn.addEventListener('Keyup',function(event){
//     console.log(event.key)
// })

// / Adding Event Listeners and Manipulating Classes


// const button = document.querySelector('button')
// const button2 = document.querySelector('#btn')

// button2.addEventListener('click',function(){

//     button.classList.add('btn')
// })


//  Using ClassList to Manipulate Classes

// const button = document.querySelector('button')

// button.classList.add('btn')
// button.classList.remove('btn')
// button.classList.toggle('btn') // adds if not present, removes if present


// function message(){
//     alert("You have clicked the button.")
// }

// button.addEventListener('click', message)
// button.removeEventListener('click', message)


// EXAMPLE: Click Event with Alert and Stop Remove Event Listener

// const button = document.querySelector('#btn')
// const button2 = document.querySelector('#stop')

//  function message(){
//          alert("You have clicked the button.")
// }
// button.addEventListener('click', message)

// button2.addEventListener('click', function(){
//     button.removeEventListener('click', message)
// })


// Event Object Example

// const button3 = document.querySelector('#btn')
// const button4 = document.querySelector('#stop')

//  function message(Event){
//          alert("You have clicked the button.")
//          console.log(Event)
// }
// button3.addEventListener('click', message)

// button4.addEventListener('click', function(){
//     button3.removeEventListener('click', message)
// })


// Keyboard Event Example

// const btn = document.querySelector('#btn')
// // btn.addEventListener('keydown', function(event){     // when key is pressed
// //     console.log(event.key)
// // })
// btn.addEventListener('keyup', function(event){    // when key is released 
//     console.log(event.key)
// })

// const handlesubmit=(event)=>{
//     event.preventDefault()
//     console.log("form submitted")
// }
// const form=document.querySelector('form')
// form.addEventListener('submit',handlesubmit)

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")

// btn.addEventListener("click",function())

// console.log("First Line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second Line") 

// setTimeout(()=>{
//     alert("Alert after 3 sec!")
// },3*1000)

// setInterval(()=>{
//     console.log("Hello students")
// },1000)


// const timerID=setInterval(()=>{
//     console.log("Hello students")
// },1000)

// setTimeout(()=>{
//     clearInterval(timerID)
// },10*1000)

// let a = 2
// const timerID=setInterval(()=>{
//     console.log(a)
// },1000)

// setTimeout(()=>{
//     clearInterval(timerID)
// },10*1000)

// let count = 1;

// const id=setInterval(()=>{
//     if(count===10)clearInterval(id)
//         console.log(count)
//     count+=1
// },1000)


// console.log("First Line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },0)
// console.log("Second Line") 

// function print(){  
//     console.log("Hello students!!")
// }

// function greet(num){ 
//     console.log("Welcome to my class!!,num")
//     num()
// }

// greet(print)

// function print(){  
//     console.log("Hello students!!")
// }

// function greet(num){ 
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside Setimeout")
//         let firstNAme="Alex"
//         num(firstNAme)
//     },2000);
// }

// greet(print)

// function print(name){  
//     console.log("Hello students!!",name)
// }

// function greet(num){ 
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside Setimeout")
//         let firstNAme="Alex"
//         num(firstNAme)
//     },2000);
// }

// greet(print)

// console.log("Starting homework...")

// setTimeout(() =>{
//     console.log("homework done!");
//     console.log("Starting dinner...");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("Getting ready to go out...");

//             setTimeout(() => {
//                 console.log ("going to the playground!");
//             },1000); //after dinner
//         }, 1500);// dinner time 
//     }, 2000) // homework time

// function finishHomework(callback){
//     console.log("starting homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("starting dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     },1500);
// }

// function goToPlayground(){
//     console.log("going to the playground!");
// }

// finishHomework (() => {
//     eatDinner(() => {
//         goToPlayground();
//     });

// });

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click',(e)=> {
//     e.preventDefault()
//     const li=document.createElement('li')
//     li.innerText=input.value
//     lists.appendChild(li)
//     input.value=""
// })

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click',(e)=> {
//     e.preventDefault()
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"
//     li.innerText=input.value

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener('click', () => {
//         lists.removeChild(li)
//     })
//     input.value=""
// })

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click',(e)=> {
//     e.preventDefault()
//     if(input.value===""){
//         alert("Enter task")
//         return
//     }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"
//     li.innerText=input.value

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener('click', () => {
//         lists.removeChild(li)
//     })
//     input.value=""
// })

// const p=new Promise(function(resolve,reject){
//     // resolve()
//     // reject()
//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve({name: "alex", age: 30})
//         }else{
//             reject("network issues")
//         }
//     },5000)
// })

// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally block")
// })

// console.log(p)

// function doHomework(){
//     const p= new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if (done){
//                 console.log("homework is done")
//                 resolved("homework complete")
//             }else{
//                 reject("Homework is not done")
//             }
//         },5000)
//     })
//     return p
// }

// function eatDinner(){
//   const p= new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if (done){
//                 console.log("dinner is done")
//                 resolved("dinner complete")
//             }else{
//                 reject("dinner is not done")
//             }
//         },5000)
//     })
//     return p
// }

// function goToPlayground(){
//       const p= new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if (done){
//                 console.log("went to the playground")
//                 resolved("playground time")
//             }else{
//                 reject("not allowed to go out")
//             }
//         },5000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })