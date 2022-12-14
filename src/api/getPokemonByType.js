
export const getPokemonByType = async (_type) => {
    let url = 'http://localhost:4444/pokemon/type';
    const response = await fetch(
        url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                type: _type
            })
        }
    )
}