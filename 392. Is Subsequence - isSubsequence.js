/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let j=0;
    for (let i=0; i<t.length; i++){
        if(t[i] === s[j]){
            j++
        }
        if(j === s.length){
            return true;
        }

    }

    return false
};

//time complexity: 0(n) since we are suing only one loop
// complexity: 0(1) since we are using only one variable to store index;