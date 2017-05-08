let Pangram = function(input) {
    this.input = input;
};

Pangram.prototype.isPangram = function () {
    let lettersPresent = this.input.split('')
        .map(char => char.toLocaleLowerCase())
        .filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        .reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});

    //Should be able to include this line in the pipeline by wrapping the object into an array
    return Object.keys(lettersPresent).length === 26;
};

module.exports = Pangram;

