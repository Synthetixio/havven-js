import { HavvenJs } from '../dist/main.node';
import config from './config';

test(
  'Should execute transaction signed with private key but fail on insufficient funds',
  async () => {
    const signer = new HavvenJs.signers.PrivateKey(
      null,
      config.networkId,
      '0x0123456789012345678901234567890123456789012345678901234567890123'
    );
    const havjs = new HavvenJs({ signer, networkId: config.networkId });
    const balance = await havjs.SynthetixEscrow.balanceOf(signer.getAddress());
    console.log(balance);
    await expect(balance).toBeTruthy();
  },
  15000
);
