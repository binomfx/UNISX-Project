/*********************************************/
/*            UniSX user interface           */
/*********************************************/
var userAccount = 0;
var ActiveTable = 0;
var ActiveRow = 0;
const ethereumButton = document.querySelector('.connectWalletButton');
const provider = detectEthereumProvider(); /* Определить провайдера блокчейна */

showAccount();

/*------------------------------------------------------------------------------------*/

ethereumButton.addEventListener('click', () => {
        /* Обработка нажатия кнопки для подключения кошелька */
        connectWallet();
    });

async function connectWallet ()
    {
        /* Подключение кошелька */
        if (provider) 
        {
            if (typeof window.ethereum !== 'undefined') 
            {
                /* Если тип кошелька MetaMask - подключиться */
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                console.log('MetaMask Connected = ', window.ethereum);
                localStorage.setItem('userAccount', account);
                localStorage.setItem('networkId', getNetworkId());
                showAccount ();

                /* Где-то здесь будем подключать и друие кошельки */
            }
            else
            {
                console.log('No MetaMask Installed...');
            }
        }   
        else 
        {
            console.log('No Web3 Detected...'); 
        }
    }

function getNetworkId ()
    {
        const chainId =Number(window.ethereum.chainId);
        let chainType = [0, 'Ethereum Main Network (Mainnet): ', 2, 'Ropsten Test Network: ',
                            'Rinkeby Test Network: ', 'Goerli Test Network: ',6,7,8,9,10,11,12,13,14,15,
                            16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
                            40,41,'Kovan Test Network: '];
        return (chainType[chainId]);
    }

function showAccount () {
    return new Promise((res, rej) => {
            document.getElementById("network").innerHTML = localStorage.getItem('networkId');
            document.getElementById("account").innerHTML = localStorage.getItem('userAccount');
            getPortfolioList(localStorage.getItem('userAccount'));
            res({status:true});
        })
    }
    
ethereum.on('accountsChanged', (accounts) => {
        /* Обработка смены аккаунта.                                  */
        /* "accounts" всегда будет массив, но он может быть и пустой. */
        const account = accounts[0];
        localStorage.setItem('userAccount', account);
        localStorage.setItem('networkId', getNetworkId ());
        window.location.reload();
    });

/*---------------------------------------------------------------------------------*/

function Instrument(){
    this.Name="";
    this.Price=0;
    this.Rewards=0;
    this.Description="";
    this.TradingViewLink="";
}

var InstrumentsList = [];

function getInstrumentsList(){

}

function showInstruments(){

}

function Asset(){
    this.Name="";
    this.Status=null;
    this.Number=0;
    this.Value=0;
    this.GT=0;
    this.UMA=0;
    this.Instrument=0; /* Ссылка на инструмент, "экземпляром" которого является актив */
}

var PortfolioList = [];

async function getPortfolioList(walletAddress)
    {
        /* Перебор всех возможных токенов */
        /*      Проверить количество каждого токена по userAccount */
        /*      Если количество токенов > 0 то занести токен и его количество в массив */
        /*          - в отдельные элементы в зависимости от состояния. */

        const defi_tokens = await getJSONdata('/json/defi_tokens.json');
        const stablecoins = await getJSONdata('/json/stablecoins.json');
        const dex_lp = await getJSONdata('/json/dex_lp.json');

        
        let tokenAddress =  []; 
        /*                        {token: 'USDC', decimals:6, address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'},
                                {token: 'USDT', decimals:6, address: '0xdac17f958d2ee523a2206206994597c13d831ec7'},
                                {token: 'DAI', decimals:18, address: '0x6b175474e89094c44da98b954eedeac495271d0f'},
                                {token: 'UMA', decimals:18, address: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828'}
                            ];
        */
        tokenAddress = tokenAddress.concat(defi_tokens, stablecoins);

        if (dex_lp.length) {
            for(let i=0; i<dex_lp.length; i++) {   
                tokenAddress.push({token:dex_lp[i].token,decimals:dex_lp[i].decimals,address:dex_lp[i].address})       
            }
        }
        
        // Баланс ETH
        let balanceETH = Number(await ethereum.request({ method: 'eth_getBalance',
                                                         params: [
                                                                    walletAddress,
                                                                    'latest'
                                                                ]
        }));
        let decimals = 18;
        balanceETH = balanceETH / (10**decimals);
        console.log('Balance of ETH = ', balanceETH);

        let e = new Asset();
        e.Name = "ETH";
        e.Status = "-";
        e.Number = balanceETH;
        e.Value = 0;
        e.GT = 0;
        e.UMA = 0;
        e.Instrument = "";

        // Баланс токенов ERC20
        for (let i of tokenAddress) {
            let a = new Asset();

            let balance = await ethereum.request({ method: 'eth_getBalance',
                                                   params: [
                                                                i.address,
                                                                'latest'
                                                           ]
            });
            balance = balance / (10**i.decimals);
            console.log('Balance of ',i.token, ' = ', Number(balance));
            // Проверить статус - в кошельке, пул или стейк

            a.Name = i.token;
            a.Status = "-";
            a.Number = balance;
            a.Value = 0;
            a.GT = 0;
            a.UMA = 0;
            a.Instrument = "";
        }

    }

function showPortfolio(){

}

function getStableCoinList(){

}

function getTokenList(){

}



/*----------------------------------------------------------------------------------*/

/* showTabs () */
function layer(a){
    l=getElementsByClass('layer',null,'div');
    for(var i=0;i<l.length;i++)l[i].style.display=(i==a?'block':'none');
    l=getElementsByClass('layer',null,'span');
    for(var i=0;i<l.length;i++){
        l[i].className=(i==a?'layer act':'layer');
    }
}

/* универсальная функция получения всех DOM объектов заданного класса */
function getElementsByClass(searchClass,node,tag){
    var classElements=new Array();
    if ( node == null ) node=document;
    else if(typeof(node)!="object")node=document.getElementById(node); if(!node)return;
    if ( tag == null ) tag='*';
    var els=node.getElementsByTagName(tag);
    var elsLen=els.length;
    var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i=0, j=0; i < elsLen; i++) {
           if ( pattern.test(els[i].className) ) {
                classElements[j]=els[i];
               j++;
          }
    }
    return classElements;
}
