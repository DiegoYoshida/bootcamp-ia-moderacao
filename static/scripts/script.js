if (localStorage.getItem('ocultar-menu') === 'true') {
    document.getElementById('menu')?.classList.toggle('is-hidden')
}

const toggleModal = (seletor) => {
    document.querySelector(seletor)?.classList.toggle('is-active')
}

const fecharNotificacao = () => {
    document.querySelector('.notification')?.classList.add('is-hidden')
}

document.getElementById('botao-novo-post')?.addEventListener('click', () => toggleModal('.modal-post'))
document.getElementById('cancelar-post')?.addEventListener('click', () => toggleModal('.modal-post'))
document.getElementById('cancelar-resposta')?.addEventListener('click', () => toggleModal('.modal-resposta'))

document.querySelectorAll('.comentario')?.forEach(element => {
    element.addEventListener('click', () => {
        const postID = element.getAttribute('post-id')
        document.getElementById('post_id').value = postID
        toggleModal('.modal-resposta')
    })
})

document.getElementById('botao-menu')?.addEventListener('click', () => {
    const menuInativo = document.getElementById('menu').classList.contains('is-hidden')
    localStorage.setItem('ocultar-menu', !menuInativo)
    document.getElementById('menu')?.classList.toggle('is-hidden')
})


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.notification')?.classList.add('is-hidden')
    }, 5000)
})
