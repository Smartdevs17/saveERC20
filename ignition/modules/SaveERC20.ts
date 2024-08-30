import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x6328794bac7D31B08ACCC913ec23caE23201A6a0";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
//token Addrss 0x6328794bac7D31B08ACCC913ec23caE23201A6a0
// 0xD410219f5C87247d3F109695275A70Da7805f1b1