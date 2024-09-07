window.onload = () => {
    const tablebody = document.getElementById("tableBody");

    console.log(localStorage.length);
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
        let row = document.createElement("tr");
        let number = document.createElement("th");
        number.scope = "row"
        number.innerHTML = `${i+1}`

        let redirectFrom = document.createElement("td");
        redirectFrom.innerHTML = localStorage.key(i);

        let redirectTo = document.createElement("td");
        redirectTo.innerHTML = localStorage.getItem(localStorage.key(i))

        row.appendChild(number);
        row.appendChild(redirectFrom);
        row.appendChild(redirectTo);
        tablebody.appendChild(row);

    }
} 