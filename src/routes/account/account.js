onMount(() => {
    let accountBtn = document.getElementById('accountBtn');
    let account = document.getElementById('account');

    accountBtn.addEventListener('click', () => {
        if (account.style.display === 'none') {
            account.style.display = 'block';
        } else {
            account.style.display = 'none';
        }
    });
});