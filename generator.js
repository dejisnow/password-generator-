window.onload=()=>{
    
    let passwordInput = document.querySelector(".textInput")
    let number = document.querySelector(".numbers")
    let uppperCase = document.querySelector(".uppercase")
       let lowerCase = document.querySelector(".lowercase")
   let symbols= document.querySelector(".symbols")
   let btn = document.querySelector(".btn")
   
   
   //Variables for checked boxes 
  
   
   
 
   
   //Arrays

let alphaArray = []

 
       
  
   
   
   function picker(){
   
   let numberArray = []
let upperArray= []
let lowerArray = []
let symbArray = []
let codesArray = []
 
   
   let upperChecked = uppperCase.checked
  let lowerChecked = lowerCase.checked 
  let numberChecked = number.checked 
  let symbolChecked = symbols.checked 
  let finalArray = []
  

 for(let i = 97; i <= 122; i++){
!lowerChecked ? lowerArray = [] :lowerArray.push(String.fromCharCode(i)) }
 for(let i = 48; i <= 57; i++){!numberChecked ? numberArray = []: numberArray.push(String.fromCharCode(i))}
for(let i = 65; i <= 90; i++){ !upperChecked ?upperArray = [] :upperArray.push(String.fromCharCode(i)) }
 for(let i = 35; i < 37; i++){ !symbolChecked ? symbArray = [] :symbArray.push(String.fromCharCode(i)) 
}

 finalArray = [...upperArray,...numberArray,...lowerArray,...symbArray]

    let newarr = [];
    let counter = finalArray.length
    
   for(let i = 15; i > 0; i--){
     let num = Math.floor(Math.random() * finalArray.length)
    newarr.push(finalArray[num]) 
    
   }
   let result =  newarr.join("")
   passwordInput.innerText = `${result}`
   return result 
   }
 
 
  
  
   btn.addEventListener("click",(e)=>{
       e.preventDefault()
      picker()
       
     

       
   })
   
  
}


/*
   Ascii list 
    33-38 - symbols 
   47-57 numbers
   65-90 uppercase
   97-122 - lowercase

*/

￼Enter
