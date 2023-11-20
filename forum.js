const freelancers = [
    { name: "Brother Bob", price: 50, occupation: "teacher" },
    { name: "Sister Alice", price: 30, occupation: "writer" },
    { name: "Goose the Cat", price: 72, occupation: "driver" },
    { name: "Slice n Dice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Ms. Prism", price: 81, occupation: "teacher" },
    { name: "Mr. Impulse", price: 43, occupation: "teacher" },
    { name: "Sparkiplier", price: 76, occupation: "programmer" },
    { name: "Mr. Wire", price: 47, occupation: "teacher" }
  ];
  
   let setIntervalId;
   let price = 30;
   let freelancer = [];
const ave = document.getElementById("price")
ave.append(price)
const table = document.getElementById("table")


const addFreelancer = (freelancer)=>{  
  
  const tableRow = document.createElement("tr");  
  const freelancerName = document.createElement("th");
  const occupation =  document.createElement("th");
  const price =  document.createElement("th");
  
  freelancerName.textContent = freelancer.name
  occupation.textContent = freelancer.occupation
  price.textContent = freelancer.price
   
  tableRow.append(freelancerName, occupation, price)
  table.append(tableRow)
  
  
  
  for(var i = 0; i > freelancer.length; i++){
      i +=1;
      //return freelancer = i;
      console.log(i);
  }
 // freelancers.price = (price + freelancers.price)/i
  //price.textContent = freelancers.price
}

setIntervalId = setInterval(()=>{
  //set interval will run forever unless you tell it to stop, so it should only run under some condtion, otherwise you should clear the interval(it's important)
  if(freelancer < [0]){//there are more freelancers in the freelancer array to add to the page
      addFreelancer(freelancers)
  }else{//if all if the free lancers have been added
      clearInterval(setIntervalId)
  }
},500)    