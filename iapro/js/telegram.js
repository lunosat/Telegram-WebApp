const configForm = document.querySelector('.config')

configForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let text = 'This is a test baby'
    Telegram.WebApp.sendData(text);
})