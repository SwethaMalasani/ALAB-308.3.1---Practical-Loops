// part1
// Loop through all numbers from 1 to 100.
for(let i=0;i<=100;i++)
    {
    console.log('This is number' +" "+i);
    }

    // If a number is divisible by 3, log “Fizz.”

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
    }

    //If a number is divisible by 5, log “Buzz.”

    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            console.log("Buzz");
        }
    }

    //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    for (let i = 1; i <= 50 ; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if(i%5==0)
        {
            console.log("Buzz");
        }
    }

    // If a number is not divisible by either 3 or 5, log the number.
    for (let i = 1; i <= 50 ; i++) {
        if (i % 3 != 0) {
            console.log('This is not divisible by 3'+" "+i);
        }
        else if(i%5!=0)
        {
            console.log('This is not divisible by 5'+" "+i);
        }
    }


    // Part 2: Prime Time
    function isPrime(num) {
        if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false; // num is divisible by i, so it's not prime
            }
        }
        return true; // num is prime
    }
    
    // Declare an arbitrary number n
    let n = 9;  // Example: You can change this value to test different cases
    
    // Loop to find the next prime number
    let current = n;
    while (true) {
        if (isPrime(current)) {
            console.log(current);  // Log the next prime number
            break;  // Exit the loop once the prime is found
        }
        current++;  // Increment to check the next number
    }