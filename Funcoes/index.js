function vacinarPet(pet, vacina) 
{
  pet.vacinas.push(vacina)
  // ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
  // cada vacina deve ser um objeto que contem atributos nome e data
  // não vá apagar as vacinas anteriores!
}

function castrarPet(pet) 
{
  if(!pet.castrado)
  {
    pet.castrado = true
  }
  else
  {
    console.log("esse pet já é castrado, não posso castro-lo de novo");
  }
// se o pet não for castrado castre o pet
// se o pet for castrado mande uma mensagem de
// "esse pet já é castrado, não posso castra-lo de novo"
}


function adicionarPet(nome, raca, peso, idade, cor, etc)
function adicionarPet(pet)
 {
  pets.push(pet);
  
  // ou construir o objeto na função
  // você pode tanto passar um objeto inteiro do pet
  // ele vai receber um objeto pet para ser adicionado
  // seguindo a estrutura dos pets dentro do array pets
  // não vá apagar os pets já existentes!
}

function darBanhoPet(pet) 
{
  return "o " + pet.nome + " tomou banho Hoje";
  // retorna a mensagem "o NomeDoPet tomou banho hoje"
}

function listarPets(pets)
{
  for(let i=0; i <=pets.length; i++)
  {
   console.log(pets[i].nome +" ," + pets[i].raca +" ," + pets[i].dono);
  }
  // recebe um array de pets e liste todos os pets do sistema (com nome, raca e dono)
}

module.exports = {vacinarPet, castrarPet, adicionarPet,darBanhoPet, listarPets,}