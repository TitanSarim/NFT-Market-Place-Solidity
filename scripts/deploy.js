const hre = require("hardhat");

async function main() {
    
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await  Lock.deploy();

    await lock.deployed();

    console.log(
        `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    )

}


main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
})