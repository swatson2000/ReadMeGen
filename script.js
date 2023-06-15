const fs = require('fs');
const readmeContent = `


This is a simple example that demonstrates how to generate a README file dynamically using Node.js.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

- Node.js: You can download and install it from the official Node.js website (https://nodejs.org)

## Installation

1. Clone the project repository to your local machine:
   
`;

// Write the content to the README file
fs.writeFileSync('README.md', readmeContent);

console.log('README file generated!');
