const expect = require('expect')
const jsdom = require('mocha-jsdom')
const fs = require('fs')
const path = require('path')


describe('index', () => {
  
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })
  

  it('runs', () => {
    expect(true).to.be.true
  })
})
