function fetchData (flag) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(flag) {
                resolve('peanut butter');
            } else {
                reject('not peanut butter');
            }
        }, 1000)
    })
}
module.exports = fetchData;