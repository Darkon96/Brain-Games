import readlineSync from 'readline-sync';

const question = () => {
    const names = readlineSync.question('May I have your name? ');
    console.log('Hello ' + names + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    return names;
}

export default question;