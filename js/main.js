var table = [];

//user Object
var user = {
  firstname: "Lilith",
  lastname: "Lithosphère",
  country: "France",
  age: 20,
  payment: ["Vistaprint", "Paypal", 'Mastercard'],
  alertFirstname: function() {
    alert(this.firstname);
  },
  alertLastname: function() {
    alert(this.lastname);
  },
  alertBirthYear: function() {
    var result = 2018 - this.age;
    alert(result);
  }
}

// user.alertFirstname();
// user.alertLastname();
// user.alertBirthYear();

var authorization = {
  country: ['FRANCE', 'ITALIE', 'ESPAGNE'],
  payment: ['MASTERCARD', 'VISA', 'VIP'],
  minAge: 20,
  verifAge: function(age) {
    if (age < this.minAge) {
      alert("Vous n'êtes pas autorisé à entrée imprudent !");
    } else {
      alert("Age Ok !");
    }
  },
  verifCountry: function(country) {
    country = country.toUpperCase();
      if (this.country.indexOf(country) != -1) {
        alert('Pays Ok !');
      } else {
        alert("Tu n'es pas dans un pays autorisé dommage~");
      }
  },
  verifPayment: function(payment) {
    for(var i in payment) {
      payment[i] = payment[i].toUpperCase();
      //if element make in uppercase are in authorization, that's add in a array
      //and we display that's array if is not empty
      if (this.payment.indexOf(payment[i]) != -1) {
        table.push(payment[i])
      }
    }
    if (table.length > 0) {
      alert('Sur notre site tu peux utilisé : ' + table);
    } else {
      alert("Tu n'as pas ce qu'il faut pour payer sur le site ! Il te faut : " + this.payment);
    }
    table = [];
  }
}

// authorization.verifAge(user.age);
// authorization.verifCountry(user.country);
// authorization.verifPayment(user.payment);

//Display all methode Object
var verifAll = {
  userverif: user.alertFirstname() + user.alertLastname() + user.alertBirthYear(),
  autorizverif: authorization.verifAge(user.age) + authorization.verifCountry(user.country) + authorization.verifPayment(user.payment)
}

verifAll;
