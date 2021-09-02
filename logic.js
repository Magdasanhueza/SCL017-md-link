#!/usr/bin/env node
const [,, ...args] = process.argv
console.log(`Hola ${args}`)

const mdLinks = require("./index").mdLinks

mdLinks(args[0])




