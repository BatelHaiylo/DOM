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

function userBuildInputDom(){
    var inputType = prompt("write a type of input type:");

    document.write("<"+inputType+">")
};
userBuildInputDom()