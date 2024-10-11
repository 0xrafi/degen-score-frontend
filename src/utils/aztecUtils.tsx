import { AccountManager, PXE, DeployAccountOptions, createPXEClient, waitForPXE, Fr } from "@aztec/aztec.js";
import { deriveSigningKey } from "@aztec/circuits.js";
import { getSchnorrAccount } from "@aztec/accounts/schnorr";

// Constants
const PXE_URL = "http://localhost:8080";

// Setup PXE
export const setupPXE = async () => {
  const pxe = createPXEClient(PXE_URL);
  await waitForPXE(pxe);
  return pxe;
};

// Create Account
export async function createAccount(
  pxeClient: PXE,
  secretKey: Fr | undefined,
  salt: Fr | undefined
) {
  secretKey ??= Fr.random();
  salt ??= Fr.ZERO;

  if (!salt) {
    throw new Error("Cannot create wallet without salt");
  }

  if (!secretKey) {
    throw new Error("Cannot create wallet without secret key");
  }

  const account = getSchnorrAccount(
    pxeClient,
    secretKey,
    deriveSigningKey(secretKey),
    salt
  );

  return account;
}

// Deploy Account
export async function deployAccount(account: AccountManager) {
  const sendOpts: DeployAccountOptions = {
    fee: undefined,
    skipClassRegistration: false,
    skipPublicDeployment: false,
    estimateGas: false,
    skipInitialization: false,
  };

  return account.deploy({ ...sendOpts }).wait();
}

// Log Account
export async function logAccount(account: AccountManager) {
  const { address, partialAddress, publicKeys } = account.getCompleteAddress();
  const { initializationHash, deployer, salt } = account.getInstance();
  const wallet = await account.getWallet();
  const secretKey = wallet.getSecretKey();

  console.log(`\nNew account:\n`);
  console.log(`Address:         ${address.toString()}`);
  console.log(`Public key:      0x${publicKeys.toString()}`);
  console.log(`Secret key:     ${secretKey.toString()}`);
  console.log(`Partial address: ${partialAddress.toString()}`);
  console.log(`Salt:            ${salt.toString()}`);
  console.log(`Init hash:       ${initializationHash.toString()}`);
  console.log(`Deployer:        ${deployer.toString()}`);
}

// Utility function to create, deploy, and log an account
export async function createAndDeployAccount(pxe: PXE, secretKey?: Fr, salt?: Fr) {
  const account = await createAccount(pxe, secretKey, salt);
  await deployAccount(account);
  await logAccount(account);
  return account;
}