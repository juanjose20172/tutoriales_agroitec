function updateDate() {
    const dateInput = document.getElementById('dateInput').value;
    const dateElement = document.getElementById('date');
    
    if (dateInput) {
        const date = new Date(dateInput);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('es-ES', options).replace('.', '').replace(' ', '/').replace(' ', '/');
        dateElement.textContent = formattedDate;
	 
    }
}

function updatePrice() {
    const priceInput = document.getElementById('priceInput').value;
    const priceElement = document.getElementById('price');
    
    if (priceInput) {
        priceElement.textContent = `$${parseInt(priceInput).toLocaleString('es-CO')} COP`;
    }
}

function hideInputs() {
    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('hideButton').style.display = 'none';
}
