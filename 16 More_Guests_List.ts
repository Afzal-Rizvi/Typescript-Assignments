

let Guest_List :string[] = ['Afzaal', 'Hamza', 'Hilal',];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// } 

let absent_Guest :string ='Afzaal';

let new_Guest :string ='Mujtaba';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
} 

console.log(`Mr. ${absent_Guest} is not coming to the party.`); 

console.log('Good News! We find Big Table So, we are inviting 3 more Guests.')

Guest_List.unshift('Abbas'); 

Guest_List.splice(2 , 0 , 'Ali' );
Guest_List.push('Raza');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
} 
