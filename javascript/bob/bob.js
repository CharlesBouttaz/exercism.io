let Bob = function () {

};

const isSilent = (input) => input.trim().length === 0;
const isShouting = (input) => input.toUpperCase() === input && new RegExp('[A-Z]').test(input);
const isAsking = (input) => input.endsWith('?');
const isDefault = () => true;

const strategies = [
    {predicate: isSilent, response: 'Fine. Be that way!'},
    {predicate: isShouting, response: 'Whoa, chill out!'},
    {predicate: isAsking, response: 'Sure.'},
    {predicate: isDefault, response: 'Whatever.'},
];

Bob.prototype.hey = function (input) {
    return strategies
        .find((strategy) => strategy.predicate.apply(this, [input]) && strategy.response)
        .response;
};

module.exports = Bob;