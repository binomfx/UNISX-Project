# UNISX-Project

## Project purpose
The purpose of the project is to create a service designed to issue synthetic tokens, the price of which is tied to the price of stocks and indexes on the stock exchange, as well as derivatives – options, futures, credit swaps.

## Minimally Viable Product (MVP)
At the initial stage, it is supposed to create a minimally viable product with minimal effort and cost.
The project is being developed on the UMI platform.
The task of the MVP is to check the concept and clarify the parameters of the project.
At the MVP stage, to speed up development, it is proposed to create a synthetic token linked to the stock index of the 5 most active SPAC, see https://github.com/UMAprotocol/UMIPs/pull/399

## MVC-B architecture
When developing the project, it is assumed to use the MVC-B architecture (Model, View, Control, Blockchain):
![image](https://user-images.githubusercontent.com/89580052/134306689-7cf6fd5b-630c-43b1-9a68-08d0b979301b.png)

1. User interface (VIEW LOGIC) - a web or mobile application that interacts with the control logic.
2. DATA MODEL – a schema of the application's local data, including documents and large files.
3. CONTROL LOGIC is an algorithm that interacts between the user interface, the application data model and the blockchain interface (API).
4. BLOCKCHAIN LOGIC is an extension of the control logic and data model to the blockchain. 
- The control logic is complemented by smart contracts. 
- The data model is complemented by transactions.

## User Interface
### WEB interface
It is planned to create a WEB interface that allows the user to issue a synthetic token, the price of which is tied to the price of an exchange asset, place a synthetic token in the DEX liquidity pool, and also stake project tokens within the project. For performing each of these three operations, the user receives a reward in UNISX management tokens, as well as LP-tokens of DEX liquidity pools.<br>
The WEB interface includes the following main pages:
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

**Элемент 1)** В правом верхнем углу располагается кнопка подключения к кошельку пользователя Connect Walet. Слева от этой кнопки - информационное поле, содержащее наименование сети и адрес кошелька.

**Элемент 2)** В левом верхнем углу располагается кнопка перехода к внешнему интерфейсу голосования Vote.

**Элемент 3)** Интерфейс INSTRUMENTS / PORTFOLIO, отображающий возможности выпуска производных и портфель пользователя.
Пользователь может выбрать строку в таблице INSTRUMENTS или PORTFOLIO. В соответствии с выбранной строкой предзаполняются данные в интерфейсах Элемента 2.

**Элемент 4)** Группа интерфейсов операций (MINT/POOL/STAKE) - пользователь выбирает вкладку, соответствующую требуемой ему операции – минтинг, помещение в пул ликвидности, стейкинг. 
Часть полей в этом элементе заполняется автоматически на основе выбранной в первом элементе строки.

#### Интерфейс MINT
Выпуск и сжигание синтетических токенов. 

![SPACsynt - contracts-MINT-UI (6)](https://user-images.githubusercontent.com/89580052/134819208-54471a91-abb6-493f-ad16-789a379012d3.jpg)

Пользователь выбирает строку инструмента в таблице инструментов или в таблице портфеля (если пользователь уже выпускал такие токены), на вкладке автоматически заполняются: 

- поля левой части: 

    = Collateral (наименование токена), 

    = Synt ticker (наименование синтетика), 

    = количество соответствующих токенов в кошельке пользователя (зеленые цифры под названием токенов); 
    
- поля правой части: 
    
    = Collateral (наименование токена), 
    
    = количество соответствующих токенов в кошельке пользователя (зеленые цифры под названием токенов), 
    
    = количество токенов обеспечения для уже выпущенных синтетиков (красные цифры справа от "Max:"), 
    
    = поле слева от наименование токена обеспечения заполняется нулевым значением,
    
    = Collateral Ratio = (Synt amount / Collateral amount) * Synt price, 
    
    = Liquidation Price - показывает при каком значении цены появляется риск ликвидации.
    
- поля средней части:

    = виджет графика котировок инструмента,
    
    = описание инструмента,
    
    = начисленное вознаграждение в токенах UNISX и UMA.

Для **выпуска** синтетического токена пользователь должен выполнить следующие действия:
- ввести количество токенов обеспечения, которое пользователь готов использовать для выпуска синтетических токенов, количество выпускаемых синтетиков заполняется автоматически с учетом collateral requirement 
    *ИЛИ*
- ввести количество синтетических токенов, которое поьзователь желает выпустить, требуемое количество токенов обеспечения заполняется автоматически с учетом collateral requirement
- нажать кнопку MINT.

Для **сжигания** токена пользователь должен выполнить следующие действия:
- выбрать строку соответствующего токена в таблице портфеля
- ввести количество токенов обеспечения, которое пользователь желает получить, количество сжигаемых синтетиков заполняется автоматически с учетом collateral requirement 
    *ИЛИ*
- ввести количество сжигаемых синтетических токенов, возвращаемое пользователю количество токенов обеспечения заполняется автоматически с учетом collateral requirement
- нажать кнопку BURN.

Для **пополнения** обеспечения уже выпущенных токенов пользователь должен выполнить следующие действия:
- указать количество добавляемых токенов обеспечения в правой части интерфейса
- нажать конопку SUPPLY.

Для **вывода** избыточного обеспечения уже выпущенных токенов пользователь должен выполнить следующие действия:
- указать количество выводимых токенов обеспечения в правой части интерфейса
- нажать кнопку WITHDRAW.

Для **получения начисленного вознаграждения** требуется нажать кнопку CLAIM REWARDS.

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

Для **получения начисленного вознаграждения** пользователь должен нажать кнопку CLAIM REWARDS.

#### Интерфейс REG
Служебный интерфейс для регистрации новых UniSX и удаления деривативов по которым принято такое решение по итогам голосования.

## Структура модулей
Система включает два типа модулей: УПРАВЛЯЮЩАЯ ЛОГИКА (off-chain) и ЛОГИКА БЛОКЧЕЙН (on-chain), взаимодействующие между собой и с пользователем:
![SPACsynt - contracts-Architecture 3](https://user-images.githubusercontent.com/89580052/134308055-99b53e17-ce76-4dde-9765-921a730a2f1a.jpg)
