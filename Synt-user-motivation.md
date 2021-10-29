# Why does the user issue synthetic UniSX tokens

1. The purpose of issuing synthetic tokens for the user is to create a new asset based on low-yielding low-volatile assets owned by him, such as stablecoins, capable of bringing higher returns at reasonable risk.

2. The new asset is a synthetic token, the price of which is tied to the price of some off-chain asset (the underlying asset) - whether it has an exchange quotation or not.
At the same time, the price of the underlying asset is translated into a smart contract using the price oracle mechanism.

![image](https://user-images.githubusercontent.com/89580052/134311115-c2b8f478-3278-4906-9053-a069469828fa.png)

3. The synthetic token is secured by a pledge of stablecoins, which are debited from the user's (Sponsor's) wallet at the time of the release of the synthetic token and are blocked on the contract. The collateral ratio (the ratio of collateral value and discounted collateral value – Kc = Nc / Cd) depends on the volatility of the asset whose price is used, but in any case exceeds 100%.
In addition, the sponsor receives a reward for minting in the form of governance tokens (GT), which are used both for voting on the development of the service and as a profitable asset.

4. The sponsor has the right to “burn” the synthetic token at any time and receive the stablecoins that were used as collateral at the current price of the underlying asset.
To do this, the sponsor must have the necessary amount of synthetic tokens on the wallet.

5. A change in the price of the underlying asset leads to a profit or loss on the sponsor's position.
- When the price of the underlying asset decreases, the sponsor makes a profit:
![image](https://user-images.githubusercontent.com/89580052/134312517-38fe0bdd-4981-4e83-b8cf-205540f565ac.png)

- If the price of the underlying asset increases, the sponsor may incur a loss, which is expressed in the need to increase the collateral:
![image](https://user-images.githubusercontent.com/89580052/134312693-e62dc8ac-12fb-43cd-b69d-03640b977e72.png)

- In this case, the sponsor should deposit additional stablecoins to secure a synthetic token or "burn" part of the synthetic tokens.
- Otherwise, a liquidation procedure is initiated, during which the liquidator is determined, who receives the right to make the necessary additional collateral and "burn" the synthetic tokens belonging to him by receiving a part of the stablecoins pledged by the sponsor. The number of synthetic tokens "burned" by the liquidator is determined in such a way that, as a result of liquidation, the remaining synthetic tokens are fully secured. The liquidator receives remuneration in the amount of 10%, which is paid out of the discount amount. The sponsor will see in the contract that the number of synthetic tokens has decreased, the provision has decreased, but the remaining synthetic tokens are secured.

6. The Sponsor may use the issued synthetic tokens as follows:
- Keep them on the wallet. In this case, the sponsor does not receive additional income in addition to the governance tokens, but is obliged to maintain the collateral of the synthetic token at the required level by making additional collateral or "burning" synthetic tokens. At the same time, he does not bear the risks associated with changes in the price of the underlying asset, since he independently manages the issued synthetic tokens. 
- Sell it. In this case, the sponsor actually opens a short position on the synthetic token. The sponsor receives funds from the sale and can invest them to obtain higher returns, including issuing additional synthetic tokens (linked, for example, to another underlying asset). 

     o In order to be able to recover the collateral ("burn" synthetic tokens), the Sponsor shold buy them again, but if the price of the underlying asset decreases, they will cost him less, so he will benefit. However, if the underlying asset becomes more expensive, the sponsor may incur losses both when buying synthetic tokens and because of the need to increase collateral. 

     o The sponsor does not receive additional governance tokens when selling synthetic tokens.

- Place in the DEX liquidity pool. In this case, the sponsor receives commission income, which is paid by DEX from each exchange operation. As in the previous paragraph, in order to "burn" synthetic tokens, the sponsor should first take them from the liquidity pool. 

     o For placing synthetic tokens in the liquidity pool, the sponsor receives additional governance tokens. 

     o Not only the sponsor, but also any other owner of synthetic tokens can place synthetic tokens in the liquidity pool and receive governance tokens.

- Block on the service contract (steak). In this case, synthetic tokens are "withdrawn from circulation", as a result of which their price may increase. 

     o A reward in the form of governance tokens is awarded for staking.

     o Staking and remuneration for it are available not only to sponsors, but also to any owners of synthetic tokens.

At the same time, it must be remembered that in any case, the sponsor retains the obligation to maintain the collateral of synthetic tokens issued by him at the required level.
