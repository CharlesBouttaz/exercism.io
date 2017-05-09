let Bob = function () {

};

const isSilent = (input) => input.trim().length === 0;
const isShouting = (input) => input.toUpperCase() === input && new RegExp('[A-Z]').test(input);
const isAsking = (input) => input.endsWith('?');

const strategies = [
    [isSilent, 'Fine. Be that way!'],
    [isShouting, 'Whoa, chill out!'],
    [isAsking, 'Sure.'],
];

Bob.prototype.hey = function (input) {
    return strategies
        .reduce((acc, pair) => {
            if (acc === 'Whatever.') {
                return pair[0].apply(this, [input]) ? pair[1] : 'Whatever.';
            }
            return acc;
        }, 'Whatever.');
};

module.exports = Bob;