# UNISX-Project

## Project purpose
The purpose of the project is to create a service designed to issue synthetic tokens, the price of which is tied to the price of stocks and indexes on the stock exchange, as well as derivatives – options, futures, credit swaps.

## Minimally Viable Product (MVP)
At the initial stage, it is supposed to create a minimally viable product with minimal effort and cost.
The project is being developed on the UMA protocol.
The task of the MVP is to check the concept and clarify the parameters of the project.
At the MVP stage, to speed up development, it is proposed to create a synthetic token linked to [the index of the 5 most active SPACs stock](https://github.com/UniSX-App/UNISX-Project/blob/main/INDEX-idea.md), see UMIP  https://github.com/UMAprotocol/UMIPs/pull/399

## MVC-B architecture
When developing the project, it is assumed to use the MVC-B architecture (Model, View, Control, Blockchain):
![MVC-B-en](https://user-images.githubusercontent.com/89580052/139449075-acb9a2ee-f061-4f0a-a5ff-d4f97ad817fd.jpg)

1. User interface (VIEW LOGIC) - a web or mobile application that interacts with the control logic.
2. DATA MODEL – a schema of the application's local data, including documents and large files.
3. CONTROL LOGIC is an algorithm that interacts between the user interface, the application data model and the blockchain interface (API).
4. BLOCKCHAIN LOGIC is an extension of the control logic and data model to the blockchain. 
- The control logic is complemented by smart contracts. 
- The data model is complemented by transactions.

## User Interface
### WEB interface
It is planned to create a WEB interface that allows the user to issue a synthetic token, the price of which is tied to the price of an exchange asset, place a synthetic token in the DEX liquidity pool, and also stake project tokens within the project. For performing each of these three operations, the user receives a reward in UNISX management tokens, as well as LP-tokens of DEX liquidity pools.<br>
The WEB interface includes the following main pages:<br>
![image](https://user-images.githubusercontent.com/89580052/134307104-9fa38231-6202-43a0-9429-1a80682244a8.png)

**Home** – the home page contains general information or advertising information.

**Connect Wallet** – a page or pop-up window with a list of wallets to which you can connect. Called from the home page if the user's wallet is not connected yet.

**Instruments/Portfolio** - a page that displays a list of instruments that the user can release, as well as the user's portfolio.

**Mint** is an interface for issuing and burning synthetic tokens.

**Pool** is an interface for transferring tokens to DEX liquidity pools and returning from pools.

**Stake** - the project token staking interface.

**Vote** - voting interface.

**Doc** - documentation of the service.

**FAQ** - Frequently asked questions and answers to them.

**About Us** – Information about the project team.
 
### Interface Elements
The following elements are displayed on the application page:
![SPACsynt - contracts-UI2 (1)](https://user-images.githubusercontent.com/89580052/134804321-e3e0da96-291f-436b-913d-6772db1a8806.jpg)

**Element 1)** In the upper right corner there is a button to connect to the user's wallet Connect Wallet. To the left of this button is an information field containing the name of the network and the wallet address.

**Element 2)** In the upper left corner there is a button to go to the external voting interface Vote.

**Element 3)** The INSTRUMENTS/PORTFOLIO interface, which displays the possibilities of issuing derivatives and the user's portfolio.
The user can select a row in the INSTRUMENTS or PORTFOLIO table. In accordance with the selected line, data is prefilled in the interfaces of Element 2.

**Element 4)** Group of operation interfaces (MINT/POOL/STAKE) - the user selects the tab corresponding to the operation he needs – minting, placement in the liquidity pool, staking. 
Some of the fields in this element are filled in automatically based on the row selected in the first element.

#### MINT Interface
Minting and burning of synthetic tokens.

![SPACsynt - contracts-MINT-UI (6)](https://user-images.githubusercontent.com/89580052/134819208-54471a91-abb6-493f-ad16-789a379012d3.jpg)

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

- fields of the middle part:

   = widget of the instrument quotes chart,

   = description of the tool,

   = accrued rewards.

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

To **receive the accrued rewards** it is required to press the CLAIM REWARD button.

#### POOL Interface
Placement/return of tokens to the UNISWAP v3 liquidity pool.

![SPACsynt - contracts-POOL-UI (3)](https://user-images.githubusercontent.com/89580052/134819803-885d78fe-4f40-4e46-a246-d658ced4a34a.jpg)

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

#### STAKE Interface
Transfer/return of UNISX tokens or UNISWAP liquidity tokens to a UniSX.Staker contract.

![SPACsynt - contracts-STAKE-UI (1)](https://user-images.githubusercontent.com/89580052/134803939-bf8e2cb9-0845-4d7a-8371-adbf1a30eed1.jpg)

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

To **receive the accrued rewards** it is required to press the CLAIM REWARD button.

## Module structure
The system includes two types of modules: CONTROL LOGIC (off-chain) and BLOCKCHAIN LOGIC (on-chain), interacting with each other and with the user:

![SPACsynt - contracts-Architecture 3](https://user-images.githubusercontent.com/89580052/134308055-99b53e17-ce76-4dde-9765-921a730a2f1a.jpg)
