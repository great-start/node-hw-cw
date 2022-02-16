// Завдання на практику


const path = require('path');
const fs = require('fs');


// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
fs.writeFile(path.join(__dirname, 'data.txt'), 'usersData', err => {
    if (err) {
        throw err;
    }
    fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        fs.writeFile(path.join(__dirname, 'data2.txt'), data, err => {
            if (err) {
                throw err;
            }
            console.log('The task1 is done!');
        });
    });
});


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
const task2Data = 'Hello Vanya! How do you do?';

fs.writeFile(path.join(__dirname, 'firstFile.txt'), task2Data, err => {
    if (err) {
        throw err;
    }
    fs.readFile(path.join(__dirname, 'firstFile.txt'), 'utf8', (err, tempData) => {
        if (err) {
            throw err;
        }
        fs.mkdir(path.join(__dirname, 'task2'), err => {
            if (err) {
                throw err;
            }
            fs.writeFile(path.join(__dirname, 'task2', 'secondFile.txt'), tempData, err => {
                if (err) {
                    throw err;
                }
                fs.unlink(path.join(__dirname, 'firstFile.txt'), err => {
                    if (err) {
                        throw err;
                    }
                    console.log('Task2 is done! File firstFile.txt deleted! SecondFile.txt was created and data has been written to file. ');
                })
            })
        })
    })
})


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

// - Завдання 3, варіант 1. Створення файлів у директорії, і очистка файлів при виклику фукції
fs.mkdir(path.join(__dirname, 'task3'),err => { if(err) {throw err} });

fs.writeFile(path.join(__dirname, 'task3', 'task3File1.txt'), 'task3data1', err => {
    if (err) {
        throw err;
    }
    fs.writeFile(path.join(__dirname, 'task3', 'task3File2.txt'), 'task3data2', err => {
        if (err) {
            throw err;
        }
        fs.writeFile(path.join(__dirname, 'task3', 'task3File3.txt'), 'task3data3', err => {
            if (err) {
                throw err;
            }
        });
    });
});

task3Function();

function task3Function() {
    fs.readdir(path.join(__dirname, 'task3'), (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(file => {
            fs.truncate(path.join(__dirname, 'task3', file), err => {
                if (err) {
                    throw err;
                }
            });
        })
        console.log('All files was cleared!')
    });

}


// - Завдання 3, варіант 2. Замість файлів створення і перейменування папок, додати до назви префікс _new
fs.mkdir(path.join(__dirname, 'task3', 'task3dir1'),{recursive: true}, err => {
    if (err) {
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'task3', 'task3dir2'), err => {
        if (err) {
            throw err;
        }
        fs.mkdir(path.join(__dirname, 'task3', 'task3dir3'), err => {
            if (err) {
                throw err;
            }
        });
    });
});

task3Function2();

function task3Function2() {
    fs.readdir(path.join(__dirname, 'task3'), (err, dir) => {
        if (err) {
            throw err;
        }
        dir.forEach(dir => {
            fs.rename(path.join(__dirname, 'task3', dir), path.join(__dirname, 'task3', `${dir}_new`), err => {
                if (err) {
                    throw err;
                }
            });
        })
        console.log('All directories was renamed!')
    });
}

