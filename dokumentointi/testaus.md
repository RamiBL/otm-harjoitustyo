# Testausdokumentti

Ohjelmaa on testattu sekä automatisoiduin yksikkö- ja integraatiotestein JUnitilla sekä manuaalisesti tapahtunein järjestelmätason testein.

## Yksikkö- ja integraatiotestaus

### sovelluslogiikka

Kaikkia sovelluslogiikan luokkia on testattu kattavasti.

### database-luokat

Valitettavasti database-luokkia ei ole testattu, sillä oli suuria ongelmia sqlite3:n ja electronin yhteistyön kannalla, sekä aikarajoitteita.

### Testauskattavuus

<img width="573" alt="screen shot 2018-05-11 at 23 06 46" src="https://user-images.githubusercontent.com/34171671/39944654-20a3fd84-5570-11e8-9b47-1b5e3121c54e.png">


### Asennus ja kanfigurointi

Sovellusta on testattu OSX -ympäristössä yarn testillä, sekä yarn test --coverage komennolla.



## Sovellukseen jääneet laatuongelmat

Kuten jo mainitsin, kumpikin databaseluokista ([readdata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/readdata.js) ja [writedata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/writedata.js)) ovat jääneet testeittä.
