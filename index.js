function incrementString (str) {
  if (!/\d+$/.test(str)) return str + '1';
  return str.replace(/(\d+)$/, c => (Number(c) + 1).toString().padStart(c.length, '0'));
}

module.exports = incrementString;