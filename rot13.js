function rot13(message){

  var encrypted = message.split('').map(char => { 
      let ascii = char.charCodeAt()
      if (ascii >= 97 && ascii <= 122) { 
          if(ascii+13 > 122) {
              return String.fromCharCode(97 + 12 - (122 - ascii))
            }
          return String.fromCharCode(ascii+13)
      }
      else if (ascii >= 65 && ascii <= 90) { 
          if(ascii+13 > 90) {
              return String.fromCharCode(65 + 12 - (90 - ascii))
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