function printLoadingProgress(percentage) {

    const n = percentage / 10;
    const rest = 10 - n;

    if (percentage !== 100) {

        console.log(`${percentage}% [${"%".repeat(n)}${".".repeat(rest)}]`);
        console.log('Still loading...');

    } else {

        console.log('100% Complete!');
        console.log(`${'%'.repeat(10)}`);

    }

}

printLoadingProgress(40);