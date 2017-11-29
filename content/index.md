# eParaksta jeb eID lietotāja rokasgrāmata

## Sertifikātu uzstādīšana

Lai dators uzticētos sertifikātiem, kas glabājas tavā eID kartē, ir nepieciešams iestatīt to izdevēja [saknes sertifikātus](https://en.wikipedia.org/wiki/Root_certificate) kā uzticamus.

1. [Lejuplādē eID saknes sertifikātu virkni](https://raw.githubusercontent.com/kasparsd/eid-ca-certs/master/eid-lv.crt) vai apskati to [GitHub glabātuvē](https://github.com/kasparsd/eid-ca-certs).

2. Saglabā to ar nosaukumu `eid-lv.crt` un atver kā parastu datni.


## MacOS: Safari sertifikāta kļūda

Tīmekļa pārlūks Safari izmanto **Keychain** drošo glabātuvi, lai atcerētos tavu sertifikāta izvēli jeb "identity preference" pie pirmās autentificēšanās reizes. Turklāt Safari nepiedāvā atkārtoti norādīt lietotāja sertifikātu, lai autentificētos vietnē, ko jau esi reiz apmeklējis.

Lai izmantotu citu sertifikātu, ir jāizdzēš saglabātā "identity preference". To var izdarīt atverot Keychain Access un lietotnes meklētājā ievadot vietnes adresi.
