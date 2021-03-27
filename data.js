function Data() {
    let json = __dirname + '/class.json';
    let obj = JSON.parse(json);

    return() => {
        for (let i = 0; i < obj.length; i++) {
            console.log(obj[i]);            
        }
    }
}