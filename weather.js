const city=document.getElementById("entercity");
const citydisplay=document.getElementById("displaycity");
const cloud=document.getElementById("displaycloud");
const temp=document.getElementById("displaytemp");
const humid=document.getElementById("displayhumide");

  async function weathercheck(){
     const cityname=city.value;
     const date = new Date();
     const year=date.getFullYear();
     const  month=date.getMonth()+1;
     const day = date.getDate();

     const  data= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/${year}-${month}-${day}?key=QLBAZSETCYLM8ERHZT9B7A9ZY`);
     const res=await data.json();
     console.log(res); 

    //  citydisplay.innerHTML=res.address;






  

       
      

  } 