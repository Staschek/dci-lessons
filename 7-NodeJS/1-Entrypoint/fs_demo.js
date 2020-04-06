const fs = require('fs')
const path = require('path')

//create Folder
//console.log(fs, path)
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     // console.log(err)
//     console.log('Folder created ...')
// })

//Create and write a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
    'Hello FBW4 Heroes!\n', err => {
        if (err) throw err
        console.log('File written ...')

        //File Append
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
            'I Love Node JS', err => {
                if (err) throw err
                console.log('text append ...')

            })
    })


// fs.mkdir(path.join(__dirname, '/useres'), {}, err => {
//     if (err) throw err
//     console.log('mkdir Done')
// })

fs.writeFile(path.join(__dirname, '/useres', 'user.json'),
    '{ "users" : ',
    err => {
        if (err) throw err
        //console.log(err)
        console.log('writeFile Done')

        fs.appendFile(path.join(__dirname, '/useres', 'user.json'),
            '["Omer"', err => {
                if (err) throw err
                console.log('append user ...')
            })

        fs.appendFile(path.join(__dirname, '/useres', 'user.json'),
            ', "Sascha"', err => {
                if (err) throw err
                console.log('append user ...')
            })

        fs.appendFile(path.join(__dirname, '/useres', 'user.json'),
            ', "Stefan"]}', err => {
                if (err) throw err
                console.log('append user ...')
            })



        fs.readFile(path.join(__dirname, '/useres', 'user.json'),
            'utf8',
            (err, datas) => {
                if (err) throw err
                console.log(datas)
            })
    })