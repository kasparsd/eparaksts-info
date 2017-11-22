# eParaksta jeb eID lietotāja rokasgrāmata

## Izdevēja jeb _CA Root_ sertifikātu uzstādīšana

Lai dators uzticētos taviem lietotāja sertifikātiem, kas glabājas eID kartē, ir nepieciešams iestatīt tā saucamos izdevēja jeb "CA (certification authority) Root" sertifikātus, ko izmantoja LVRTC, lai parakstītu tavus sertifikātus.

[Lejuplādēt eID saknes sertifikātu virkni](https://raw.githubusercontent.com/kasparsd/eid-ca-certs/master/eid-lv.crt) vai apskatīt to [GitHub glabātuvi](https://github.com/kasparsd/eid-ca-certs). Saglabā to ar nosaukumu `eid-lv.crt` un atver kā parastu datni.


## Safari sertifikāta kļūda

Tīmekļa pārlūks Safari izmanto **Keychain Access**, lai saglabātu izvēlēto lietotāja sertifikātu jeb "identity preference" pie pirmās autentificēšanās reizes, tāpēc Safari nepiedāvā atkārtoti norādīt lietotāja sertifikātu, lai autentificētos vietnē, ko jau esi reiz apmeklējis. 

Lai norādītu citu sertifikātu, **ir jāizdzēš šī "identity preference"**. To var izdarīt atverot Keychain Access un lietotnes meklētājā ievadot vietnes adresi.
