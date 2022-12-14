export const getType = async (_type) => {
    let url = 'http://localhost:4444/type';
    await fetch(
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