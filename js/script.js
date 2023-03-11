const log = console.log;
const fs = require('fs');
const path = require('path');
// SELECTORS
let submit_btn = document.querySelector('.submit-btn')
let pdf_title = document.getElementById('pdf-title')
let text_content = document.getElementById('textarea');
// EVENT LISTENERS
submit_btn.addEventListener('click', createPDF);
// FUNCTIONS
function createPDF() { 
    let content = `${pdf_title.value}\n${text_content.value}`
    // INITIALIZE PATH TO DIRECTORY
    let dir_path = path.join(__dirname, 'pdfs');
    let file_name = 'output.txt';
    // INITIALIZE FILE PATH
    let file_path = path.join(dir_path, file_name);
    // CHECK IF WORKING DIRECTORY EXISTS
    if (!fs.existsSync(dir_path)) {
        fs.mkdir(dir_path, err => {
            if (err) console.error(`${err.name}\t${err.message}`);
            fs.appendFile(file_name, content, (err) => {
                if (err) console.error(`${err.name}\t${err.message}`);
            });
        });
    } else {
        log('Directory already exists!');
    }
}


