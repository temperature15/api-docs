import { Client, MFAController } from '@bandwidth/mfa';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const BW_MESSAGING_APPLICATION_ID = process.env["BW_MESSAGING_APPLICATION_ID"];
const fromNumber = process.env["BW_NUMBER"];
const toNumber = process.env["USER_NUMBER"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new MFAController(client);

const payload = {
  applicationId: BW_MESSAGING_APPLICATION_ID,
  from: fromNumber,
  to: toNumber,
  scope: 'scope',
  digits: 5,
  message: "Your temporary {NAME} {SCOPE} code is {CODE}"
}

const msgTwoFactor = async function() {
  try {
    const response = await controller.messagingTwoFactor(BW_ACCOUNT_ID, payload);
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error);
}};

msgTwoFactor();
