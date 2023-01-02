/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {

    let sMap={}, tMap={};

    for (let i=0; i< s.length; i++){

        if(!sMap[s[i]]){
            sMap[s[i]] = t[i]
        }
        else if (sMap[s[i]] !== t[i]) {
            return false;
        }

         if(!tMap[t[i]]){
            tMap[t[i]] = s[i]
        }
        else if (tMap[t[i]] !== s[i]) {
            return false;
        }

    }

    return true;
    
};

// time comlexity 0(n) since there is one loop
// Space complexity 0(n) since we are storing the s t into maps. 
 
// function isIsomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   const sChars = new Set(s);
//   const tChars = new Set(t);
//   if (sChars.size !== tChars.size) {
//     return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
//       return false;
//     }
//   }
//   return true;
// }