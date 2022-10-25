console.log("Now the names are defined, if you want to change the names just feel free to assign other value to hacker1 and hacker2.");
// Iteration 1: Names and Input
let hacker1 = "Ronald";
console.log("The driver's name is " + hacker1);

let hacker2= "Hermione";
console.log("The navigator's name is " + hacker2 );


// // Iteration 2: Conditionals
if(hacker1==undefined || hacker2 ==undefined){
    console.log("You did not define the variables!");
}
else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let spacedName='';
for(let i=0; i<hacker1.length; i++){
  spacedName += (hacker1[i] + " ");
};

console.log(spacedName.toUpperCase());

// 3.2
let reversedName='';
for(let j=hacker1.length-1; j>=0; j--){
    reversedName += (hacker1[j]);
};

console.log(reversedName);

// 3.3
let nameArray = [hacker1, hacker2];
console.log(nameArray.sort());


