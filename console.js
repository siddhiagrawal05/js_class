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

const handlesubmit=(event)=>{
    event.preventDefault()
    console.log("form submitted")
}
const form=document.querySelector('form')
form.addEventListener('submit',handlesubmit)