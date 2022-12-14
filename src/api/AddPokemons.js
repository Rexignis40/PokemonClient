export const AddPokemon = async (_name, _genera, _types, _num, _img) => {
    await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: _name,
                genera: _genera,
                num: _num,
                type: _types,
                sprites: _img
            })
        }
    );
}