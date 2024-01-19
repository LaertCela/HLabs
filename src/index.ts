import express, { Request, Response } from 'express';
import { validateInput } from './validation'; 
import { isPrime } from './isPrime';
import { isPalindrome } from './isPalindrome';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // allow all cross-origin requests
// app.use(cors({
//   origin: 'https://frontenddomain.com'
// })); 

app.post('/api/numbers', (req: Request, res: Response) => {
    const { minNumber, maxNumber, feature } = req.body;

    if (!validateInput(minNumber, maxNumber, feature)) {
        return res.status(400).send('Invalid input.');
    }

    const startTime = process.hrtime();

    let data = [];
    for (let num = minNumber; num <= maxNumber; num++) {
        if (
            (feature.includes('palindrome') && isPalindrome(num)) ||
            (feature.includes('prime') && isPrime(num))
        ) {
            data.push(num);
        }
    }

    const endTime = process.hrtime(startTime);
    const timeOfExecution = (endTime[0] * 1000) + (endTime[1] / 1000000); // Convert to milliseconds

    res.json({ data, timeOfExecution });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
