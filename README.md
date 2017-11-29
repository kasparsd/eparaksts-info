# eParaksta lietotāja rokasgrāmata

[![Dependency Status](https://david-dm.org/kasparsd/eparaksts-info/status.svg)](https://david-dm.org/kasparsd/eparaksts-info)

Šī ir [eParaksta rokasgrāmatas (eparaksts.info)](https://eparaksts.info) satura glabātuve.

Autors: [Kaspars Dambis](https://kaspars.net)


## Papildinājumi un labojumi

Ja vēlies ieteikt labojumu jeb papildinājumu, lūdzu izmanto [šo formu](https://github.com/kasparsd/eparaksts-info/issues/new) jeb izveido [izmaiņu pieprasījumu (pull request)](https://github.com/kasparsd/eparaksts-info/pulls).


## Kā tas strādā

Visu saturu, kas veidots [Markdown](https://daringfireball.net/projects/markdown/syntax) pierakstā un atrodas mapē `content`, apstrādā [Metalsmith](http://www.metalsmith.io), izmantojot HTML veidnes mapē `layouts`. Darbībai nepieciešams [Node.js](https://nodejs.org/en/).

	$ git clone https://github.com/kasparsd/eparaksts-info.git
	$ npm install
	$ node build.js

Pēc izmaiņu iekļaušanas `master` zarā, GitHub izsūta webhook ziņojumu [Netlify](https://www.netlify.com/), kas iedarbina būves procesu un publicē vietnes jauno versiju.
