export const loginUser = async (_pseudo, _password) => {
    let url = 'http://localhost:4444/user';
    if(_pseudo.length !== 0){
        url += '?pseudo=' + _pseudo;
    }
    if(_password.length !== 0){
        url += '?password=' + _password;
    }
    const response = await fetch(
        url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: {
                pseudo: _pseudo,
                password: _password
            }
        }
    )
    const login = await response.json()
    return login
}
