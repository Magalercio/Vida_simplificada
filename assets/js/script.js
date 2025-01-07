
// Seleciona todos os botões com a classe 'btn'
const botoes = document.querySelectorAll('.btn');

// Itera sobre cada botão para adicionar os event listeners
botoes.forEach(botao => {
    // Adiciona evento quando o mouse entra (hover)
    botao.addEventListener('mouseenter', function() {
        this.classList.add('pulse-animation'); // Adiciona a classe para iniciar a animação
    });

    // Adiciona evento quando o mouse sai
    botao.addEventListener('mouseleave', function() {
        this.classList.remove('pulse-animation'); // Remove a classe para pausar a animação
    });
});


// Abrir e fechar FAQ
document.querySelectorAll('.pergunta').forEach(item => {
    item.addEventListener('click', () => {
        const resposta = item.querySelector('.resposta'); // Seleciona a resposta dentro do card
        const seta = item.querySelector('.seta i');

        // Alterna a visibilidade da resposta
        if (resposta.style.display === 'none' || resposta.style.display === '') {
            resposta.style.display = 'block';
        } else {
            resposta.style.display = 'none';
        }

        // Alterna a seta
        if (seta.classList.contains('fa-arrow-right')) {
            seta.classList.remove('fa-arrow-right');
            seta.classList.add('fa-arrow-down');
        } else {
            seta.classList.remove('fa-arrow-down');
            seta.classList.add('fa-arrow-right');
        }
    });
});

//Funcionamento do video e botão
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    var overlayImage = document.getElementById('overlayImage');
    var overlayImage2 = document.getElementById('overlayImage2');
    var overlayed = true;
    var paused = false;
    buttoned = false;
    var intervalId = null; // Variável para armazenar o ID do setInterval

    // Iniciar vídeo após 1 segundo
    setTimeout(function() {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        video.loop = false; // Definir loop como false inicialmente
        overlayImage.style.display = 'block'; // Mostrar overlay quando o vídeo iniciar
        video.play();
    }, 1000); // Inicia o vídeo 1 segundo após o carregamento da página

    // Função para verificar e reiniciar o vídeo
    function checkAndRestartVideo() {
        if (overlayed && video.currentTime >= 15) {
            video.currentTime = 0;
        } else if (!overlayed && !buttoned && video.currentTime >= 222) {
            document.getElementById('botao-30s').style.display = 'block'; // mostra o botão de compra
            buttoned = true;
            clearInterval(intervalId); // Limpar o intervalo quando não for mais necessário
        }
    }

    // Intervalo para verificar e reiniciar o vídeo
    intervalId = setInterval(checkAndRestartVideo, 1000); // Verifica a cada segundo
    // Evento de reprodução no vídeo
    video.addEventListener('click', function() {
        if (overlayed) {
            overlayImage.style.display = 'none'; // Ocultar o overlay quando o vídeo é reproduzido
            video.muted = false; // Ativar som ao reiniciar o vídeo
            video.currentTime = 0;
            overlayed = false;
        } else {
            if (video.paused) {
                video.play();
                overlayImage2.style.display = 'none'; // Ocultar o overlay de pausa
            } else {
                video.pause();
                overlayImage2.style.display = 'block'; // Mostrar overlay de pausa
            }
        }
    });

    // Atualizar barra de progresso
    var progressBar = document.getElementById('videoProgress');
    video.addEventListener('timeupdate', function() {
        var value = (video.currentTime / video.duration) * 100;
        progressBar.value = value;
    });
});