// select the register button element
const registerButton = document.querySelector(".register-button");

// add a click event listener to the register button
registerButton.addEventListener("click", (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // select all the input elements
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = document.getElementById("age").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const address = document.getElementById("address").value;
  const contact = document.getElementById("contact").value;

  // check for empty input fields
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    !gender ||
    age.trim() === "" ||
    username.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === "" ||
    address.trim() === "" ||
    contact.trim() === ""
  ) {
    alert("Please fill in all required fields");
    return;
  }

  // check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // create an object with the input values
  const formData = {
    fname: firstName,
    lname: lastName,
    username: username,
    // contact: 12345, // added field
    gender: gender.value,
    age: age,
    // address: "Lapacan",  // added field
    password: password,
    password2: confirmPassword,
    address: address,
    contact: contact,
  };

  fetch("http://localhost:3000/teachers/reg-student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      data.status
        ? (window.location.href = "../students/home.html")
        : alert("Please fill out all fields");
    });

  // reset the form
  document.querySelector("form").reset();

  // log the form data to the console
  console.log(formData);
});
