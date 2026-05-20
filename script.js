// SPORTS REGISTRATION

function add() {

    let sname = document.getElementById("sname").value;
    let reg = document.getElementById("reg1").value;
    let email = document.getElementById("email1").value;
    let phone = document.getElementById("phone1").value;
    let dep = document.getElementById("dep1").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("name1").value;
    let ptype = document.getElementById("ptype").value;
    let tname = document.getElementById("tname").value;
    let tnum = document.getElementById("tnum").value;

    // Validation

    if (sname === "") {
        alert("Enter student name");
        return;
    }

    if (reg === "") {
        alert("Enter registration number");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    if (phone === "") {
        alert("Enter mobile number");
        return;
    }

    if (event === "") {
        alert("Select an event");
        return;
    }

    // Add row

    document.getElementById("body").innerHTML += `
    <tr>
        <td>${sname}</td>
        <td>${reg}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${dep}</td>
        <td>${year}</td>
        <td>${event}</td>
        <td>${ptype}</td>
        <td>${tname}</td>
        <td>${tnum}</td>
    </tr>
    `;

    alert("Registration Successful!");
}


// FEEDBACK FORM

function submitFeedback() {

    let fname = document.getElementById("namef").value;
    let freg = document.getElementById("registration").value;
    let eventf = document.getElementById("Event").value;
    let rate = document.getElementById("rate").value;
    let review = document.getElementById("review").value;

    // Validation

    if (fname === "") {
        alert("Enter your name");
        return;
    }

    if (freg === "") {
        alert("Enter registration number");
        return;
    }

    if (eventf === "") {
        alert("Select event");
        return;
    }

    if (rate === "") {
        alert("Give rating");
        return;
    }

    if (review.length < 20) {
        alert("Review should contain at least 20 characters");
        return;
    }

    // Display Feedback

    document.getElementById("revdisp").innerHTML = `
        <h3>Feedback Submitted Successfully</h3>
        <p><b>Name:</b> ${fname}</p>
        <p><b>Registration No:</b> ${freg}</p>
        <p><b>Event:</b> ${eventf}</p>
        <p><b>Rating:</b> ${rate}/5</p>
        <p><b>Review:</b> ${review}</p>
    `;

    alert("Feedback Submitted Successfully!");
}