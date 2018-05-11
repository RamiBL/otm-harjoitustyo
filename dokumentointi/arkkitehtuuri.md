**Rakenne**
------------
Koodin pakkausrakenne on seuraavanlainen:

![untitled diagram](https://user-images.githubusercontent.com/34171671/39920630-655f14f4-5520-11e8-8d70-6de3b1c4e725.png)


Pakkauksessa [snake.db](https://github.com/RamiBL/otm-harjoitustyo/tree/master/snake/db) on kaksi luokkaa, [readdata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/readdata.js) ja [writedata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/writedata.js), joissa on funktioita pysyväistallennuksen (Sqlite database) täyttämiseen ja sieltä lukemiseen, sekä database tiedosto scores.db (ja [test.db](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/test.db)). <br><br>
Pakkauksessa [snake.logic](https://github.com/RamiBL/otm-harjoitustyo/tree/master/snake/logic) on kolme luokkaa: [controls.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/logic/controls.js), [food.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/logic/food.js) ja [snake.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/logic/snake.js).<br>
[Controls.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/logic/controls.js):issä käsitellään snake-olion liikuttamista, foodissa ruoan luomista ja snakessa madon luomista. <br><br>
[snake.ui](https://github.com/RamiBL/otm-harjoitustyo/tree/master/snake/ui) on rakenteeltaan yksinkertainen ja sisältää vain [snakescript.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/ui/snakescript.js) tiedosto, joka vastaa madon ja ruoan piirtämisestä.



**Käyttöliittymä**
--------------------

Käyttöliittymästä vastaavat html sivu, css-tiedosto [snakestyle.css](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/snakestyle.css), sekä [snakescript.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/ui/snakescript.js). Käyttöliittymä on erittäin yksinkertainen, sillä pelaajalla ei ole muuta mahdollisuutta kuin pelata. Ei siis ole pause tai play mahdollisuuksia, eikä peli-ikkunasta pääse muualle (eikä siis muistakaan ikkunoista). 




**Tietojen pysyväistallennus**
------------------------------

Tietojen pysyväistallennuksesta vastaa luokat [writedata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/writedata.js) ja [readdata.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/readdata.js), sekä tietokanta scores.db, jotka löytyvät kaikki pakkauksesta [snake.db](https://github.com/RamiBL/otm-harjoitustyo/tree/master/snake/db).
Talletus ja lukufunktioissa on käytetty async -logiikkaa, jotta highscore päivittyisi heti kuoleman jälkeen pelissä.
<br><br>

### Tiedostot
<br>
scores.db sisältää yhden pöydän, joka sisältää integerejä (score). Aina kun pelaaja kuolee, talletetaan score pöytään. Pelin alkaessa uudelleen, haetaan aina suurin score ja asetetaan highscoreksi (nyt tapahtuu samaan aikaan).


**Ohjelman rakenteeseen jääneet heikkoudet**
--------------------------------------------

- Jostain syystä (saa ehdottaa syitä!) en saanut yhtä diviä esille enää pelin koodauksen loppuvaiheissa, josta syystä käyttöliittymä jäi aika yksinkertaiseksi. Oli tarkoitus, että pelin päättyessä esitetään viesti pelin päättymisestä, ja että pelaaja voisi valita pelaavansa uudelleen, tai katsovansa kaikkia scoreja (johon löytyy funktio [getAll()](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/db/readdata.js).
Toki jonkinlainen ikkuna samoilla vaihtoehdoilla voisi esiintyä jo alussa, jolloin peli ei alkaisi heti sovelluksen avauduttua.

- Myöskin [snakescript.js](https://github.com/RamiBL/otm-harjoitustyo/blob/master/snake/ui/snakescript.js)-tiedostoa voisi vielä yksinkertaistaa, ja ehkä eriyttää vielä joitain funktioita sen sisältä muualle.

- Luulisin, että async toiminnallisuus tietokantaoperaatioissa hidastaa välillä pelin alkua. 

- Tietokannan saa laitettua lukkoon kuolemalla tarkoituksenmukaisesti (kaipa sama ongelma ilmenee vaikka kuolisikin vahingossa) monta kertaa putkeen. Tämä ei kaada peliä, eikä muutenkaan vaikuta pelikokemukseen mitenkään, mutta consoliin tulee virheilmoitus.
