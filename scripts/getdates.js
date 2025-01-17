document.addEventListener('DOMContentLoaded', function(){
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = `&copy ${currentYear} Raphael Shawn Taurai🤓`;

    //Last modified date
    var dateLastModified = document.lastModified;
    document.getElementById('lastModified').innerText = `Last Modified: ${dateLastModified}`;
})