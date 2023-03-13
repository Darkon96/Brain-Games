import readlineSync from 'readline-sync';
const game = (names) => {
    for (let i = 0; i < 3;) {
        let num = Math.round(Math.random() * 100);
        console.log('Question: ' + num);
        const answer = readlineSync.question('Your answer: ');

        if (((num % 2 === 0) && (answer === 'yes')) || ((num % 2 !== 0) && (answer === 'no'))) {
            console.log('Correct!');
            i += 1;
        }
        else {
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.')
            console.log('Let\'s try again,' + names + '!')
            break;
        }
        if (i === 3) {
            console.log('Congratulations, ' + names + '!')
        }
    }
}

export default game;