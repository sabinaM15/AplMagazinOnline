O aplicatie web Angular (Simgle Page Application) care sa simuleze afisarea unor produse dintr-un magazin online.

Din pagina respectiva sa se poata face urmatoarele actiuni:
- cautarea unui produs dupa un camp (ex: nume)
- cautarea si afisarea produselor care se afla intr-un magazin selectat dintr-un dropdownList (se vor cauta si se vor afisa toate adresele introduse la produse)
- sortarea produselor dupa: nume, pret (+ oricare alt camp la alegere)
- editarea informatiilor unui produs
- stergerea unui produs
- adaugarea unui produs nou

Structura unui produs sa fie:
- nume (sa fie completat obligatoriu)
- pret (sa fie completat obligatoriu)
- adresele magazinului de unde se poate ridica produsul (pot fi mai multe adrese, minim 1). Adresele sa contina: Nume Locatie, Strada, Nr, Oras + orice alt camp doresti
- cantitate (sa fie completat optional. Numeric)
- descriere (sa fie completat optional)
- comentarii (sa fie completat optional. Text pe mai multe randuri)
- rating (sa fie completat optional. Poate fi un dropdown cu valori de la 1 la 5)
- oricare alte campuri

Sugestii de implementare a aplicatiei:
- cateva produse afisate (maxim 4 pe un rand)
- posibilitatea de a selecta din produsele afisate (Ex: prin checkBox; prin click pe produs si incadrarea lui intr-un chenar; oricare alta metoda)
- posibilitatea introducerii unui nume pentru lista de produse selectate
- salvarea listei, impreuna cu produsele selectate

Pentru stocarea, manipularea si salvarea datelor puteti folosi:
- apeluri http catre un server creat local
- baza de date
- fisere JSON
- variabile locale (in-memory)
- oricare alta metoda cunoscuta

Nu este necesar sa se acopere toata cerintele mentionate mai sus. Se pot adauga functionalitati noi dupa preferinte.

P.S. Daca se va folosi o baza de date, atasat sa fie scripturile care se folosesc la crearea si functionarea bazei de date.
