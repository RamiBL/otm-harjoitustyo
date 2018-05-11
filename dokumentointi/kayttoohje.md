**Kayttöohje**
--------------
Uusin, mutta valitettavasti ei toimiva. Electron-build prosessi muuttaa sqlite3/lib/binding/electron-v1.8-darwin-x64:n vääräksi osoitteeksi, jolloin peli ei toimi. Peliä voi pelata lataamalla koodin ja juoksuttamalla npm start (täytyy siis olla npm asennettuna). Electron-build muuttaa osoitteen sqlite3:n bindingille ei-toimivaksi, jolloin peli ei pyöri. Ongelmia ollut myös testien pyörittämisessä samaisesta syystä. Itsellä ei ainakaan ole ongelmia pyörittää suoraan snakes folderista, joten toivottavasti saat toimimaan ilman suurempia vaivoja!
