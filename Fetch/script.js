function fetcheles(id)
{
    let link = `https://jsonplaceholder.org/users/?id=${id}`
fetch(link)
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(user => {
console.log(user);
kiiras( user, link);
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});
}

function keres()
{
    let id = parseInt(document.getElementById("bek").value)
    fetcheles(id)
}

function kiiras(ember, link)
{
    document.getElementById("id").innerHTML = `id:${ember.id}`;
    document.getElementById("nev").innerHTML = `név:${ember.firstname} ${ember.lastname}`;
    document.getElementById("telefonszam").innerHTML = `telefonszám:${ember.phone}`;
    document.getElementById("email").innerHTML = `email cím: ${ember.email}`;
    document.getElementById("reszletesEmail").innerHTML = `email cím részletesen:\n${ember.address.zipcode}\n${ember.address.city}\n${ember.address.street}\n${ember.address.suite}`;
    document.getElementById("geolocation").innerHTML = `hely:\n${ember.address.geo.lat}\n${ember.address.geo.lng}`;
    document.getElementById("weblapcim").innerHTML = `weblap címe:${link}`;
    document.getElementById("cegadat").innerHTML = `cég:\n${ember.company.catchPhrase}\n${ember.address.geo.lng}\n${ember.company.bs}`;
}
