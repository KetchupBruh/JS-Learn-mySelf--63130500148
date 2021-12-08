function random(array = []) {
    function randomWord(value = 0) {
        let result = [];
        for (let i = 0; i < value; i++) {
            result.push(array[Math.floor(Math.random() * array.length)]);    
        }    
            return result;    
        }    
        return randomWord;    
    }    
    
export {random};