export const morse = {
    "Α": ".-",
    "Ά": ".-",
    "Β": "-...",
    "Γ": "--.",
    "Δ": "-..",
    "Ε": ".",
    "Έ": ".",
    "Ζ": "--..",
    "Η": "....",
    "Ή": "....",
    "Θ": "-.-.",
    "Ι": "..",
    "Ί": "..",
    "Κ": "-.-",
    "Λ": ".-..",
    "Μ": "--",
    "Ν": "-.",
    "Ξ": "-..-",
    "Ο": "---",
    "Ό": "---",
    "Π": ".--.",
    "Ρ": ".-.",
    "Σ": "...",
    "Τ": "-",
    "Υ": "-.--",
    "Ύ": "-.--",
    "Φ": "..-.",
    "Χ": "----",
    "Ψ": "--.-",
    "Ω": ".--",
    "Ώ": ".--",
    ";": "..--..",
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    '"': ".-..-.",
    "(": "-.--.-",
    ")": "-..-.",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
}

const swap = (json) => {
    var ret = {};
    for (var key in json) {
        if (!key.match(/^(Ά|Έ|Ή|Ί|Ό|Ύ|Ώ)$/)) {
            ret[json[key]] = key;
        }
    }
    return ret;
}

const removeSlash = (text) => {
    const allLetters = text.split('');
    let letter = allLetters[0];
    let i = 0;
    while (letter === '/' && i<allLetters.length) {
      i++;
      letter = allLetters[i]
    }
  
    return text.substring(i)
}

export const translateText = (text) => {
    const txt = text.toUpperCase();
    const words = txt.split(" ")
    let newText = "";
    words.forEach(word => {
      const letters = word.split('')
      for(let i=0; i<letters.length; i++) {
        if (letters[i] == '\n') {
          if (i !== 0 && i!==letters.length-1 && letters[i+1]!=='\n') newText += '//';
          continue
        }
        newText += morse[letters[i]] || '?';
        if (i != letters.length-1 && letters[i+1]!='\n') newText+='/'
      }
      if (word!='')
        newText += '//'
    })

    newText = newText.substring(0, newText.length - 2)
    newText = removeSlash(newText)

    return newText;
}

export const translateMorse = (text) => {
    const characters = swap(morse);
    const words = text.split('//');
    let newText = '';
    words.forEach(word => {
        letters = word.split('/');
        letters.forEach(letter => {
            if (letter !== '')
                newText += characters[letter] || '?';
        })
        newText += ' ';
    })
    return newText
}

export const getMorseArray = () => {
    const list = [];
    let i=0;
    Object.entries(morse).forEach(([key, value]) => {
        if (!key.match(/^(Ά|Έ|Ή|Ί|Ό|Ύ|Ώ)$/)) {
            list.push({ text: `${key} = ${value}`, key: String(i) });
            i++;
        }
    })
    return list
}