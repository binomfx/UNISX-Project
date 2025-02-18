# Для чего пользователь выпускает синтетические токены UniSX

1. Целью выпуска синтетических токенов для пользователя является создание на основе принадлежащих ему низкодоходных низковолатильных активов, таких как стейблкойны, нового актива, способного приносить более высокую доходность при разумном риске.

2. Новый актив представляет собой синтетический токен, цена которого привязана к цене некоторого оф-чейн актива (базового актива) - имеющего биржевую котировку или нет.
При этом цена базового актива транслируется в смарт контракт с помощью механизма ценовых оракулов.

![image](https://user-images.githubusercontent.com/89580052/134311115-c2b8f478-3278-4906-9053-a069469828fa.png)

3. Синтетический токен обеспечен залогом стейблкойнов, которые списываются с кошелька пользователя (Спонсора) в момент выпуска синтетического токена и блокируются на контракте. Коэффициент обеспеченности (соотношение залога и дисконтированного залога – Kc = Nc / Cd) зависит от волатильности актива, цена которого используется, но в любом случае превышает 100%.
Кроме того, спонсор получает вознаграждение за минтинг в виде токенов управления сервиса (GT), которые используются как для голосования по вопросам развития сервиса, так и в качестве доходного актива.

4. Спонсор имеет право в любой момент “сжечь” синтетический токен и получить стейблкойны, которые использовались в качестве обеспечения, по текущей цене базового актива.
Для этого спонсор должен иметь на кошельке необходимое количество синтетических токенов.

5. Изменение цены базового актива приводит к появлению прибыли или убытка по позиции спонсора.
- При снижении цены базового актива у спонсора появляется прибыль:
![image](https://user-images.githubusercontent.com/89580052/134312517-38fe0bdd-4981-4e83-b8cf-205540f565ac.png)

- При увеличении цены базового актива у спонсора может возникнуть убыток, выражающийся в необходимости увеличения залога:
![image](https://user-images.githubusercontent.com/89580052/134312693-e62dc8ac-12fb-43cd-b69d-03640b977e72.png)

- В этом случае спонсор должен внести дополнительно стейблкойны в обеспечение синтетического токена или «сжечь» часть синтетических токенов.
- В противном случае инициируется процедура ликвидации, в ходе которой определяется пользователь-ликвидатор, получающий право внести необходимое дополнительное обеспечение и «сжечь» принадлежащие ему синтетические токены получив часть заложенных спонсором стейблкойнов. Количество «сжигаемых» ликвидатором синтетических токенов определяется таким образом, чтобы в результате ликвидации оставшиеся синтетические токены были полностью обеспечены. Ликвидатор получает вознаграждение в размере 10%, которые выплачиваются из суммы дисконта. Спонсор увидит в контракте, что количество синтетических токенов уменьшилось, обеспечение сократилось, но оставшиеся синтетические токены обеспечены.

6. Спонсор может распорядиться выпущенными синтетическими токенами следующим образом:
-	Держать их на кошельке. В этом случае спонсор не получает дополнительного дохода помимо токенов управления, но обязан поддерживать обеспечение синтетического токена на необходимом уровне путем внесения дополнительного обеспечения или «сжигания» синтетических токенов. При этом он не несет рисков, связанных с изменением цены базового актива, так как самостоятельно распоряжается выпущенными синтетическими токенами. 
-	Продать. В этом случае спонсор фактически открывает короткую позицию по синтетическому токену. Спонсор получает средства от продажи и может инвестировать их для получения более высокой доходности, в том числе выпустить дополнительные синтетические токены (привязанные, например, к другому базовому активу). 

     o	Для того чтобы иметь возможность вернуть себе залог («сжечь» синтетические токены) Спонсор должен снова их купить, но при снижении цены базового актива они обойдутся ему дешевле, поэтому он получит выгоду. Однако если базовый актив подорожает, то спонсор может понести убытки как при покупке синтетических токенов, так и по причине необходимости увеличения обеспечения. 

     o	Дополнительные токены управления при продаже синтетических токенов спонсор не получает.

-	Разместить в пул ликвидности на DEX. В этом случае спонсор получает комиссионный доход, который выплачивает DEX от каждой обменной операции. Как и в предыдущем пункте, для того чтобы «сжечь» синтетические токены спонсор должен сначала забрать их из пула ликвидности. 

     o	За размещение синтетических токенов в пул ликвидности спонсор получает дополнительные токены управления. 

     o	Разместить синтетические токены в пул ликвидности и получить токены управления может не только спонсор, но и любой другой владелец синтетических токенов.

-	Заблокировать на контракте сервиса (стейк). В этом случае синтетические токены «изымаются из обращения», в результате чего может увеличиться их цена. 

     o	За стейкинг начисляется вознаграждение в виде токенов управления.

     o	Стейкинг и вознаграждение за него доступны не только спонсорам, но и любым владельцам синтетических токенов.

При этом необходимо помнить, что в любом случает за спонсором сохраняется обязанность поддерживать обеспечение выпущенных им синтетических токенов на требуемом уровне.



