# Oppgave 1 Lab 5

1.  hvilke navn blir definert i ytterste nivå (funksjoner og variabler)?
2.  dersom funksjonene f, f0, f1, f2, f3 er definerte, hva returnerer de hvis de kalles uten argumenter?
3.  hvilke av funksjonene som finnes er identiske? (f === f0? f0 === f1?)

### a

1.  Variabel i blir definert til 0, funksjon f returnerer kun i
2.  f0, f1, f2 returnerer 0
3.  ingen er identiske - untatt at den sier at i er lik 0 to ganger

var i = 0;
  while(i &lt; 3) {
    function f() {
      return i;
     }
    window["f" + i] = f;
    i++;  
                }
  i = 0;

### b

1.  Igjen så er variabelen i som blir definert. men ellers så returnerer funksjonen undefined.
2.  alle definert, de er egenskaper av det globale objektet, returnerer 0
3.  ingen er identiske - untatt at den sier at i er lik 0 to ganger

function example(){
 var i = 0;
  while(i &lt; 3) {
    function f() {
      return i;
 }
    window["f" + i] = f;
    i++;
 }
 i = 0;
 }

 example();

### c

1.  i er nå ikke definert, selve funksjonen er og ikke definert. funksjonen example blir definert. i er global variabel
2.  samme som b
3.  ingen er identiske - untatt at den sier at i er lik 0 to ganger

    function example(){
      i = 0;
      while(i &lt; 3) {
       function f() {
         return i;
       }
       window["f" + i] = f;
       i++;
       }
       i = 0;
    }

    example();

### d

1.  i og f er definert som globale funksjoner.
2.  alle returnerer 0
3.  ingen er lik

function example(){
 i = 0;
 while(i "&lt;" 3) {
   f = function() {
     return i;
 }
  window["f" + i] = f;
  i++;
 }
  i = 0;
 }

example();

### e

1.  funksjonen example blir definert, og variabelen i blir definert og satt til 0 på slutten av funksjonen. Funksjonen f blir også definert. i er lokal variabel siden den er deklarert senere
2.  
3.  ingen er lik

function example(){
 i = 0;
  while(i &lt; 3) {
    var f = function() {
      return i;
    }
    window["f" + i] = f;
    i++;
    }
    var i = 0;
 }

example();

### f

1.  f0 blir definert som en funksjon, og example. variabelen i blir definert som 0
2.  f0 blir definert som en funksjon inni example funksjonen. den blir ikke offisielt deklarert, men den autodeklarerer den
3.  f0 == f2

function example(){
 i = 0;
  while(i &lt; 3) {
    f0 = function() {
      return i;
 }
 window["f" + i] = f0;
 i++;
 }
 var i = 0;
 }

example();

### g

1.  Funksjon makeF, example og variabelen i er deklarert
2.  returnerer 0,1,2
3.  ingen er lik

    function makeF(i) {
      function f0() {
        return i;
      }
    return f0;
    }

    function example(){
    i = 0;
     while(i &lt; 3) {
       window["f" + i] = makeF(i);
       i++;
    }
    var i = 0;
    }

example();

### h

1.  funksjonen function blir deklarert inline, og så lager den en funksjon inni seg som returnerer i og
2.  anonym funksjon
3.  ingen er lik

    function example(){
    i = 0;
       while(i &lt; 3) {
         (function(i){
           function f() {
             return i;
    } window["f" + i] = f; })(i);
    i++;
    }
    var i = 0;
    }

    example();

### i

1.  funksjonen example er deklarert.
2.  
3.  f0 == f2, begge returnerer 2

     function example(){
     i = 0;
      while(i &lt; 3) {
        (function(i){
          f0 = function() {
            return i;
     }
     window["f" + i] = f0;})(i);
     i++;
     }
     var i = 0;
    }

example();
