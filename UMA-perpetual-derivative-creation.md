# Как создается бессрочный дериватив UMA

Для каждого perpetual дериватива требуется:

**1)** Perpetual contract и синтетический токен:
-	Они создаются одной транзакцией c помощью PerpetualCreator, так что могут считаться неотделимыми друг от друга.
-	При создании Perpetual contract в качестве параметров передаются два идентификатора: Price identifier и Funding rate identifier

**2)** Боты – используются для получения котировок извне и обработки ситуаций liquidation и dispute через DVM:
-	Disputer
-	Liquidator
-	Funding rate proposer
-	Funding rate disputer
*Боты могут использоваться стандартные или быть модифицированы под требования создаваемого дериватива.*

**3)** Price feed с помощью которого боты получают котировки по API
-	В репозитории UMA имеется файл (https://github.com/UMAprotocol/protocol/blob/master/packages/financial-templates-lib/src/price-feed/DefaultPriceFeedConfigs.ts), где для каждого идентификатора прописано, откуда брать цену, по какой формуле считать (если там есть какие-то расчеты). Если примут наш UMIP, то мы внесем изменения в этот файл. Этот файл затем входит в состав ботов. 
-	Бот достает Price identifier или Funding rate identifier из контракта, смотрит в этом файле какой price feed использовать, получает цену.
-	Для базового актива мы используем price feed, который обращается к API MarketStake. 
-	Для funding rate надо сделать более сложный price feed, который берет цену синтетического токена, например с uniswap, цену базового актива, и вычисляет funding rate.

**4)** Для того, чтобы включить Price feed в файл в репозитории UMA и связать его с соответствующим Price identifier или Funding rate identifier требуется пройти процедуру согласования UMIP
-	Предполагается, что потребуется отдельные UMIP для Price identifier и для Funding rate identifier.
-	Есть предположение, что все можно описать и согласовать в одном UMIP
