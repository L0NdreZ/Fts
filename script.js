// Simule um banco de dados de usuários
const usersDatabase = [
    { username: 'usuario1', password: 'senha1' },
    { username: 'usuario2', password: 'senha2' },
    // Adicione mais usuários aqui
];

// Função para verificar as credenciais do usuário
function authenticateUser(username, password) {
    return usersDatabase.find(user => user.username === username && user.password === password);
}

// Event listener para o formulário de login
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const authenticatedUser = authenticateUser(usernameInput, passwordInput);

    if (authenticatedUser) {
        alert('Login bem-sucedido! Redirecionando para a página principal.'); // Você pode redirecionar o usuário para a página principal aqui
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
});
