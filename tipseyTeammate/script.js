
function search(n){
    console.log(n);
    drinkName = document.getElementById("drinkName");
    drinkIng = document.getElementById("drinkIng");
    /*let drinks = [
        {
            "index":"1",
            "name":"Alabama Slammer",
            "ing":["1","Southern Comfort","1","Amaretto","1","Sloe Gin","2","Orange Juice"]
        },
        {
            "index":"2",
            "name":"Americano",
            "ing":["1.5","Campari","1.5","Sweet Vermouth","1.5","Soda Water"]
        }
    ]*/
    
    //console.log(drinks);
    var isFound = false;
    drinkIng.innerHTML = "";
    for(i = 0; i < drinks.length;i++){
        if(n.length == 0){
            drinkName.innerHTML = "Sorry! It looks like you didn't search for anything!";
        break;
        }
        if(drinks[i].name.includes(n)){
            console.log(drinks[i]);
            isFound = true;
            drinkName.innerHTML = drinks[i].name;
            for(j = 0; j < drinks[i].ing.length;j++){
                drinkIng.innerHTML = drinkIng.innerHTML+drinks[i].ing[j]+" ";
                if(j % 2 != 0){
                    drinkIng.innerHTML = drinkIng.innerHTML+"<br>";
                }else{
                    drinkIng.innerHTML = drinkIng.innerHTML+" oz ";
                }
            }
        }
    }
    
    if(!isFound && n.length != 0){
        drinkName.innerHTML = "Sorry! I couldn't find that drink!";
    }
    console.log("got to end of for loop");
}
