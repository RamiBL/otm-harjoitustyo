##  Vaatimusmäärittely ##


#### Sovelluksen toiminta ####
Snake peli, jossa liikutetaan matoa ja yritetään syödä kenttään ilmestyviä ruokapaloja ilman että törmää mihinkään. Paloista saa pisteitä ja mato kasvaa. Peli loppuu törmäykseen, jolloin aukeaa uusi ikkuna (joskin hitaasti), josta pelaaja voi valita jatkavansa pelaamista aloittamalla uudestaan, tai katsomalla pisteitään.

#### Käyttäjät ##
----------------

- vain yksi pelaaja, ei mahdollisuutta liittää tiliä tai nimeä peliin

#### Toiminnallisuudet ##
-------------------------

- menu, pelaamisikkuna ja tilastoikkuna 

- tilastoikkunassa on lista kaikista tuloksista 

- peli-ikkuna sisältää itse pelitoteutuksen lisäksi pistetilanteen

- pelin päättyessä avautuu menu uudestaan

- menussa voi valita joko pelivaihtoehdon tai tilastoikkunan


#### Käyttöliittymäluonnos ##
-----------------------------

Sovellus koostuu kolmesta eri näkymästä. 

Peli-ikkuna:

<img width="610" alt="screen shot 2018-05-11 at 22 44 10" src="https://user-images.githubusercontent.com/34171671/39943834-fe501e78-556c-11e8-83a4-5bd6cf617e42.png">

Valinta-ikkuna:

<img width="801" alt="screen shot 2018-05-11 at 22 36 57" src="https://user-images.githubusercontent.com/34171671/39943856-1240063c-556d-11e8-89f4-c242e67fdf69.png">

Tilasto-ikkuna:

<img width="795" alt="screen shot 2018-05-11 at 22 46 37" src="https://user-images.githubusercontent.com/34171671/39943895-3f0e877e-556d-11e8-9a33-4920edcfe2f5.png">


#### Jatkokehitysideoita ##
--------------------------

- Käyttäjän luominen
- Käyttäjän luomisen jälkeen tietokantaan voidaan liittää sekä score, että käyttäjä
- Mahdollisuus vaikuttaa madon nopeuteen
- Erilaisia ruokia, joista saisi eri määrän pisteitä
- Seinät voisi valita pois, jolloin yhdestä seinästä mennään sisään ja vastakkaisesta tullaan ulos
- Pause/Play
