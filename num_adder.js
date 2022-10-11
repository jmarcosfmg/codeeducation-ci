const input = process.argv

module.exports = {
    add: addnums
}

function addnums(num1, num2){
    let result = parseInt(num1) + parseInt(num2)
    console.log(result)
    return result
}