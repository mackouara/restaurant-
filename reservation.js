document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    const data = {
        name,
        email,
        phone,
        date,
        time,
        people
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbypKbVoqgUQFRbrx3K_B8fbJqGD7fNu2EE6umcf48rEQ0MPpUkb9ybNdCNmW3hyqGozZA/exec', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Réservation réussie !');
                document.getElementById('reservation-form').reset();
            } else {
                console.error('Erreur lors de la réservation:', xhr.status);
                alert('Erreur lors de la réservation. Veuillez réessayer.');
            }
        }
    };
    xhr.send(JSON.stringify(data));
});
