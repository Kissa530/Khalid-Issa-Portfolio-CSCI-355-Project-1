// Scroll to projects button

const projectButton =
document.getElementById("projectButton");


projectButton.addEventListener("click", function(){

    document
    .getElementById("projects")
    .scrollIntoView({
        behavior:"smooth"
    });

});




// Contact form validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");


    // Check if fields are empty
    if(name === "" || email === "" || message === ""){

        formMessage.innerHTML =
        "Please fill out all fields.";

        return;

    }


    // Create email draft
    let gmailLink =
`https://mail.google.com/mail/?view=cm&fs=1&to=khalidissa530@gmail.com&su=${encodeURIComponent(
"Portfolio Contact from " + name
)}&body=${encodeURIComponent(
"Name: " + name +
"\nEmail: " + email +
"\n\nMessage:\n" + message
)}`;

window.open(gmailLink, "_blank");
});