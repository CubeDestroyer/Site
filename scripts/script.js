let prod = [
    {id:1 ,name:"ESP Alexi Laiho Signature",price:2000,
     images:['res/prod1/1.jpg','res/prod1/2.jfif','res/prod1/3.jpg'],
     description:' The notorious signature guitar of a recently deceased hero Alexi Laiho from Children Of Bodom'},

    {id:2,name:"Ibanez RG 5120",price:  900,
     images: ['res/prod2/prod2_1.jpeg','res/prod2/prod2.jpg', 'res/prod2/prod2_2.jpg'],
     description: 'a Japanese dragon'},

    {id:3, name: "Matt Heafy Signature", price: 900,
    images: ['res/prod3/prod3.jpg',],
        description: "Your face Your lips ... Burning red.. Annihilation"
    }



]


function findById(id){
    for(let k = 0; k < prod.length; k++){
     if(id === prod[k].id){
         return prod[k];
     }
    }
    return null;
}
document.getElementById('back').onclick = function() {
    document.location.href = "Main.html";
}

document.getElementById('basket').addEventListener(onclick(event),function () {
    addToBasket(parseInt(localStorage.getItem('current')),1);
})