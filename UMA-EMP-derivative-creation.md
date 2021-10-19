# Как создается срочный дериватив UMA
[UMA Development Guide](https://docs.umaproject.org/build-walkthrough/build-process)
## [The ExpiringMultiParty (EMP) Contract Template](https://docs.umaproject.org/synthetic-tokens/what-are-synthetic-assets#the-expiringmultiparty-emp-contract-template)
Можно написать [бесценные](https://docs.umaproject.org/synthetic-tokens/what-are-synthetic-assets#priceless-synthetic-tokens) шаблоны финансовых контрактов для создания различных видов финансовых продуктов. 
Первый тип синтетических контрактов на UMA используется для создания синтетических токенов с истекающим сроком действия и называется ExpiringMultiParty contract (EMP).<br>
EMP позволяет спонсорам токенов (т.е. пользователям, которые выпускают новые синтетические токены) обеспечивать свою позицию в определенной валюте обеспечения. 
В любое время после истечения срока действия EMP любой держатель синтетических токенов может обменять свои токены на расчетную стоимость, 
которая выражена в валюте обеспечения и привязана к цене price identifier контракта EMP по отметке времени истечения срока действия контракта. 
Расчетное значение определяется через 2 часа с момента истечения срока действия Оптимистичным Оракулом UMA. 
В редких случаях, когда цена оспаривается Оптимистичным Оракулом, будет вызываться Механизм проверки данных UMA (DVM) для разрешения спора в течение 48 часов.<br>
Больше о контракте EMP можно увидеть [здесь](https://docs.umaproject.org/synthetic-tokens/expiring-synthetic-tokens).<br>
## Для каждого EMP дериватива требуется:
1)
