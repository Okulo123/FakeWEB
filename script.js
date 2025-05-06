function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}
document.querySelector('.login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('帳密輸入框不得為空');
    } else {
        alert('這是釣魚網站你被騙了~');
    }
});

document.querySelector('img[alt="巴哈姆特 - 華人最大電玩社群網站"]').addEventListener('click', function () {
    alert('這是釣魚網站你被騙了~');
});