let odgovor = prompt("Unesite nešto!");
let rezultat = odgovor.split("").reverse().join("");
alert(rezultat);


function createTable () {
    document.write("<table>");
    for(let i = 0; i < 10; i++) {
        document.write("<tr>");
        for (let j = 0; j < 10; j++) {
            if(i == 0 && j == 0) {
                document.write("<th>X</th>");
            }
            if (i == 0 && j > 0) {
                document.write("<th>"+ j +"</th>");
            }
            if (j == 0 && i > 0) {
                document.write("<th>" + i + "</th>");
            }
            if(i > 0 && j > 0) {
            let klasa = "";

            if (i % 2 == 0) {
                klasa = "parni";
            } 
            else {
                 klasa = "neparni";
            }
            document.write("<td class='" + klasa + "'>" + i*j + "</td>");
            }
        }
    }
}

createTable();