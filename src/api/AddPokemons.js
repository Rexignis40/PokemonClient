export const AddPokemon = async (_name, _types, _num) => {
    await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: _name,
                num: _num,
                type: _types
            })
        }
    );
}