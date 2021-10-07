## Headers
- UMIP <#> 
- UMIP title: Add uSPAC5 as price identifier and uSPAC5_FR as funding rate identifier
- Author: BinomFX (binomfx@gmail.com)
- Status: Draft 
- Created: 07.10.2021
- Discourse Link: 

## Summary
The DVM should support price requests for uSPAC5 UMA perpetual price identifier and corresponding uSPAC5_FR funding rate identifiers.<br>
The purpose of these price identifier is to create synthetic token, price of which is linked to the value of index of 5 most active SPACs (Special Purpose Acquisition Companies) shares.<br> That synthetic token can be used for creating speculative strategies at IPO market.

## Motivation
A synthetic token that tracks the index of the 5 most active SPACs stocks can be used for speculative purposes and allows the user to earn on price movements in one of the most interesting markets without centralized intermediaries such as exchanges and brokers.<br> 
In addition, that token can be used as components associated with classical markets by other DeFi and DApp protocols, which makes it possible to scale.

## Technical Specification
- **Identifier name: uSPAC5**
- Base asset: Most active SPAC shares, enumerated in SPAC5.JSON file, stored in IPFS.
- Quote Currency: USD
- Intended Collateral Currency: USDC
- Market: NYSE
- Source:
https://marketstack.com/, API - Cost to use: Free - End-of-Day Data; Paid – Intraday Data (https://marketstack.com/plan)
- Result Processing: _______
- Input Processing: ________ 
- Scaling Decimals: 18 (1e18)
- Rounding: Round to nearest 6 decimal places (seventh decimal place digit >= 5 rounds up and < 5 rounds down)

- **Identifier Name: uSPAC5_FR**
- Base asset: uSPAC5_FR
- Quote currency: None. This is a percentage.
- Scaling Decimals: 18
- Rounding: Round to nearest 9 decimal places (10th decimal place digit >= 5 rounds up and < 5 rounds down)
- Synthetic Name: uVIXUSDC
- Synthetic Address: 0x___________________________________
- Perpetual Contract Address: 0x_________________________________
- UNISWAP Pool Address: 0x________________________________
- UNISWAP Pair: uSPAC5/USDC

## Rationale
Special Purpose Acquisition Companies (“SPACs”) are companies formed to raise capital in an initial public offering (“IPO”) with the purpose of using the proceeds to acquire one or more unspecified businesses or assets to be identified after the IPO (irrespective of form, a “Business Combination”).<br>
SPACs have only a limited period during which they may consummate a Business Combination, generally not exceeding 24 months.<br>
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

By their nature, SPAC shares are subject to impulsive growth at the moment of information or even just rumors that a target company for a merger has been found.<br>
`A good way to capitalize on such momentum growth without having to analyze hundreds of SPAC is to invest in an index that includes stocks of the most active SPAC.`<br>

The selection of 5 stocks of the most active SPACs included in the basket of the proposed uSPAC5 index is made according to [yahoo.finance Most Active SPACs](<https://finance.yahoo.com/u/yahoo-finance/watchlists/most-active-spacs>).<br>
These underlying assets are traded on the NYSE, but reliable sources of quotations are either paid or provide data with a delay. We suggest using the MarketStack API as the main source of quotes, which has both free and paid tariff plans, and also provides historical price data.

>Back in early 2018, MarketStack was initially presented under a different name with the aim of providing a free and cost-effective market data alternative to Yahoo Finance. In the course of the years, MarketStack REST API has become one of the most popular one-stop shop solutions for real-time, intraday and historical stock data, supporting a total of 170,000+ stock tickers from 70 global stock exchanges, including NASDAQ, Australian Stock Exchange, London Stock Exchange, and many more.

>The MarketStack API is built on top of scalable, cutting-edge cloud infrastructure, handling millions of concurrent API requests each day. Using the API customer will be able to obtain rate information as well as metadata about stock tickers, companies as well as stock exchanges.

Underlying stocks are trade during exchange hours which leaves gaps in prices between 4:00PM EST close and 9:30AM EST open the next day and on weekends and market holidays. 

A 2-hour TWAP was chosen to mitigate any risk of attempted price manipulation attempts on the market price of the synthetic. To meaningfully manipulate the price that token sponsors’ collateralization is calculated with, an attacker would have to manipulate the trading price of a token for an extended amount of time. This is described further in the Security Considerations section.

## Implementation
### PRICE IDENTIFIER
Historical VIX and SPY prices are available from MarketStack.com (API) and TadingView.com (Manually). 
Price requests should use the minute price that is nearest and later than the price request timestamp. To do this, voters should use the open price of the OHLC period that the price request timestamp falls in. MarketStack endpoints are queried based on the OHLC period's close time.
Example MarketStack request for a SPY real time price (available on: Basic Plan and higher):
```
http://api.marketstack.com/v1/intraday
    ? access_key = YOUR_ACCESS_KEY
    & symbols = SPY
```
Example MarketStack request for a VIX historical price:
```
http://api.marketstack.com/v1/eod
    ? access_key = YOUR_ACCESS_KEY
    & symbols = VIX.INDX
    & date_from = 2021-08-23
    & date_to = 2021-09-02
```
API Response Objects:
```
Response Object  Description
pagination > limit  Returns your pagination limit value.
pagination > offset  Returns your pagination offset value.
pagination > count  Returns the results count on the current page.
pagination > total  Returns the total count of results available.
date  Returns the exact UTC date/time the given data was collected in ISO-8601 format.
symbol  Returns the stock ticker symbol of the current data object.
exchange  Returns the exchange MIC identification associated with the current data object.
open  Returns the raw opening price of the given stock ticker.
high  Returns the raw high price of the given stock ticker.
low  Returns the raw low price of the given stock ticker.
close  Returns the raw closing price of the given stock ticker.
last  Returns the last executed trade of the given symbol on its exchange.
volume  Returns the volume of the given stock ticker.
```

### FUNDING RATE IDENTIFIER

### Weekend timestamp
Over the weekend or some official holidays the REST API does not return any price, but we can request the price of a certain moment before the market close (as ex: the closing price of Friday).
Due to unavailability of price feed for stock exchange rates over the weekend or during some official holidays, tokenholders and users will be using the latest known price, which for the weekend is essentially the closing price of Friday. Same goes in a case of a liquidation process - the liquidator should use the last known price (during the weekend this is the closing price of Friday) in order to match with the price on which a synthetic asset was created, if it was created over the weekend. If not the closing price on Friday for a certain asset should be a navigating point in calculating the collateralization ratio of a position and in the liquidation process.
If a request timestamp takes place on a weekend or any other day the stock market is closed, voters should use the latest tick as the price. For the weekend that would be the closing price of the asset on Friday and for official holidays this would be the last know price provided by the price feed.
Please note that this is different than the normal calculation process, which requires using the open price of the period that the price request falls in.
### Stock markets working hours
Underlaying assets trade during exchange hours which leaves gaps in prices between 4:00PM EST close and 9:30AM EST open the next day and on weekends and market holidays.
### Price feed
>??????? Liquidation and dispute bots should have their own subscription to price feeds.

Our price-feed provider’s API documentation can be found here: https://marketstack.com/documentation. A reference MarketStack implementation that is used by liquidator and dispute bots can be seen here: https://github.com/unisxapp/uma/commit/11db86a556098e2f71022c40ef3bb6d777e60f59.
MarketStack is provided as an accessible source to query for this data, but ultimately how one queries for these rates should be varied and determined by the voter to ensure that there is no central point of failure.
In the case of a MarketStack outage voters can turn to any other available price feed API or a broker API, as the price feeds for the forementioned financial assets does not differ much between different providers. There might be some slight differences, however they are quite insignificant and would not affect the liquidation or dispute processes. For this case, we provide options for additional price feed providers that voters could utilize.
### Additional price feed providers
- **Yahoo Finance** – Rapidapi.com
- Documentation for the API can be found here: https://rapidapi.com/apidojo/api/yahoo-finance1
- Live price feed data
- Historical prices based on date and time
- Registration is free
- Paid plans available: https://rapidapi.com/apidojo/api/yahoo-finance1/pricing
- OHLC request can be used to grab the last closing price before a weekend or a non-working day
- Example requests:
```
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
  params: {q: 'VIX', region: 'US'},
  headers: {
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    'x-rapidapi-key': YOUR_ACCESS_KEY
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```
- **Stock and Options Trading Data Provider API** – Rapidapi.com
- Documentation for the API can be found here: https://rapidapi.com/mpeng/api/stock-and-options-trading-data-provider
- Live price feed data
- Historical prices based on date and time
- Registration is free
- Paid plans available: https://rapidapi.com/mpeng/api/stock-and-options-trading-data-provider/pricing
- OHLC request can be used to grab the last closing price before a weekend or a non-working day
- Example requests:
```
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://stock-and-options-trading-data-provider.p.rapidapi.com/straddle/SPY',
  headers: {
    'x-rapidapi-host': 'stock-and-options-trading-data-provider.p.rapidapi.com',
    'x-rapidapi-key': YOUR_ACCESS_KEY
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

## Security considerations
Security considerations are focused on the use of the token price for monitoring collateral ratios.
- **Token price manipulation** - Under illiquid market conditions, an attacker could attempt to drive prices down to withdraw more collateral than normally allowed or drive prices up to trigger liquidations. However, it is important to note that almost all attacks that have been performed on DeFi projects are executed with flash loans, which allows the attacker to obtain leverage and instantaneously manipulate a price and extract collateral. Additionally, flash loans will have no effect on a tradable token price because the TWAP calculation is measured based on the price at the end of each block. Collateralization based off of a TWAP should make these attacks ineffective and would require attackers to use significantly more capital and take more risk to exploit any vulnerabilities.
- **Mismatch between TWAP and gap higher in token price** - An aggressive gap higher in the token price accompanied by real buying and then a follow through rally could create a concern. In this scenario we could see the TWAP of the token significantly lag the actual market price and create an opportunity for sponsors to mint tokens with less collateral than what they can sell them from in the market. It is important to note that this is an edge case scenario either driven by an irrational change in market expectations or it can be driven by a “fat finger” mistake which is a vulnerability to any market. Even in this edge case we believe the design of the token and the parameters chosen should mitigate risks. The current Perpetual contract requires sponsors to mint tokens with enough collateral to meet the Global Collateral Ratio (GCR) which has stood well above 200% for other contracts. Therefore, assuming the GCR is similar for uVIX and uSPY, the market would need to first rally at least 100% before potentially being exposed. If the sponsor wishes to withdraw collateral below the GCR they would request a “slow withdrawal” which would subject him to a 2 hour “liveness period” where anybody can liquidate the position if it fell below the required collateral ratio. The combination of the GCR and 2 hour “liveness period” allows the 2 hour TWAP to “catch up” to the market price and would protect from this scenario and deter sponsors from attempting to exploit it.

Security considerations, like the ones above, have been contemplated and addressed, but there is potential for security holes to emerge due to the novelty of this price identifier.

Additionally, anyone deploying a new priceless token contract referencing this identifier should take care to parameterize the contract appropriately to avoid the loss of funds for synthetic token holders. Contract deployers should also ensure that there is a network of liquidators and disputers ready to perform the services necessary to keep the contract solvent.

$UMA-holders should evaluate the ongoing cost and benefit of supporting price requests for this identifier and also contemplate de-registering this identifier or editing its implementation if security holes are identified. 
