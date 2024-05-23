var l, rs, gal;

rs= parseFloat(prompt("quantos reais de gasolina quer colocar?"));
gal= 4.50;
l= rs/gal

alert(`você pagou: ${rs.toFixed(2)} e abasteceu: ${l.toFixed(1)}L`)