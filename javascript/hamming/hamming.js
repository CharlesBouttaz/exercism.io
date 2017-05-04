let Hamming = function () {
};

Hamming.prototype.compute = function (a, b) {
    if (a.length !== b.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    return zip([a.split(''), b.split('')]).reduce((acc, pair) => {
        return pair[0] === pair[1] ? acc : acc + 1;
    }, 0);
};

function zip(arrays) {
    return arrays[0].map(function (_, i) {
        return arrays.map(function (array) {
            return array[i]
        })
    });
}

module.exports = Hamming;