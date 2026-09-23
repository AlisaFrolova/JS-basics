//__1__ dialog, variables, conditionals constructions
alert("message") //just info
confirm("message") //true or false
prompt("message") //input
console.log("message") //just writes text

let name // basic variable
const name_C =" " //const variable

//>= <= > < == != //conditional operators (the same as in cpp)
//!BUT : == (if there are differenet types, they will be set to one), === (won't change types at all, more recommended)

if(condition){
//commands
} else {//...
    }
//also after else can be another if

switch (value){
case value1: { 
//commands
break
 }
case value2:{
//commands
break
 }
}

// __2__ functions
function nameF (...args) {} // –> function without a specific number of arguments, where args — array of received args

//1. function declaration (can use before it initilization)
function showText(str){
    if(typeof str !== 'string' || (typeof str === 'string' && str.length < 1)){
        console.log('Error')
        return
    }else{
        const New_str = str + '!'
        console.log(New_str)
        return New_str
    }
}

const res = showText('hello')
console.log(res)


//2. function expression (can't use it before initilization)
const showText1 = function(str, ...args){
    console.log(args)
    if(typeof str !== 'string' || (typeof str === 'string' && str.length < 1)){
        console.log('Error')
        return
    }else{
        const New_str = str + '!'
        console.log(New_str)
        return New_str
    }
}
// showText1('helllo')
// console.log(showText('hjk'), showText1('qwe'))
showText1('qwe', 1, 2, 3, 3)

//3. arrow-function (no context + can't use it before initilization)
const showText2 = (str) => {
    if(typeof str !== 'string' || (typeof str === 'string' && str.length < 1)){
        console.log('Error')
        return
    }else{
        const New_str = str + '!'
        console.log(New_str)
        return New_str
    }
}
showText2('lkj')

//__3__ timeouts and intervals
//setTimeout(() => {}, 1000) - to call function in 1000 (1s)
//const interval = setInterval(() => {}, 1000)
//setTimeout(() => {
// clearInterval(interval)}, 1000)

//__4__ DOM
//How to get element/s

document.getElementsByTagName('name')
document.getElementsByClassName('name')
document.getElementById('id')
document.querySelector('name') //returns one element, . and # to change type of search
document.querySelectorAll('name') //the same, but returns array

//How to change styles
element.style.smth //to get its value

//Operations with classes

element.className //to get one class name, returns string
element.classList //to get all class names, returns array

element.className = 'smth' //to change object's class, but deletes all other classes except the new one
element.classList.add('smth') // to add new class without deleting all others
element.classList.remove('smth') //to delete class by its name

element.classList.toggle('smth') //method. Searchs 'smth', if found — deletes, if not — adds

element.innerHTML //— text+html (tags and etc)
element.innerText //— text (ignores hidden elements, script and style)
element.textContent //— also text (+ all hidden elements, script and style)

//Creation:
document.createElement('tag') //— creation of new element

//Formating:
new_el.classList.add('new_class') 
new_el.textContent
new_el.style.smth
new_el.id

//Adding element on the page:
parent.append(el) //— add into the parent (end)
parent.prepend(el) //— add into the parent (begin)
parent.after(el) //— adds element after the parent
parent.before(el) //— adds element before the parent

//Deleting (if needed):
el.remove() //— deletes it

//Other methods:
element.clientHeight //— returns current height of element, px
element.clientWidth //— returns current width of element, px
child.offsetLeft //— how much px from left in parent
child.offsetTop //— how much px from top in parent

//__5__ the best function OAT
const generateRandNumb = (left_b, right_b) => Math.floor(Math.random()*(right_b-left_b)+left_b)

//__6__ Browser events
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){}
})

const clickSmth = () => {
smth.addEventListener("click", () => {//function
    })
}
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){//....
    }})
smth.removeEventListener("click" //function
)

event.stopPropagation() //— parents ignore events, that happened on the child

event.target //— element, on which event actually HAPPENED

event.currentTarget //— element, on which the event is set

event.preventDefalut() //— cancel the browser's standart behaviour for this event

//__7__ example for drag and drop objects
block = document.querySelector('.draggable'); 

block.addEventListener('mousedown', (event) => {
    // function that moves a block followind the mouse
    function moveAt(moveEvent) {
        // changing coordinates
        block.style.left = moveEvent.clientX - block.offsetWidth / 2 + 'px';
        block.style.top = moveEvent.clientY - block.offsetHeight / 2 + 'px';
    }

    // start moving when the mouse moves
    document.addEventListener('mousemove', moveAt);

    //when releasing the mouse
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveAt);
    }, { once: true }); // { once: true } deletes automatically when finished
});

let block = document.querySelector(".move")
let coordX = 0;
let coordY = 0;
document.body.addEventListener("keydown", moveBlock)
function moveBlock(){
    switch(event.code){
        case "KeyW":
            case "ArrowUp":{
            coordY -= 10
            break;
        }
        case "KeyD":
            case "ArrowRight":{
            coordX += 10
            break;
        }
        case "KeyA":
            case "ArrowLeft":{
            coordX -= 10
            break;
        }
        case "KeyS":
            case "ArrowDown":{
            coordY += 10
            break;
        }
    }
    block.style.left = `${coordX}px`
    block.style.top = `${coordY}px`
}

//__8__ fetch and promises
function fetchFunction(){
    fetch(apiURL)
    .then (response => {
        console.log("B")
    })
}

console.log("A")
fetchFunction()
console.log("C")
//the result: A C B, because the function is asynchronous

const testPromise = new Promise((resolve, reject) => { //the function here is called the Executor, which receives 2 parameters (Resolve and Reject)
    const result = 5 + 5;
    if (result === 10){
        resolve("Done!") //if promise worked without any issues --- success
    } else{
        reject("Something went wrong") //issues --- failure
    }
    //in brakets there also could be objects or anything else (in reject(X) and etc)
}); //promise is literally a promise

testPromise.then(message => {
    console.log(message) //if promise returned success. usually there would be path to the next step of app logic
}).catch(message =>{
    console.log(message) //if promise returned failure. usually there would be error page or smth like that
})

//fetch
//1.
fetch("http://example-api.com")
.then(response => { //SUCCESS //and also work with errors
    //do something with the response. example:
    if(!response.ok){
        throw new Error("error: " + response.status)
    }
    return response.json()
})
.then (data => { //.then number 2
    //smth smth smth
})
.catch(response => {//FAILURE (usually only one catch for all the .thens)
    //throw an error (hint: remember cpp and work with erros? that's it)
})
.finally(() => { //doesnt care if the promise was successful or not, so runs once the promise is settled
    //smth
})

//2.
async function bestFunction(){
    try{
        const response = await fetch(apiURL)
        if(!response.ok){
            throw new Error("error: " + response.status)
        }
        const data = await response.json()
        //work with received data
    }
    catch(error){
        console.log(error)
    }
    finally{ //doesnt care if the promise was successful or not, so runs once the promise is settled
    //smth
    }
}

//note 1:
// myPromise
// .then(() => {}) //handle success
// .catch(() => {}) //handle error
// .finally(() => {}) //run once finished

//note 2:
// async function myFunction(){
//  try {
// const result = await anyPromise;
// } catch (error){
////handle error
// } finally {
////run once finished
// }
// }
//fetch example:
let apiKey = "69eea7577f7bdf59547ca01ebad31937";
let city = "Minsk";
let url = `http://api.openweathermap.org/data/2.5/weather?id=15&q=${city}&lang=ru&units=metric&appid=${apiKey}`;

fetch(url).then(data => data.json()).then(res => console.log(res))


//9 local storage
localStorage.setItem(key, value)
localStorage.getItem(key)

const object = { }
const objectJSON = JSON.stringify(object) //creates string with object keys and values
localStorage.setItem("object", objectJSON)
const getObject = localStorage.getItem("object")
const objectData = JSON.parse(getObject)
