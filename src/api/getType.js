export const getType = async (_type) => {
    let url = 'http://localhost:4444/type';
    if(_type.length !== 0){
        url += '?type=' + _type;
    }
    const response = await fetch(
        url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const types = await response.json()
    return types
}