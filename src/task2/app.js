function swapCase(str) { 
    let result = ''; 
 
    for (let i = 0; i < str.length; i++) { 
        let char = str.charAt(i); 
        if (char === char.toUpperCase()) { 
            result += char.toLowerCase(); 
        } else { 
            result += char.toUpperCase(); 
        } 
    } 
    return result; 
} 
 
console.log(swapCase('FaDiMe')); 
console.log(swapCase('jAvaScRIPt')); 
console.log(swapCase('SaLaM'));