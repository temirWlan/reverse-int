const reverse = n => Math.abs(parseInt(String(n).split('').reverse().join('').replace(/^[0-]$/)));

module.exports = reverse;