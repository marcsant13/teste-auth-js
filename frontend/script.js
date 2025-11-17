const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');
const btnCadastro = document.getElementById('btnCadastro');
const erro = document.getElementById('erro');

btnLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    erro.style.display = 'none';

    const em = email.value.trim();
    const pw = senha.value.trim();

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: em, senha: pw }),
            mode: 'cors'
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            window.location.href = 'teste.html';
        } else {
            erro.textContent = data.mensagem;
            erro.style.display = 'block';
        }
    } catch (error) {
        console.error(error);
        erro.textContent = 'Erro ao conectar ao servidor';
        erro.style.display = 'block';
    }
});

btnCadastro.addEventListener('click', async (e) => {
    e.preventDefault();
    erro.style.display = 'none';

    const em = email.value.trim();
    const pw = senha.value.trim();

    try {
        const response = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: em, senha: pw }),
            mode: 'cors'
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            window.location.href = 'teste.html';
        } else {
            erro.textContent = data.mensagem;
            erro.style.display = 'block';
        }
    } catch (error){
        console.error(error);
        erro.textContent = 'Erro ao conectar ao servidor';
        erro.style.display = 'block';
    }
});