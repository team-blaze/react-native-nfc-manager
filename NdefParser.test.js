let parser = require('./NdefParser')

test('export api', () => {
    expect(!!parser.parseUri).toBe(true)
    expect(!!parser.ndef).toBe(true)
})
