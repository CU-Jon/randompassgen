// Word lists for phonetic pronunciation
const DEFAULT_WORD_LIST = [
  "apple", "bestbuy", "coffee", "drip", "egg", "fruit", "golf", "hulu", 
  "iphone", "jack", "korean", "laptop", "music", "nut", "omelet", "park", 
  "queen", "rope", "skype", "tokyo", "usa", "visa", "walmart", "xbox", 
  "yelp", "zip"
]

const NATO_WORD_LIST = [
  "alfa", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", 
  "india", "juliett", "kilo", "lima", "mike", "november", "oscar", "papa", 
  "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", 
  "x-ray", "yankee", "zulu"
]

// Character sets
const LOWER_LETTERS = "abcdefghjkmnpqrstuvwxyz"
const UPPER_LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ"
const NUMBERS = "23456789"
const SYMBOLS = "!#$%&*+-=?@^_"

const SIMILAR_LOWER = "ilo"
const SIMILAR_UPPER = "IO"
const SIMILAR_NUMBERS = "01"
const SIMILAR_SYMBOLS = "|"

const AMBIGUOUS_SYMBOLS = "{}[]()\/'\"`~,;:.<>\\"

export function generatePassword(settings) {
  const {
    length,
    includeSymbols,
    includeNumbers,
    includeLowercase,
    includeUppercase,
    excludeSimilar,
    excludeAmbiguous
  } = settings

  let lowerLetters = LOWER_LETTERS
  let upperLetters = UPPER_LETTERS
  let numbers = NUMBERS
  let symbols = SYMBOLS

  // Add similar characters if not excluding them
  if (!excludeSimilar) {
    lowerLetters += SIMILAR_LOWER
    upperLetters += SIMILAR_UPPER
    numbers += SIMILAR_NUMBERS
    symbols += SIMILAR_SYMBOLS
  }

  // Add ambiguous characters if not excluding them
  if (!excludeAmbiguous) {
    symbols += AMBIGUOUS_SYMBOLS
  }

  let letterList = ""
  let passwordLength = 0

  // Build character set and count required character types
  if (includeLowercase) {
    letterList += lowerLetters
    passwordLength++
  }
  if (includeUppercase) {
    letterList += upperLetters
    passwordLength++
  }
  if (includeNumbers) {
    letterList += numbers
    passwordLength++
  }
  if (includeSymbols) {
    letterList += symbols
    passwordLength++
  }

  if (passwordLength === 0) {
    return "You must select at least one character set!"
  }

  const listLength = letterList.length
  const limit = length - passwordLength
  let password = ""

  // Generate random characters for the bulk of the password
  for (let i = 0; i < limit; i++) {
    const randomIndex = Math.floor(Math.random() * listLength)
    password += letterList[randomIndex]
  }

  // Ensure at least one character from each selected character set
  if (includeUppercase) {
    password = addRandomCharacter(upperLetters, limit, password)
    passwordLength++
  }
  if (includeLowercase) {
    password = addRandomCharacter(lowerLetters, limit + (includeUppercase ? 1 : 0), password)
    passwordLength++
  }
  if (includeNumbers) {
    password = addRandomCharacter(numbers, limit + (includeUppercase ? 1 : 0) + (includeLowercase ? 1 : 0), password)
    passwordLength++
  }
  if (includeSymbols) {
    password = addRandomCharacter(symbols, length - 1, password)
  }

  return password
}

function addRandomCharacter(characterSet, limit, password) {
  const randomChar = characterSet[Math.floor(Math.random() * characterSet.length)]
  const randomPosition = Math.floor(Math.random() * (limit + 1))
  return password.substring(0, randomPosition) + randomChar + password.substring(randomPosition)
}

export function generatePhonetic(password, useNATO = false) {
  const wordList = useNATO ? NATO_WORD_LIST : DEFAULT_WORD_LIST
  let result = ""

  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i)
    
    if (charCode >= 65 && charCode <= 90) { // Uppercase A-Z
      const index = charCode - 65
      result += wordList[index]?.toUpperCase() || password[i]
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase a-z
      const index = charCode - 97
      result += wordList[index] || password[i]
    } else {
      result += password[i]
    }
    result += " "
  }

  return result.trim()
}

export function calculatePasswordStrength(password, settings) {
  const { length, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = settings
  
  let score = 0
  
  // Length scoring
  if (length >= 12) score += 2
  else if (length >= 8) score += 1
  
  // Character variety scoring
  if (includeLowercase) score += 1
  if (includeUppercase) score += 1
  if (includeNumbers) score += 1
  if (includeSymbols) score += 1
  
  // Determine strength level
  if (score >= 6) {
    return "Password Strength: Very Strong"
  } else if (score >= 4) {
    return "Password Strength: Strong"
  } else if (score >= 3) {
    return "Password Strength: Medium"
  } else {
    return "Password Strength: Weak"
  }
}
