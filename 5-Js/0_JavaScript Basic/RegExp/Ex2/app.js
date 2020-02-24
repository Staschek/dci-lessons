let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i;                   // Must start with ..
re = /d$/i;                  // Must ends with (one char)...
re = /world$/i;             // Must ends with (complete word)...
re = /^world$/i;           // Must include only this word ...
re = /h.llo/i;            // Matches anyONE character
re = / *llo/i;           // Matches any amount of character 0 or more instead *
re = /gre?a?y/i;        // Optional character either 'e' or 'a' or both or No char
re = /gre?a?y\?$/i;    // Escape character 

//Breackets [] - Character Sets
re = /gr[ea]y/i;                // Must be an a or e
re = /[GF]ray/i;               // Must be an G or F
re = /[^GF]ray/i;             // Must be anything but not an G or F
re = /[A-Z]ray/;             // Match any uppercase letter
re = /[a-z]ray/;            // Match any lowercase letter
re = /[A-Za-z]ray/;        // Match any  letter
re = /[ä-üß]ray/;         // other language characters
re = /[0-9]ray/;         // Match any digit
re = /[0-9][0-9]ray/;   // Match two digit after each other
re = /[@]ray/;         // any characters inside the brackets

//Braces {} - Quantifiers
re = /Hel{2}o/i;                //Must Occure exactly {n} times at this position
re = /Hel{2,4}o/i;             // Must occur exactly {min, max} amount of times
re = /Hel{2,}o/i;             // Must occur at least {n} times

// Paretheses () - Grouping
re = /[0-9]x{3}/              // Matches '3xxx'
re = /^([0-9]x){3}$/         // Matches exactly 3 times '3x5x7x'

// Shorthand Character Classes
re = /\w/;                       // Word character - alphanumeric or _
re = /\w+/;                     // + = one or more
re = /\W/;                     // Non-Word character
re = /\d/;                    // Match any digit
re = /\d+/;                  // Match any digit 0 or more times
re = /\D/;                  // Match any Non-digit
re = /\s/;                 // Match whitespace char
re = /\S/;                // Match non-whitespace char
re = /\bHell/i;          // Word {b}oundary (exactly where u set the boundary)

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxcydjekdj';

//Log results
const result = re.exec(str);
console.log(result)

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does not match ${re.source}`)        
    }
}

reTest(re, str);