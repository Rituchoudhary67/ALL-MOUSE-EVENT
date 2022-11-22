//  EVENT :- an event is a signal that something has happened on the browser.  
//  MOUSE EVENT 


//  1.click. ---->DOUBT
//  when mouse click on an element

const button_id = document.getElementById("btn_id");

button_id.addEventListener("click", () => {
   // method1
    button_id.innerHTML = "click event was active by innerHtml";
    console.log(button_id.innerHTML)

    //method2
    // button_id.innerText="click event was active by innerText";
    // console.log(button_id.innerText);
})


//2.MOUSEOVER
// when the cursor of the mouse comes over the element.

const example = document.getElementById("mover_id");

example.addEventListener("mouseover", (ele) => {
    ele.target.style.backgroundColor = "blue"; 
})


//3.MOUSEOUT
// when the cursor of the mouse leaves an element

const example2 = document.getElementById("mout_id");

example2.addEventListener("mouseout",(ex) => {
     ex.target.style.backgroundColor = "crimson"
})

//4.MOUSEDOWN 
//when the mouse button is pressed over the element

const example3 = document.getElementById("mdown_id");

example3.addEventListener("mousedown", (ex3) => {
     ex3.target.style.backgroundColor = "deeppink"
})


//5.MOUSEUP
// when the mouse button is relased over the element.

const example4 = document.getElementById("mup_id");

example4.addEventListener("mouseup", (ex4) => {
    ex4.target.style.backgroundColor = "green"
})

//6.MOUSEMOVE
//when the mouse movement takes place

const example5 = document.getElementById("color_id");

document.addEventListener("mousemove",(ex5) => {
    const {screenX} = ex5;
    example5.style.width = `${screenX}px`
})




