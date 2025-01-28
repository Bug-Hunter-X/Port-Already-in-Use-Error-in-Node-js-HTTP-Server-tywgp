# Node.js Port Already in Use Error

This repository demonstrates a common error encountered when developing Node.js applications: the 'port already in use' error.  This occurs when you attempt to start a server on a port that is already occupied by another process.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows how to handle this gracefully.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.  If port 8080 is free, it will work. If 8080 is in use, it will fail.
3. Run `node bugSolution.js`. This improved version handles the error.

## Solution
The solution involves using the `listen` method's callback function to handle the `EADDRINUSE` error (Address already in use).