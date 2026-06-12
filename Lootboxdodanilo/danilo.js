contador = 1
function star() {
   if (contador == 1) {
      contador++
      bolinhapreta4.className = "bolinhaspretas"
   }
   else if (contador == 2) {
      contador++
      bolinhapreta3.className = "bolinhaspretas"
   }
   else if (contador == 3) {
      contador++
      bolinhapreta2.className = "bolinhaspretas"
   }
   else if (contador == 4) {
      contador = 0
      bolinhapreta1.className = "bolinhaspretas"  
   }
}