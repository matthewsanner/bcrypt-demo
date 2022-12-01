const bcrypt = require('bcrypt');

// generates salt separately
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

// generates salt as part of the hash
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('Logged you in!')
    }
    else {
        console.log('Incorrect password')
    }
}

// hashPassword('monkey');

login('monkey!', '$2b$12$v4OJ8eLqGcOEG1XjVtRxY.AI2f2bFZm4RoN2Ge0Eplo80RRt39.96');