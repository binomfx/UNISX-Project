function fillTabs(data) {
    console.log('Fill ', data)
    if (typeof data !== 'object') return false
    const table = data.Table
    let name = data.Name
    let tableTab = ''
    switch (table) {
        case 'InstrumentsTable':
            tableTab = document.querySelector('form[name="mint_tab"]')
            if (tableTab) {
                const ticker = tableTab.querySelector('input[name="ticker"]')
                if (ticker) ticker.value = name
            }
            break
        case 'PortfolioTable':
            const tablePool = document.querySelector('form[name="pool_tab"]')
            const tableStake = document.querySelector('form[name="stake_tab"]')
            const tableMint = document.querySelector('form[name="mint_tab"]')
            let token = ''

            if (tablePool) {
                token = tablePool.querySelector('input[name="token"]')
                if (token) token.value = name
            }

            if (tableStake) {
                token = tableStake.querySelector('input[name="token"]')
                if (token) token.value = name
            }

            if (tableMint) {
                token = tableMint.querySelector('input[name="ticker"]')
                if (token) token.value = name
            }

            break
        default:
            break
    }
}

function clearTabs() {
    const forms = document.querySelectorAll('form.form__tab')
    if (forms.length)
        forms.forEach(form => form.reset())
}

function fillSelect(el,value) {
    const option = document.createElement('option')
    option.value = value
    option.innerText = value
    el.insertAdjacentElement('beforeend', option)
}

async function getJSONdata(url) {
    let json = ''
    await fetch(url).then(res => res.json()).then(data => json = data)
    return json
}

async function BurnMint(e) {
    const form = e.closest('form')
    const fd = new FormData(form)

    console.log('Burn ', fd)
}

async function Mint(e) {
    console.log('Mint')
}