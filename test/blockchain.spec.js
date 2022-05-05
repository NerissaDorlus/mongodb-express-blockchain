import { createBlockchain } from "../src/services/blockchain.service.js";

describe("Blockchain Test Suite", () => {
  //individual test
  it("Creates a Blockchain", async () => {
    await createBlockchain({
      name: "Solana",
      language: "Rust",
      marketCap: 1,
      supportsSmartContracts: true,
    });
  });
});
