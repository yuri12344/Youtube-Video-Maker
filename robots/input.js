const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    maximumSentences: 5
  }

  content.lang = askAndReturnLanguage()
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  state.save(content)

  function askAndReturnLanguage() {
    const languages = ['pt', 'en', 'es', 'ru', 'ja']
    const selectedLanguageIndex = readline.keyInSelect(languages, 'Select an option: ')
    const selectedLanguageText = languages[selectedLanguageIndex]

    return selectedLanguageText
  }

  function askAndReturnSearchTerm() {
    return readline.question('Type a therme to search in Wikipedia: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Whos is it', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Select an option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

}

module.exports = robot
