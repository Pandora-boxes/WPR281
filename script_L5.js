//Landing Page 5

document.getElementById('detailsForm2').addEventListener('submit', function(e) {
    e.preventDefault();
    if(this.checkValidity()) {
        window.location.href = 'mainbone.html';
    }
});