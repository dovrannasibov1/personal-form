function createCard() {
    var name = document.getElementById('cardName').value;
    var job = document.getElementById('cardJob').value;
    var photoInput = document.getElementById('cardPhoto');

    if (name && job && photoInput.files.length > 0) {
        var selectedFile = photoInput.files[0];

        var cardsContainer = document.getElementById('cardsContainer');
        var card = document.createElement('div');
        card.className = 'card';

        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'Sil';
        deleteButton.onclick = function() {
            cardsContainer.removeChild(card);
        };

        var cardContent = `
            <p><strong>Ad:</strong> ${name}</p>
            <p><strong>İş:</strong> ${job}</p>
            <img src="${URL.createObjectURL(selectedFile)}" alt="${name}'in Fotoğrafı">
        `;

        card.innerHTML = cardContent;
        card.appendChild(deleteButton);
        cardsContainer.appendChild(card);

        document.getElementById('createCardForm').reset();
        toggleFormVisibility();
    } else {
        alert('Lütfen tüm alanları doldurun ve bir fotoğraf seçin.');
    }
}

function toggleFormVisibility() {
    var form = document.getElementById('createCardForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}