let Pangram = function(input) {
    this.input = input;
};

Pangram.prototype.isPangram = function () {
    const isLetter = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    let lettersPresent = this.input.split('')
        .map(char => char.toLocaleLowerCase())
        .filter(isLetter)
        .reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});

    //Should be able to include this line in the pipeline by wrapping the object into an array
    return Object.keys(lettersPresent).length === 26;
};

module.exports = Pangram;

