function distance(){
    return "I'll go the distance for you";
   }

   function hoo(){
     return "Hoo";
   }

   function refrain(){
    let words = "";
    words+= `${distance()}`;
    words+= `${hoo()}`;
     return words; 

   }

   function song(){
       let r;

       console.log("You should be here with me/n");
       console.log("Giving me what I need/n");
       console.log("Won't you come close/n");
       console.log("I can' wait that much longer/n");
       console.log("If you could only see/n");
       console.log("How you're affecting me/n");
       console.log("Wish I was your home/n");
       console.log("Wish you were never gone/n");
       console.log("Why, why ?/n");
       console.log("Why, why, oh why?/n");
       console.log("Why, why ?/n");
       console.log(" Why, oh why ?/n");
       r = refrain();
       console.log(r);
       console.log("Two days is all I need/n");
       console.log("We could just make believe/n");
       console.log("Time doesn't matter/n");
       console.log("Let's just get lost together/n");
       console.log("Jump through the fire for me/n");
       console.log("Cross all the land and sea/n");
       console.log("If you could take it/n");
       console.log("Then we could make it/n");
       console.log("Why, why?/n");
       console.log("Why, why, oh why?/n");
       console.log("Why, why?/n");
       console.log("Why, oh why?/n");
       console.log(r);
       return song;
      }
  
      song();  
   

