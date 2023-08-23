const configForm = document.querySelector('.config')

configForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const model = document.getElementById('model').value
    const nsfw = document.getElementById('nsfw').value

    const data = {
        model,
        nsfw
    }
    Telegram.WebApp.sendData(JSON.stringify(data));
})