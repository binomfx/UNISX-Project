
render()

async function render() {
    const instruments = await getJSONdata('/json/unisx_instruments.json')
    const portfolio = await getJSONdata('/json/unisx_portfolio.json')
    const dex_lp = await getJSONdata('/json/dex_lp.json')
    const collateral_type = await getJSONdata('/json/stablecoins.json')
    const poolInterface = document.querySelector('form[name="pool_tab"]')
    const mintInterface = document.querySelector('form[name="mint_tab"]')

    fillInstrumentsTable('InstrumentsTable', instruments)
    fillPortfolioTable('PortfolioTable', portfolio)

    if (mintInterface) {
        const COLLATERAL = mintInterface.querySelector('select[name="collateral_type"]')

        const stableCoinsTypes = []

        if (collateral_type.length) {
            for(let i = 0; i < collateral_type.length; i++) {
                stableCoinsTypes.includes(collateral_type[i].token) || stableCoinsTypes.push(collateral_type[i].token)
            }
        }

        if (COLLATERAL) {
            stableCoinsTypes.forEach(option => fillSelect(COLLATERAL,option))
        }
    }

    if (poolInterface) {
        const DEX = poolInterface.querySelector('select[name="dex"]')
        const POOL = poolInterface.querySelector('select[name="choose_pool"]')

        const dexValues = []
        const poolValues = []

        if (dex_lp.length) {
            for(let i = 0; i < dex_lp.length; i++) {
                let s1_s2 = dex_lp[i].s1 + ' | ' + dex_lp[i].s2

                dexValues.includes(dex_lp[i].dex) || dexValues.push(dex_lp[i].dex)
                poolValues.includes(s1_s2) || poolValues.push(s1_s2)
            }
        }

        if (DEX && POOL && dexValues.length && poolValues) {
            dexValues.forEach(option => fillSelect(DEX,option))
            poolValues.forEach(option => fillSelect(POOL,option))
        }
    }

    const tables = document.querySelectorAll('.scroll-table-body table')
    if (tables.length > 0) {
        tables.forEach(table => {
            table.addEventListener('click', e => {
                const target = e.target
                let TR = (target.tagName === 'TD') ? target.parentNode : ''
                let viewData = ''
                if (TR && !TR.classList.contains('active')) {
                    const tbody = TR.closest('tbody')
                    const trs = document.querySelectorAll('tr[data-id]')
                    if (trs.length > 0) {
                        trs.forEach(tr => tr.classList.contains('active') && tr.classList.remove('active'))
                        clearTabs()
                    } else {
                        clearTabs()
                    }
                    if (!TR.classList.contains('active')) {
                        TR.classList.add('active')

                        const tableId = TR.closest('table').id
                        const dataId = TR.dataset.id
                        
                        clearTabs()
                        
                        switch (tableId) {
                            case 'InstrumentsTable':
                                viewData = instruments[dataId]
                                viewData.Table = tableId
                                break
                            case 'PortfolioTable':
                                viewData = portfolio[dataId]
                                viewData.Table = tableId
                                break
                            default:
                                break
                        }
                        fillTabs(viewData)
                        console.log(viewData)
                    }
                } else if (TR && TR.classList.contains('active')) {
                    TR.classList.remove('active')
                    viewData = ''
                    clearTabs()
                }
            })
        })
    }
}

function fillInstrumentsTable(id, json) {
    const table = document.querySelector(`#${id}`)
    let items = []
    if (table) {
        const tbody = table.querySelector('tbody')
        Object.keys(json).forEach(key => {
            items.push(`
                <tr data-id="${key}">
                    <td>${json[key].Name}</td>
                    <td>${json[key].Price}</td>
                    <td>${json[key].Rewards}</td>
                </tr>
            `)
        })
        tbody.insertAdjacentHTML('afterbegin', items.join(''))
    }
}

function fillPortfolioTable(id, json) {
    const table = document.querySelector(`#${id}`)
    let items = []
    if (table) {
        const tbody = table.querySelector('tbody')
        Object.keys(json).forEach(key => {
            items.push(`
                <tr data-id="${key}">
                    <td>${json[key].Name}</td>
                    <td>${json[key].Status}</td>
                    <td>${json[key].Number}</td>
                    <td>${json[key].Value}</td>
                    <td>${json[key].GT}</td>
                    <td>${json[key].OPIUM}</td>
                </tr>
            `)
        })
        tbody.insertAdjacentHTML('afterbegin', items.join(''))
    }
}