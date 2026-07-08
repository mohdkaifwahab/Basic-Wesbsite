const fs = require('fs')

test('Html file containes content',()=>{
    const html = fs.readFileSync('index.html', 'utf8')

    expect(html).toContain('kaif wahab')
})