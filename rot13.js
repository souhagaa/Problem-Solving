var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){

  var encrypted = message.split('').map(char => { 
      let ascii = char.charCodeAt()
      if (ascii >= codea && ascii <= codez) { 
          if(ascii+13 > codez) {
              return String.fromCharCode(codea + 12 - (codez - ascii))
            }
          return String.fromCharCode(ascii+13)
      }
      else if (ascii >= codeA && ascii <= codeZ) { 
          if(ascii+13 > codeZ) {
              return String.fromCharCode(codeA + 12 - (codeZ - ascii))
            }
          return String.fromCharCode(ascii+13)
      }
      return char
  })
  return encrypted.join('')
}

/* tests
console.log("Grfg" == rot13("Test"))
console.log(rot13("Codewars") === "Pbqrjnef")
 */