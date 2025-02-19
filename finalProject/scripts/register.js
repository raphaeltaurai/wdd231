// after completing each building process I delete all console.logs

//grad entire url
const currentURL = window.location.href;


//divide the url into 2 halves
const everything = currentURL.split('?');


//grab second half only
let formData = everything[1].split("&")

//formData into an array
// formData = formData.split("&")
// console.log(formData);

//show function
function show(cup){
    formData.forEach((element) => {
        if(element.startsWith(cup)){
            result= element.split("=")[1].replace("%40","@")
        }// end if
    })
    return(result)
}
//end show

const showInfo =document.querySelector("#results");
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Service Category ${show("category")} on ${show("fecha")} in the ${show("location")}</p>
<p> Your phone: ${show("phone")}</p>
<p> Your email: <a href="mailto${show("email")}"> ${show("email")}</a></p>
`


