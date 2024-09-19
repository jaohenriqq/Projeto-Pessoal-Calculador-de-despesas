let value = parseInt(prompt('qual o valor bruto que sua empresa arrecadou?\n 2-encerrar programa'))
if(value>2){
    let value1 = parseInt(prompt('quanto você gastou com aluguel e serviços?'))
    let value3 = parseInt(prompt('quantos funcionários você tem?'))
    let value4 = parseInt(prompt('quanto você gastou com cada funcionário?'))
    let money= value3*value4
    let value5 = parseInt(prompt('você teve quanto de gasto com publicidade?'))
    let value6 = parseInt(prompt('você pagou quanto de taxas?'))
    let total =(value1+money+value5+value6)
    var number = 2
  while(number==2)
    {let option = prompt('você quer ver :\n 1- quanto você tem de saldo líquido\n 2-quanto você teve de despesas?\n 3-sair da função ') 
  
    
  switch(option){
    case ('1'):
      alert(`seu saldo líquido é de: ${value - total}`)
      break
    case ('2'):
      alert(`seu total de despesas é de: ${total}`)  
      break
    case('3'):
    number++  
      alert('voce saiu da função')
      break
    }
   }
  for(let take =0;take<1;take++)
    alert(`sua média de gastos é de: ${total/4}`)
}   
else{
    value==2
    alert('programa encerrado')
}
  
   
