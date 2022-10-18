// export const MARKETPLACE_ADDRESS =  "0xebd86B2D0639EEA12d6bA03BA66ec18138C0AcD1";

export const MARKETPLACE_ADDRESS =  "0x57D33dA0f857dC077db029f593FE28Ad4e42b8d1";
// export const MARKETPLACE_ADDRESS =  "0x98d45d8F76399fF024A61df27dF35B1d9Cdab77F";
// export const MARKETPLACE_ADDRESS =  "0x5162d78e6a1e6e77b26049720ee400891a5a9925";

export const MARKETPLACE_ABI = [{"inputs":[{"internalType":"address","name":"_itemTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MarketingFeeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceChangeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"status","type":"bytes32"}],"name":"TradeStatusChangeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"distributionFeeEvent","type":"event"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_distributionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_distributionWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_trade","type":"uint256"}],"name":"cancelTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ccbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_trade","type":"uint256"}],"name":"executeTrade","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getAllByOwner","outputs":[{"components":[{"internalType":"address payable","name":"poster","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes32","name":"status","type":"bytes32"}],"internalType":"struct BakedCarrots.Trade[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllOnSale","outputs":[{"components":[{"internalType":"address payable","name":"poster","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes32","name":"status","type":"bytes32"}],"internalType":"struct BakedCarrots.Trade[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_trade","type":"uint256"}],"name":"getTrade","outputs":[{"components":[{"internalType":"address payable","name":"poster","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes32","name":"status","type":"bytes32"}],"internalType":"struct BakedCarrots.Trade","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTradeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_trade","type":"uint256"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"lowerTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_itemId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"openTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}]