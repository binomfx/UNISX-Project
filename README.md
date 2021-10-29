# UNISX-Project

## Project purpose
The purpose of the project is to create a service designed to issue synthetic tokens, the price of which is tied to the price of stocks and indexes on the stock exchange, as well as derivatives – options, futures, credit swaps.

## Minimally Viable Product (MVP)
At the initial stage, it is supposed to create a minimally viable product with minimal effort and cost.
The project is being developed on the UMA protocol.
The task of the MVP is to check the concept and clarify the parameters of the project.
At the MVP stage, to speed up development, it is proposed to create a synthetic token linked to [the index of the 5 most active SPACs stock](), see UMIP  https://github.com/UMAprotocol/UMIPs/pull/399

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
- - click the SUPPLY button.

To **withdraw** excess collateral of already issued tokens, the user must perform the following actions:
- - specify the amount of tokens to be removed from the collateral on the right side of the interface
- press the WITHDRAW button.

To **receive the accrued rewards** it is required to press the CLAIM REWARD button.

#### Интерфейс POOL
Помещение / возврат токенов в пул ликвидности UNISWAP v3.

![SPACsynt - contracts-POOL-UI (3)](https://user-images.githubusercontent.com/89580052/134819803-885d78fe-4f40-4e46-a246-d658ced4a34a.jpg)

Для **помещения токенов проекта в пул ликвидности** пользователь должен выбрать в таблице портфеля строку синтетического токена или токена UNISX, при этом на вкладке автоматически заполняется поле с названием синтетическлого токена или UNISX, а также количество соответствующих токенов в потфеле (зеленые цифры под названием токена). Далее пользователь выполняет следуюие действия:
- выбрать стейблкоин из выпадающегоменю, при этом автоматически запорлняется количество соответствующих токенов в потфеле (зеленые цифры под названием токена),
- указать количество синтетических токенов или токенов UNISWAP, помещаемых в пул, требуемое количество стейблкойнов рассчитывается автоматически и отображается слева от названия стейблкойна,
    *ИЛИ*
- указать количество стейблкойнов, помещаемых в пул, требуемое количество синтетических токенов или токенов UNISWAP рассчитывается автоматически и отображается слева от названия токена,
- выбрать величину комиссии,
- указать верхнюю и нижнюю границы цены,
- нажать кнопку POOL.

Для **возврата токенов из пула ликвидности** пользователь должен выбрать в портфеле строку с NFT токеном UNISWAP, при этом автоматически заполняются следующие поля: наименования токенов, количества токенов в пуле ликвидности (красные цифры справа от "Max:"), количество токенов в кошельке (зеленые цифры под названием токенов), величина комиссии, верхняя и нижняя границы цены, количество NFT токеном UNISWAP. Далее пользователь выполняет следующие действия:
- указать количество токенов, которое пользователь желает вернуть из пула ликвидности (но не более максимальных значений), количество противоположных токенов рассчитывается автоматически,
- нажать кнопку UNPOOL.

#### Интерфейс STAKE
Перемещение/ возврат токенов UNISX или токенов ликвидности UNISWAP на контракт UniSX.Staker.

![SPACsynt - contracts-STAKE-UI (1)](https://user-images.githubusercontent.com/89580052/134803939-bf8e2cb9-0845-4d7a-8371-adbf1a30eed1.jpg)

На вкладке STAKE имеется три группы полей:

- поля левой части содержат следующую информацию: 

    = наименование токена UNISX
    
    = количество токенов UNISX, которое пользователь желает переместить на контракт или вернуть с контракта
    
    = количество токенов UNISX в портфеле (зеленые цифры под названием токена)
    
    = количество токенов UNISX на контракте (красные цифры)
    
- поля правой части содержат следующую информацию:
    
    = выпадающий список для выбора NFT токенов UNISWAP
    
    = количество выбранных NFT токенов UNISWAP, которое пользователь желает переместить на контракт или вернуть с контракта
    
    = количество выбранных NFT токенов UNISWAP в портфеле (зеленые цифры под названием токена)
    
    = количество выбранных NFT токенов UNISWAP на контракте (красные цифры)

- поля средней части содержат размер начисленного за стейкинг вознаграждения в токенах UNISX

Для того чтобы **переместить токены UNISX** на контракт требуется 
- указать количество токенов в левой части вкладки
- нажать кнопку STAKE. 

Для того чтобы **вернуть токены UNISX** с контракта требуется 
- указать количество токенов в левой части вкладки
- нажать кнопку UNSTAKE. 

Для того чтобы **переместить NFT токены UNISWAP** на контракт требуется
- выбрать NFT токено UNISWAP из выпадающего списка в правой части вкладки
- указать количество токенов в правой части вкладки
- нажать кнопку STAKE. 

Для того чтобы **вернуть NFT токены UNISWAP** с контракта требуется 
- выбрать NFT токено UNISWAP из выпадающего списка в правой части вкладки
- указать количество токенов в правой части вкладки
- нажать кнопку UNSTAKE. 

To **receive the accrued rewards** it is required to press the CLAIM REWARD button.

## Module structure
The system includes two types of modules: CONTROL LOGIC (off-chain) and BLOCKCHAIN LOGIC (on-chain), interacting with each other and with the user:

![SPACsynt - contracts-Architecture 3](https://user-images.githubusercontent.com/89580052/134308055-99b53e17-ce76-4dde-9765-921a730a2f1a.jpg)
