function dodajDva(number) {
  return number + 2;
}


console.log(dodajDva(1));
console.log(dodajDva(2));
console.log(dodajDva(10));


function jednom (func) {
  var izvrsena = false;
  var ret;
  return function (num) {
    if(!izvrsena) {
      izvrsena = true;
    ret = func(num)
    }
    return ret;
  }
}

const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija (4)); // treba ispisati 6
console.log(jednomFunkcija (10)); // treba ispisati 6
console.log(jednomFunkcija (9001)); // treba ispisati 6





let modul = (function() {
  let br = 0;
  return {
    dodaj: function() {
      return ++br;
    }
,
    resetuj: function() {
      br = 0;
      return br;
    }
  }
})();

console.log(modul.dodaj());   // 1
console.log(modul.dodaj());   // 2
console.log(modul.dodaj());   // 3

console.log(modul.resetuj()); // 0

console.log(modul.dodaj());   // 1
