import { Provider } from 'starknet';

const provider = new Provider({
    sequencer: {
        network: 'goerli-alpha',
    },
});

const main = async () => {
    const chainId = await provider.getChainId();
    console.log(chainId);
};

main();