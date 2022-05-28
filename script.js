// console.log(first_h1.innerText)

// document.write(first_h2 = "my dom app")

// console.log(document.getElementsByClassName("blahG"))

// console.log(document.getElementsByClassName("blahG")[1].innerText)
// console.log(document.getElementsByClassName("blahG")[2].innerText)

// console.log(document.getElementsByTagName("h4"))

// function printUserName (){
//     var userInput = prompt("please enter a name:")

//     document.write("<h2>"+userInput+"</h2>")
// };
// printUserName ()

// function getUserInput(){
//     var userNum =+ prompt("please enter a num:")
//     var paint = prompt("please enter a color:")

//     for (let i = 0; i < userNum; i++) {
//         document.write("<span>"+paint+"<br>"+"</span>")
//     }
// };
// getUserInput()

// function userBuildStringDom(){
//     var userText = prompt("write somthing:")
//     var userTag = prompt("please write an HTML tag:")

//     document.write(userTag+userText+userTag)
// };
// userBuildDom()

// function userBuildInputDom(){
//     var inputType = prompt("write a type of input type:");

//     document.write("<"+inputType+">")
// };
// userBuildInputDom()

// function changeClasses(group,userText){
//     var groupElement = document.getElementsByClassName(group);
//     for(i=0; i<groupElement.length; i++){
//         groupElement[i].innerText = userText
//     };
// };
// changeClasses("blahG","i love you")

// 12. צרו פונקציה שמכניסה להם אלמנט SPANעם טקס

// function insertSpanTextToElement(){
//     var pArr = document.getElementsByTagName("p")
//     for(i=0; i<pArr.length; i++) {
//         pArr[i].innerHTML = "<span>"+"BOMMBAclat"+"<span>"
//     }
//     console.log(pArr);
// };
// insertSpanTextToElement()


// function getGrownUserdataplusinputBlock(){
//     var userFirstName = prompt("please enter your first name")
//     var userLastName = prompt("please enter your last name")
//     var userAge = prompt("please enter your age")
//     document.write(userFirstName+"       "+userLastName+"       "+userAge)
//     if(userAge>18){
//         document.write("<br>"+"<input>"+"  "+"<input>"+"  "+"<input>")
//     };
// };
// getGrownUserdataplusinputBlock()


function movieObject(){
    var movie = {};
    movie.name = prompt("enter a movie name") 
    movie.numberOfViews =+ prompt("enter The number of views of the movie") 
    movie.year =+ prompt("enter the movie year of release") 
    movie.image = prompt("enter the movie poster")
    

    var moviePoster = {
        src : movie.image
    };

    document.write("<h1>"+movie.name+"</h1>"+"<h4>"+movie.year+"</h4>"
                 + "<br>"+
                 "<img src=moviePoster.src>"
                 + "<br>"+
                 "<span>"+movie.numberOfViews+"</span>")
};
movieObject()
