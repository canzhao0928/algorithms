/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const indices = {};
  s.split("").forEach((ch, index) => {
    if (indices[ch]) {
      indices[ch]++;
    } else {
      indices[ch] = 1;
    }
  });
  const tlist = t.split("");
  for (index = 0; index < tlist.length; index++) {
    if (indices[tlist[index]] === undefined || indices[tlist[index]] === 0)
      return false;
    else {
      indices[tlist[index]]--;
    }
  }
  return true;
};
