// generates automated e-mail when mailing list form is submitted

function sendMailingListMail(mailingList) {
    emailjs.send("gmail","mailinglist", {
        "from_email": mailingList.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert ("Thank you for subscribing to my mailing list!");
            resetEmailForm();
        },
        function(error) {
            console.log("FAILED", error);
            document.getElementById("gRecaptcha").innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show">
                    <strong>
                        <i class="fas fa-exclamation-triangle"></i> Please verify yourself first! 
                        <button type="button" class="close" data-dismiss="alert" aria-labels="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </strong>
                </div>
            `;
        }
    );
    return false;
}

// empties form contents upon successful submission

function resetEmailForm() {
    document.getElementById("emailForm").reset();
}

// enables form submission when at least 1 of 2 checkbox options is checked

$(".submit-request").on("click", function() {
    $subjects = $(".subject-option");

    $subjects.prop("required", true);
    if($subjects.is(":checked")) {
        $subjects.prop("required", false);
    }
});

// generates automated e-mail when tuition form is submitted

function sendTutoringMail(contactRequest) {
    emailjs.send("gmail", "contactrequest", {
        "from_name": contactRequest.fname.value,
        "from_email": contactRequest.emailaddress.value,
        "phone_number": contactRequest.phone.value,
        "birthday": contactRequest.dob.value,
        "subject_mathsenglish": contactRequest.mathsenglish.value,
        "subject_german": contactRequest.german.value,
        "competency_beginner": contactRequest.beginner.value,
        "competency_intermediate": contactRequest.intermediate.value,
        "competency_advanced": contactRequest.advanced.value,
        "length_1hr": contactRequest.hour.value,
        "length_1hr30": contactRequest.ninety.value,
        "free_assessment": contactRequest.freeassessment.value,
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            alert("Thank you for your enquiry! I will be in touch with you as soon as possible.");
            resetTutoringForm();
        },
        function (error) {
            console.log("FAILED", error);
            document.getElementById("gRecaptcha").innerHTML = `
                <div class="alert alert-danger alert-dismissible alert-offset fade show">
                    <strong>
                        <i class="fas fa-exclamation-triangle"></i> Please verify yourself first! 
                        <button type="button" class="close" data-dismiss="alert">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </strong>
                </div>
            `;
        }
    );
    return false;
}

// empties form contents upon successful submission

function resetTutoringForm() {
    document.getElementById("tutoringForm").reset();
}

// generates automated e-mail when fitness coaching form is submitted

function sendFitnessMail(contactRequest) {
    emailjs.send("gmail", "contactrequest", {
        "from_name": contactRequest.fname.value,
        "from_email": contactRequest.emailaddress.value,
        "phone_number": contactRequest.phone.value,
        "birthday": contactRequest.dob.value,
        "message": contactRequest.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert ("Thank you for your enquiry! I will be in touch with you as soon as possible.");
            resetFitnessForm();
        },
        function(error) {
            console.log("FAILED", error);
            document.getElementById("gRecaptcha").innerHTML = `
                <div class="alert alert-danger alert-dismissible alert-offset fade show">
                    <strong>
                        <i class="fas fa-exclamation-triangle"></i> Please verify yourself first! 
                        <button type="button" class="close" data-dismiss="alert" aria-labels="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </strong>
                </div>
            `;            
        }
    );
    return false;
}

// empties form contents upon successful submission

function resetFitnessForm() {
    document.getElementById("fitnessForm").reset();
}

// generates automated e-mail when contact form is submitted

function sendContactMail(contactRequest) {
    emailjs.send("gmail", "contactrequest", {
        "from_name": contactRequest.fname.value,
        "from_email": contactRequest.emailaddress.value,
        "message": contactRequest.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert ("Thank you for your enquiry! I will be in touch with you as soon as possible.");
            resetContactForm();
        },
        function(error) {
            console.log("FAILED", error);
            document.getElementById("gRecaptcha").innerHTML = `
                <div class="alert alert-danger alert-dismissible alert-offset fade show">
                    <strong>
                        <i class="fas fa-exclamation-triangle"></i> Please verify yourself first! 
                        <button type="button" class="close" data-dismiss="alert" aria-labels="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </strong>
                </div>
            `;
        }
    );
    return false;
}

// empties form contents upon successful submission

function resetContactForm() {
    document.getElementById("contactForm").reset();
}