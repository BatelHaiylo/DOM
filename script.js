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


// function movieObject(){
//     var movie = {};
//     movie.name = prompt("enter a movie name") 
//     movie.numberOfViews =+ prompt("enter The number of views of the movie") 
//     movie.year =+ prompt("enter the movie year of release") 
//     movie.image = prompt("enter the movie poster")
    

//     var moviePoster = {
//         src : movie.image
//     };

//     document.write("<h1>"+movie.name+"</h1>"+"<h4>"+movie.year+"</h4>"
//                  + "<br>"+
//                  "<img src=moviePoster.src>"
//                  + "<br>"+
//                  "<span>"+movie.numberOfViews+"</span>")
// };
// movieObject()

// function printEmployeeData(){
//     var employee = {
//         firstName : prompt("enter your first name") ,
//         lastName : prompt("enter your last name") ,
//         email : prompt("enter your email address") ,
//         department : prompt("enter your department")
//     };
//     document.write(
//         "<h3>"+employee.firstName+"</h3>"+
//         "<h1>"+employee.lastName+"</h1>"+
//         "<p><mark>"+employee.email+"</mark></p>"+
//         "<li>"+employee.department+"</li>"
//     )
// };
// printEmployeeData()

// function buildingObject(){
//     var userNum = +prompt("please enter a number")

//     for (let i = 0; i <userNum; i++) {
//         var building = {
//             contractorName: prompt("please enter the contractor name") ,
//             companyName: prompt("please enter the company name") ,
//             numberOfFloors: +prompt("please enter how many floors are in the building") ,
//             numberOfApartmentsPerFloor: +prompt("please enter how many apartments are on every floor")
//         };

        // document.write(
        //     "<div>"+
        //     "<b>"+building.contractorName+"</b>"+
        //     "<button>"+building.companyName+"</button>"+
        //     "<div>"+building.numberOfFloors+"</div>"+
        //     "<sub>"+building.numberOfApartmentsPerFloor+"</sub>"
        //     "</div>"+"<br>"
        //     )
//     }
// };
// buildingObject()

// function shopObject(){
//     var userNum = +prompt("please enter a number")

//     for (let i = 0; i <userNum; i++) {
//         var shop = {
//             shopName: prompt("please enter the shop name") ,
//             shopAddress: prompt("please enter the shop address") ,
//             numberOfDepartment: +prompt("please enter how many departments are in the shop") ,
//             numberOfEmployees: +prompt("please enter the number of employees in the shop")
//         };

//         if (shop.numberOfEmployees>10) {
//             document.write(
//                 "<p>"+
//                 "<b>"+shop.shopName+"</b>"+
//                 "<button>"+shop.shopAddress+"</button>"+
//                 "<div>"+shop.numberOfDepartment+"</div>"+
//                 "<sub>"+shop.numberOfEmployees+"</sub>"
//                 +"</p><br>"
//             )
//         };
//     };
// };
// shopObject()

// 18..צרו פונקציה שמדפיסה ללוג כמה אלמנטים נוצרו במסך בפונקציה הקודמת (סעיף 17 

// function consoleElementsCreationTimes(num){

//     for (let i = 0; i < num; i++) {
//         shopObject()
//         console.log(num)
//     }
// };
// consoleElementsCreationTimes(2)

// function contactObject(){
//         var userNum =+ prompt("please enter a number");
//         var contactObjArray = []
//         for(i=0; i<userNum; i++){
//                 var contact = {
//                         fullName: prompt("please enter your full name"),
//                         company: prompt("please enter your company"),
//                         phone: +prompt("please enter your phone"),
//                         mobile: +prompt("please enter your mobile"),
//                         email: prompt("please enter your email")
//                 };
//                 contactObjArray.push(contact)
//                 document.write(document.getElementsByTagName("ol").innerText = "<li>"+contact.fullName+"</li>");
//         };
//         console.log(contactObjArray)
// };
// contactObject()

function doctorObject(){
        var userNum =+ prompt("please enter a number");
        var doctorObjArray = []
        for(i=0; i<userNum; i++){
                var doctor = {
                        fullName: prompt("please enter your full name"),
                        internship: prompt("please enter your internship"),
                        phone: +prompt("please enter your phone"),
                        isAvailable: confirm("is the doctor available"),
                        email: prompt("please enter your email")
                };
                doctorObjArray.push(doctor)
                // document.write(document.getElementsByTagName("table").innerHTML = 
                // "<tr><td>"+doctor.fullName+"</td>"
                // +"<td>"+doctor.internship+"</td>"
                // +"<td>"+doctor.isAvailable+"</td>"
                // +"<td>"+doctor.email+"</td></tr><br>");
                document.write(document.getElementsByTagName("table").insertRow(i) = 
                "<td>"+doctor.fullName+"</td>"
                +"<td>"+doctor.internship+"</td>"
                +"<td>"+doctor.isAvailable+"</td>"
                +"<td>"+doctor.email+"</td>");
        };
        console.log(doctorObjArray)
};
doctorObject()