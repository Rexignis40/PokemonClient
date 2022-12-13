export const DeletePokemon = async (_uid) => {
    await fetch(
        'http://localhost:4444/pokemon/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                uid: _uid
            })
        }
    );
}