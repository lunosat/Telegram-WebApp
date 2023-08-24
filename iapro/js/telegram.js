const configForm = document.querySelector('.config')

configForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const model = document.getElementById('model').value

    const data = {
        model,
    }
    Telegram.WebApp.sendData(JSON.stringify(data));
})