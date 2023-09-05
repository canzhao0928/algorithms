// // 2227. Encrypt and Decrypt Strings
// //
// /**
//  * @param {character[]} keys
//  * @param {string[]} values
//  * @param {string[]} dictionary
//  */
// var Encrypter = function (keys, values, dictionary) {
//   this.keys = keys;
//   this.values = values;
//   this.dictionary = dictionary;
// };

// /**
//  * @param {string} word1
//  * @return {string}
//  */
// Encrypter.prototype.encrypt = function (word1) {
//   const wordList = word1.split("");
//   let newList = [];
//   for (let i = 0; i < wordList.length; i++) {
//     let index = this.keys.indexOf(wordList[i]);
//     if (index !== -1) {
//       newList.push(this.values[index]);
//     }
//   }

//   return newList.join("");
// };

// /**
//  * @param {string} word2
//  * @return {number}
//  */
// Encrypter.prototype.decrypt = function (word2) {
//   if (word2.length < 2 || word2.length % 2) return 0;
//   const wordList = word2.split("");
//   const decryptList = [];
//   let result = 0;
//   for (let i = 0; i < wordList.length; i += 2) {
//     let decryptChar = [];
//     const word = wordList.slice(i, i + 2).join("");
//     for (let j = 0; j < this.values.length; j++) {
//       if (this.values[j] === word) {
//         decryptChar.push(this.keys[j]);
//       }
//     }
//     if (decryptChar.length === 0) {
//       return 0;
//     } else {
//       decryptList.push(decryptChar);
//     }
//   }

//   for (let i = 0; i < this.dictionary.length; i++) {
//     const string = this.dictionary[i].split("");
//     let include = true;
//     if (string.length !== decryptList.length) {
//       continue;
//     } else {
//       for (let j = 0; j < string.length; j++) {
//         if (!decryptList[j].includes(string[j])) {
//           include = false;
//           break;
//         }
//       }
//       if (include === true) result += 1;
//     }
//   }
//   return result;
// };

// /**
//  * Your Encrypter object will be instantiated and called as such:
//  * var obj = new Encrypter(keys, values, dictionary)
//  * var param_1 = obj.encrypt(word1)
//  * var param_2 = obj.decrypt(word2)
//  */

//using hashtable, use encrypt to implement decrypt
/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function (keys, values, dictionary) {
  this.dictionary = dictionary;

  let hash = {};
  for (let i = 0; i < keys.length; i++) {
    if (!hash[keys[i]]) {
      hash[keys[i]] = values[i];
    }
  }

  this.hashkeys = hash;
};

/**
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function (word1) {
  const wordList = word1.split("");
  let newList = [];
  for (let i = 0; i < wordList.length; i++) {
    if (this.hashkeys[wordList[i]]) {
      newList.push(this.hashkeys[wordList[i]]);
    } else {
      return "";
    }
  }
  return newList.join("");
};

/**
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function (word2) {
  let count = 0;
  for (let i = 0; i < this.dictionary.length; i++) {
    if (this.encrypt(this.dictionary[i]) === word2) {
      console.log(this.dictionary[i]);
      count++;
    }
  }
  return count;
};

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
