 //  2. Multiple records of people are given, you have to print the first name and last name . 
   
 let friends = [   
    {fname: 'Rachal',lname:"Green" ,id: 1, marks : 98 },      
    {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },         
    {fname: 'Monica',lname:"Geller" , id: 3, marks : 75 },          
    {fname: 'Joey',lname:"Tribbiani" , id: 4, marks : 46 },         
    {fname: 'Chandler',lname:"Bing" , id: 5, marks : 78 },         
    {fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 }         
    ];

   function fname_lname(){

    console.log(friends);
    console.log(friends[0].fname,friends[0].lname);
    console.log(friends[1].fname,friends[1].lname);
    console.log(friends[2].fname,friends[2].lname);
    console.log(friends[3].fname,friends[3].lname);
    console.log(friends[4].fname,friends[4].lname);
    console.log(friends[5].fname,friends[5].lname);
        
   }
   fname_lname();
   