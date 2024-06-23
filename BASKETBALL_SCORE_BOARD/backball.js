let textNum = 0
let textNum2 = 0


document.getElementById("text1").textcontent= textNum
document.getElementById("text2").textcontent= textNum2

let TextEl= document.getElementById("text1")
let TextElemnt= document.getElementById("text2")


// function of button container one

function btn1() {
textNum += 1
 TextEl.textContent = textNum 
}


function btn2() {
	textNum += 2
	TextEl.textContent = textNum
}


function btn3() {
	textNum += 3
	TextEl.textContent = textNum
}




// function of button container two

function btn4() {
	textNum2 += 1
 	TextElemnt.textContent = textNum2
   }
   
   
   function btn5() {
	textNum2 += 2
	TextElemnt.textContent = textNum2
   }
   
   
   function btn6() {
	textNum2 += 3
	TextElemnt.textContent = textNum2
   }