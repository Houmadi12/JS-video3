/**
 * Les operateur
 * =, +=, -=, *=, %= : affectation
 * ++, --
 * + : addition
 * * : multiplication
 * / : Division
 * % : modulo
 * 
 * les operateur de comparaison
 * <, >, <=, >=, !=, !==, ==, ===
 * 
 * NB :  * et / son prioritaire par apport à l'additionn et la soustraction
 */

let N = 5;

N = N + 1;

// incremetation

N +=1
// ou N++, ++N , N-- ou N--
N++

/**La difference entre le post-incrémentation et prés-incrémentation
 * 1) Poste incrémentation
 * N++ -> N = N
 *     -> N + 1
 * 
 * 2) préIncrémentation
 * ++N -> N + 1
 *     -> N = N
 */
document.write(N);

// document.write(8 === '8')