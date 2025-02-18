# FAQ
## What is SPAC
Special Purpose Acquisition Companies (“SPACs”) are companies formed to raise capital in an initial public offering (“IPO”) with the purpose of using the proceeds to acquire one or more unspecified businesses or assets to be identified after the IPO (irrespective of form, a “Business Combination”). 
SPACs have only a limited period during which they may consummate a Business Combination, generally not exceeding 24 months. 
A SPAC generally focuses upon one industry or sector, but may maintain flexibility to engage in transactions in other industries or sectors if necessary or appropriate.<br>
More information about SPACs can be found [here](https://spac.guide/spacbasics/) and [here](https://www.spacanalytics.com/).<br>
The SPAC market is growing exponentially:

|Year|IPO Count|Gross Proceeds(mms)|Average IPO Size(mms)|
|:--:|--------:|------------------:|--------------------:|
|2021|      456|          130,375.8|                285.9|
|2020|      248|           83,354.0|                336.1|
|2019|       59|           13,608.3|                230.6|
|2018|       46|           10,751.9|                233.7|
|2017|       34|           10,048.5|                295.5|
|2016|       13|            3,499.2|                269.2|


## Syntetic token
By their nature, SPAC shares are subject to impulsive growth at the moment of information or even just rumors that a target company for a merger has been found.<br>
`A good way to capitalize on such momentum growth without having to analyze hundreds of SPACs is to take advantage of the movement of the index value that includes stocks of the most active SPACs.`<br>
The price of our synthetic tokens is tied to the value of the SPAC stock index.

## Reward token UNISX
Users who produce synthetics (installers) receive a reward in UNISX project tokens, depending on the volume of blocked security tokens and the time that the user holds an open position.
In addition, users have the opportunity to block the UNISX tokens and LP tokens belonging to them for staking contract. For this, users receive an additional reward in UNISX tokens.
The UNISX tokens can be placed in the DEX liquidity pool or sold through DEX.

## Utility token xUNISX
For each UNISX token that the user blocks on the staking contract, the user receives a utility-token xUNISX.
xUNISX can be used for:
- return of the UNISX token from the staking
- voting on the management of the service
- receiving DEX cashback commissions when performing transactions for the purchase and sale of synthetic tokens

## How to mint/burn synt
The user selects the instrument row in the instrument table or in the portfolio table (if the user has already issued such tokens), the tab is automatically filled in:

- fields of the left part:

   = Collateral (token name),

   = Synt ticker (name of synthetic),

   = the number of corresponding tokens in the user's wallet (green numbers under the name of tokens);

- fields of the right part:

   = Collateral (token name),

   = the number of corresponding tokens in the user's wallet (green numbers under the name of tokens),

   = number of collateral tokens for already issued synthetics (red numbers to the right of "Max:"),

   = the field to the left of the name of the collateral token is filled with a zero value,

   = Collateral Ratio = (Synt amount / Collateral amount) * Synt price,

   = Liquidation Price - shows at what price value the liquidation risk appears.


To **mint** a synthetic token, the user must perform the following actions:
- enter the number of collateral tokens that the user is ready to use for the issue of synthetic tokens, the number of synthetics produced is filled in automatically taking into account the collateral requirement
    *OR*
- enter the number of synthetic tokens that the user wishes to issue, the required number of collateral tokens is filled in automatically taking into account the collateral requirement
- press the MINT button.

To **burn** the token, the user must perform the following actions:
- select the row of the corresponding token in the portfolio table
- enter the number of collateral tokens that the user wants to receive, the number of burned synthetics is filled in automatically taking into account the collateral requirement 
    *OR*
- enter the number of synthetic tokens to be burned, the number of collateral tokens returned to the user is filled in automatically taking into account the collateral requirement
- press the BURN button.

To **increase** the collateral of already issued tokens, the user must perform the following actions:
- specify the number of collateral tokens to be added in the right part of the interface
- click the SUPPLY button.

To **withdraw** excess collateral of already issued tokens, the user must perform the following actions:
- specify the amount of tokens to be removed from the collateral on the right side of the interface
- press the WITHDRAW button.

## How to pool/unpool
To **place the project tokens in the liquidity pool**, the user must select a row of synthetic token or UNISX token in the portfolio table, while the field with the name of the synthetic token or UNISX is automatically filled in on the tab, as well as the number of corresponding tokens in the potfel (green numbers under the name of the token). Next, the user performs the following actions:
- select a stablecoin from the drop-down menu, and the number of corresponding tokens in the potfel is automatically blocked (green numbers under the token name),
- specify the number of synthetic tokens or UNISWAP tokens placed in the pool, the required number of stablecoins is calculated automatically and displayed to the left of the name of the stablecoin,
    *OR*
- specify the number of stablecoins placed in the pool, the required number of synthetic tokens or UNISWAP tokens is calculated automatically and displayed to the left of the token name,
- select the amount of commission,
- specify the upper and lower limits of the price,
- press the POOL button.

To **return tokens from the liquidity pool**, the user must select a row with the UNISWAP NFT token in the portfolio, and the following fields are automatically filled in: the names of tokens, the number of tokens in the liquidity pool (red numbers to the right of "Max:"), the number of tokens in the wallet (green numbers under the name of tokens), the amount of commission, upper and lower price limits, the number of NFT tokens UNISWAP. Next, the user performs the following actions:
- specify the number of tokens that the user wants to return from the liquidity pool (but not more than the maximum values), the number of opposite tokens is calculated automatically,
- press the UNPOOL button.

## How to stake/unstake
There are three groups of fields on the STAKE tab:

- the fields on the left side contain the following information: 

    = name of the UNISX token
    
    = the number of UNISX tokens that the user wants to move to the contract or return from the contract
    
    = number of UNISX tokens in the portfolio (green numbers under the token name)
    
    = number of UNISX tokens on the contract (red numbers)
    
- the fields on the right side contain the following information:
    
    = drop-down list for selecting UNISWAP NFT tokens
    
    = the number of selected UNISWAP NFT tokens that the user wants to move to the contract or return from the contract
    
    = the number of selected UNISWAP NFT tokens in the portfolio (green numbers under the token name)
    
    = number of selected UNISWAP NFT tokens on the contract (red numbers)

- the fields of the middle part contain the amount of the reward accrued for staking in UNISX tokens

In order to **move UNISX tokens** to a contract, it is required 
- specify the number of tokens on the left side of the tab
- press the STAKE button. 

In order to **return UNISX tokens** from the contract, it is required 
- specify the number of tokens on the left side of the tab
- press the UNSTAKE button. 

In order to **move UNISWAP** NFT tokens to a contract, it is required
- select the UNISWAP NFT token from the drop-down list on the right side of the tab
- specify the number of tokens in the right part of the tab
- press the STAKE button. 

In order to **return UNISWAP** NFT tokens from the contract, it is required 
- select the UNISWAP NFT token from the drop-down list on the right side of the tab
- specify the number of tokens in the right part of the tab
- press the UNSTAKE button.

## How to get rewards
To **receive the accrued rewards** it is required to press the CLAIM REWARD button.
