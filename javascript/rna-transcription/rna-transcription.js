let DnaTranscriber = function () {
};

const complementDictionary = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A',
};

//Maybe there is a better way...
const error = () => {
    throw new Error('Invalid input')
};

DnaTranscriber.prototype.toRna = function (sequence) {
    return sequence
        .split('')
        .map(nucleotide => complementDictionary[nucleotide] || error.call())
        .join('');
};

module.exports = DnaTranscriber;