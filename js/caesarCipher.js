exports.caesarCipher = function(string, shift) {
    const arr = string.split('')
    for (let x in arr){
        if (arr[x].match(/[a-zA-Z]/g)){
            if (arr[x].charCodeAt() >= 97 && arr[x].charCodeAt() <= 122) {
                if (arr[x].charCodeAt() + shift < 97){
                    arr[x] = (String.fromCharCode(122 - (96 - (arr[x].charCodeAt() + shift))))
                } else if (arr[x].charCodeAt() + shift > 122) {
                    arr[x] = (String.fromCharCode(97 + ((arr[x].charCodeAt() + shift)-123)))
                } else {
                    arr[x] = String.fromCharCode(arr[x].charCodeAt() + shift)
                }
            }else if (arr[x].charCodeAt() >= 65 && arr[x].charCodeAt() <= 90){
                if(arr[x].charCodeAt() + shift < 65){
                arr[x] = (String.fromCharCode(90 - (64 - (arr[x].charCodeAt() + shift))))
                } else if (arr[x].charCodeAt() + shift > 90) {
                    arr[x] = (String.fromCharCode(65 + ((arr[x].charCodeAt() + shift)-91)))
                } else {
                    arr[x] = String.fromCharCode(arr[x].charCodeAt() + shift)
                }
            }
        }
        
    }
    return arr.join('')
};
