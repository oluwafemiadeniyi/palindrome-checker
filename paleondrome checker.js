//created the palindrome function and transform the input string
function palindrome(str) {
    str=str.toLowerCase()
    str=str.split('')
    //create a version of the str list in reverse order
    let str1l=str.reduce(function(revstr,a){if(!/[^a-z0-9]/i.test(a)) revstr.unshift(a); return revstr},[])
    console.log(str1l)
    //create another version of the str list in the same order as the input string
    let str2l=str.reduce(function(revstr,a){if(!/[^a-z0-9]/i.test(a)) revstr.push(a); return revstr},[])
    console.log(str2l)}