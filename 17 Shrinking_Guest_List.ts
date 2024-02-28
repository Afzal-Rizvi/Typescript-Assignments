let Guest_List :string[] = ['Afzaal', 'Hamza', 'Hilal',];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// } 

let absent_Guest :string ='Afzaal';
let new_Guest :string ='Mujtaba';
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// } 

console.log(`Mr. ${absent_Guest} is not coming to the party.`); 
console.log('Good News! We find Big Table So, we are inviting 3 more Guests.')

// add 3 guest in array
Guest_List.unshift('Abbas'); 
Guest_List.splice(2 , 0 , 'Ali' );
Guest_List.push('Raza');

// print 6 guest here
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
} 
//sorry message for guest for not inviting
console.log('\nSorry we can not arrange big table, only Two peoples will be invited.');

// remove the 4 guest
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for the dinner.`);
}

// remining 2 guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nYou are Still Invited.\n\nThank You!\n\n')
}

// i have remove all guest
Guest_List.splice(0,2);
console.log(Guest_List)