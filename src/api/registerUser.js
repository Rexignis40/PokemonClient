export const registerUser = async (_pseudo, _password) => {
    await fetch(
        'https://localhost:4444/user/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                pseudo: _pseudo,
                password: _password
            })
        }
    )
}