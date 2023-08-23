const configForm = document.querySelector('.config')

configForm.addEventListener('submit', (e) => {
    Telegram.WebApp.sendData('Testeeee')
})