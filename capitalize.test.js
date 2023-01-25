const capitalize = require('./capitalize')

test('abc is equal to Abc', ()=>{
    expect(capitalize('abc')).toBe("Abc");
});



