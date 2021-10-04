# An approach to creating a synthetic UMA token, the price of which is tied to the index value

It is supposed to create synthetic tokens (perpetual), the price of which is tied to the values of various indexes. 

Examples of possible indexes:
	- **SPAC-5** - An index that includes the shares of the 5 most active SPAC according to [Yahoo.Finance](https://finance.yahoo.com/u/yahoo-finance/watchlists/most-active-spacs)
	- **SPAC-FinTech** - An index that includes shares of [SPACs aimed at FinTech companies](https://spactrack.net/activespacs/).

A feature of such indexes is the periodic revision of the basket of stocks included in the index.

It is proposed to use the following scheme:

	![PriceFeed-INDEX ENG](https://user-images.githubusercontent.com/89580052/135914358-336cb066-616d-4488-b5b2-856a5fb79730.jpg)

1)	The formula for calculating the index:
	
	![image](https://user-images.githubusercontent.com/89580052/135917756-45d46434-b907-40b6-806f-22424b99a9d1.png)
	* N – number of shares;
	* Qi – quote of share i;
	* K – Correction factor, used to smooth the index values when the basket is changed;

2)	The value of K calculated as follows:

	![image](https://user-images.githubusercontent.com/89580052/135917866-e6c08c48-ed08-4359-8bf4-ef46232d7508.png)
	* INDEXold – the last index value calculated from the old basket;
	* INDEXnew – the first index value calculated for the new basket at the same time as INDEXold;

	The initial value of K is chosen arbitrarily, for example 1 or 100.

3)	We get the values of quotes using the API of the Marketstock service.

4)	The list of stocks and the current value of K are contained in the INDEX.json file:

```
	[
		“K”: “1”,	
		“Share”: “___”,	
		“Share”: “___”,	
		“Share”: “___”	
	]
```

5)	The rules for including stocks in the index basket and calculating the K value are published in UMIP and on the service's website (in the description of the instrument).

6)	The INDEX.json file is stored in [IPFS](https://www.pinata.cloud/), a link to it is stored in the smart contract.

7)	When changing the composition of the index, the link to the new file is changed in the smart contract by voting. So, malicious modification of the index composition is impossible.

8)	The implementation of the pricefid provides for the calculation of the index based on the list of shares from the INDEX.json file received by reference from a smart contract.

