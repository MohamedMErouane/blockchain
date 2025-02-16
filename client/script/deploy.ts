import { execSync } from "child_process";

// Define the path to your Sui Move package
const PACKAGE_PATH = "../game"; // Update with the actual path

// Function to deploy the contract
const deployContract = () => {
    try {
        console.log("Building and deploying the contract...");
        
        // Build the package
        execSync(`sui move build  --path ${PACKAGE_PATH}`, { stdio: "inherit" });
        
        // Publish the package
        const output = execSync(`sui client publish --gas-budget 500000`, { encoding: "utf-8" });
        
        console.log("Contract deployed successfully:", output);
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
};

// Run the deployment function
deployContract();
