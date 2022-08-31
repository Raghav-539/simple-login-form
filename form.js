function submitform()
{
    var firstName = document.getElementById("first_name").value;
    document.getElementById("form-fname").innerHTML=firstName;

    var lastName = document.getElementById("last_name").value;
    document.getElementById("form-lname").innerHTML=lastName;

    var gender = document.querySelector("input[name='gender']:checked").value;
    document.getElementById("form-gender").innerHTML=gender;

    var address = document.getElementById("address").value;
    document.getElementById("form-address").innerHTML=address;

    var country = document.querySelector("#country").value;
    document.getElementById("form-country").innerHTML=country;

    var contact = document.getElementById("contact").value;
    document.getElementById("form-mobile").innerHTML=contact;

    var mail = document.getElementById("mail").value;
    document.getElementById("form-mail").innerHTML=mail;

    var password = document.getElementById("password").value;
    document.getElementById("form-pass1").innerHTML=password;

    var c_password = document.getElementById("confirm_password").value;
    document.getElementById("form-pass2").innerHTML=c_password;

    var password = document.getElementById("passsword").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
    }
}
