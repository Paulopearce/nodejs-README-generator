  // * Questions
const { prompt } = require('inquirer')
const fs = require('fs')
console.log('Welcome to the good README generator')

prompt([
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email adress:'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter the name of the project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of the project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose the license used in the project:',
    choices:['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter commands used to install dependencies:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the commands used to run tests:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter how to use the repo:'
  },
  {
  type: 'input',
  name: 'contributing',
  message: 'Enter information about how to contribute to the code:',
  }
])
  .then(answers =>{
    if(answers.license === 'MIT'){
      fs.appendFile('README.md',`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      
      `, err =>{if(err){console.log(err)}})
    }
    if(answers.license === 'APACHE 2.0'){
      fs.appendFile('README.md',`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      
      `, err =>{if(err){console.log(err)}})
    }
    if(answers.license === 'BSD 3'){
      fs.appendFile('README.md',`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
      
      `, err =>{if(err){console.log(err)}})
    }
    if(answers.license === 'GPL 3.0'){
      fs.appendFile('README.md',`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      
      `, err =>{if(err){console.log(err)}})
    }
      
      
      fs.appendFile('README.md', `
  # title

   ${answers.title}

  # description

   ${answers.description}

  # installation

   ${answers.installation}

  # usage

   ${answers.usage}

  # license

   ${answers.license}

  # tests

   ${answers.tests}

  # contributing

   ${answers.contributing}

   # questions

   If you have an questions send an email to: ${answers.email}.

   https://github.com/${answers.github}

  # table-of-contents
  
  1. [title](#title)
  2. [description](#description)
  3. [installation](#installation)
  4. [usage](#usage)
  5. [license](#license)
  6. [tests](#tests)
  7. [contributing](#contributing)
  8. [questions](#questions)
  9. [table of contents](#table-of-contents)

  
  `, err =>{if(err){console.log(err)}})
  })
  .catch(err=>console.log(err))