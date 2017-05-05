let DnaTranscriber = function () {
};

const complementDictionary = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A',
};

DnaTranscriber.prototype.toRna = function (sequence) {
    return sequence
        .split('')
        .map(nucleotide => {
            //Question : Can I get rid of this if statement ?
            if (!complementDictionary[nucleotide]) {
                throw new Error('Invalid input')
            }
            return complementDictionary[nucleotide]
        })
        .join('');
};

// Option 1 : check the input and fail fast.
// Disavantage : we loop two times over the array
//sequence
//    .split('')
//    .filter(input => !Object.keys(complementDictionary).includes(input))
//    .map(input => {throw new Error('Invalid input')});

module.exports = DnaTranscriber;