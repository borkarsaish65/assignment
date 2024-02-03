function asciiOperationOnString(inputString) {
    const asciiArray = [];
    const changeTracker = {};
  
    for (let i = 0; i < inputString.length; i++) {
      asciiArray.push(inputString[i].charCodeAt(0));
    }
  
    for (let i = 0; i < asciiArray.length; i++) {
      const currentAscii = asciiArray[i];
  
      if (currentAscii % 2 === 0) {
        const nextIndex = i + 1;
  
        if (nextIndex < asciiArray.length && !changeTracker[nextIndex]) {
          let newCharacter = asciiArray[nextIndex] + (currentAscii % 7);
  
          newCharacter = handleOutOfRange(newCharacter);
  
          asciiArray[nextIndex] = newCharacter;
          changeTracker[nextIndex] = true;
        }
      } else {
        const prevIndex = i - 1;
  
        if (prevIndex >= 0 && !changeTracker[prevIndex]) {
          let newCharacter = asciiArray[prevIndex] - (currentAscii % 5);
  
          newCharacter = handleOutOfRange(newCharacter);
  
          asciiArray[prevIndex] = newCharacter;
          changeTracker[prevIndex] = true;
        }
      }
    }
  
    const resultString = asciiArray
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
    return resultString;
  }
  
  function handleOutOfRange(value) {
    return value > 127 || value < 0 ? 83 : value;
  }
  
  const inputString = "sHQen}";
  console.log(asciiOperationOnString(inputString));
  