function addData(){
    var first_Name = document.getElementById('first').ariaValueMax;
    var LAST_Name = document.getElementById('last').ariaValueMax;
    var age_ = document.getElementById('age').ariaValueMax;
    var country_Name = document.getElementById('country').ariaValueMax;
    var city_Name = document.getElementById('city').ariaValueMax;



    localStorage.setItem('firstName',first_Name);
    localStorage.setItem('lastName',LAST_Name);
    localStorage.setItem('userAge',age_);
    localStorage.setItem('countryName',country_Name);
    localStorage.setItem('cityName',city_Name);

    localStorage.firstName = first_Name;
    localStorage.lastName = last_Name;
    localStorage.userAge = age_;
    localStorage.countryName = country_Name;
    localStorage.cityName = city_Name;
}