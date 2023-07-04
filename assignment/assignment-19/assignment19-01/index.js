// exercise 1

function addData(){
    var first_Name = document.getElementById('first').value;
    var LAST_Name = document.getElementById('last').value;
    var age_ = document.getElementById('age').value;
    var country_Name = document.getElementById('country').value;
    var city_Name = document.getElementById('city').value;



    localStorage.setItem('firstName',first_Name);
    localStorage.setItem('lastName',LAST_Name);
    localStorage.setItem('userAge',age_);
    localStorage.setItem('countryName',country_Name);
    localStorage.setItem('cityName',city_Name);

    localStorage.firstName = first_Name;
    localStorage.lastName = LAST_Name;
    localStorage.userAge = age_;
    localStorage.countryName = country_Name;
    localStorage.cityName = city_Name;
}

//exercise 2

const student = {
    firstName : "Vikash",
    lastNam : "pandey",
    roll:21,
    country:'india',
}

student_JSON = JSON.stringify(student)
localStorage.setItem('student',student_JSON)