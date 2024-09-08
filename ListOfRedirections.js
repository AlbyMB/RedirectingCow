window.onload = () => {
    const tablebody = document.getElementById("tableBody");

    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
        let row = document.createElement("tr");
        row.id =   `${localStorage.key(i)}`;
        let number = document.createElement("th");
        number.scope = "row"
        number.innerHTML = `${i+1}`

        let redirectFrom = document.createElement("td");
        redirectFrom.innerHTML = localStorage.key(i);

        let redirectTo = document.createElement("td");
        redirectTo.innerHTML = localStorage.getItem(localStorage.key(i))

        let buttonCol = document.createElement("td");

        let removeButton = document.createElement("button");
        removeButton.className = "btn btn-primary";
        removeButton.textContent = "Remove Redirection";
        removeButton.addEventListener("click", () => {RemoveRedirection(`${localStorage.key(i)}`)});
        buttonCol.appendChild(removeButton);

        row.appendChild(number);
        row.appendChild(redirectFrom);
        row.appendChild(redirectTo);
        row.appendChild(buttonCol);
        tablebody.appendChild(row);

    }
} 

const RemoveRedirection = (redirection) => {
    if(window.confirm(`Do you really want to remove redirection from ${redirection}`)){
        localStorage.removeItem(redirection);
        const tablebody = document.getElementById("tableBody");
        const redirectionToRemove = document.getElementById(redirection);
        tablebody.removeChild(redirectionToRemove);
    }
}