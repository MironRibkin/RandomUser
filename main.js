const button = document.querySelector(".button")
const name = document.querySelector(".name")
const lastName = document.querySelector(".last_name")
const map = document.querySelector(".location")
const mail = document.querySelector(".email")
const phone = document.querySelector(".phone")
const image = document.querySelector(".image")

async function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            let gotData = data.results[0];
            name.innerHTML = gotData.name.first;
            lastName.innerHTML = gotData.name.last;
            map.innerHTML = gotData.location.country + " ," + gotData.location.city;
            mail.innerHTML = gotData.email;
            phone.innerHTML = gotData.phone;
            image.src = gotData.picture.large;
        })
}

button.addEventListener('click', function () {
    randomUser()
})