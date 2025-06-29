// Function that simulates package delivery
const deliverPackage = () => {
    return new Promise((resolve, reject) => {
        console.log("Package is on its way...");
        setTimeout(() => {
            const delivered = true; // Simulate success delivery status
            //const delivered = false; // Simulate failure delivery status
            if (delivered) {
                resolve("Package delivered successfully!");
            } else {
                reject("Failed to deliver package.");
            }
        }, 3000); // Simulates a 3-second delay
    });
};

// Using the promise
deliverPackage()
    .then((message) => {
        console.log(message); // Output: Package delivered successfully!
    })
    .catch((error) => {
        console.log(error); // Output: Failed to deliver package.
    });