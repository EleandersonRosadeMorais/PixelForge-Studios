
document.addEventListener('DOMContentLoaded', function() {
    fetch('../componentes/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header não encontrado');
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar header:', error);
        });

    fetch('../componentes/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer não encontrado');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar footer:', error);
        });

    const formulario = document.getElementById('formContato');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            let formularioValido = true;
            
            if (!nome.trim()) {
                formularioValido = false;
            }
            
            if (!email.trim() || !email.includes('@')) {
                formularioValido = false;
            }
            
            if (!assunto) {
                formularioValido = false;
            }
            
            if (!mensagem.trim()) {
                formularioValido = false;
            }
            
            if (formularioValido) {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                formulario.reset();
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        });
    }
});