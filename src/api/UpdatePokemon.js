export const UpdatePokemon = async (_searchName, _name, _types, _num) => {
    console.log(_types);
    await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                search: {
                    name: _searchName
                },
                name: _name,
                num: _num,
                type: _types
            })
        }
    );
}

export default UpdatePokemon;