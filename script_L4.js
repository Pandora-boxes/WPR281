//Landing Page 4

document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if(this.checkValidity()) {
        window.location.href = 'land5.html';
    }
});
