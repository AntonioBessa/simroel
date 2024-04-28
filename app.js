function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a aba desejada ao carregar a página
window.onload = function () {
    openTab(event, 'Tab1');
}

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(this);

    const formData = new FormData(this)

    console.log(formData);

})


console.log(form);