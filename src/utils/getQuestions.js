const qBank = [
  {
    statement: "Meri Saari pe kya gira tha ?",
    options: ["Juice", "Chane", "Cooker", "Dish"],
    correct: "Juice",
  },
  {
    statement: "May kaha gai thi ?",
    options: ["Nahane", "Khane", "Pakane", "Rone"],
    correct: "Nahane",
    
  },
  {
    statement: "Rasode may kaun aaya tha ?",
    options: ["Rashi Ben", "Kokila Ben", "Gopi Ben", "Cooker"],
    correct: "Rashi Ben",
    
  },
  {
    statement: "Kaun Tha, haa kaun tha ?",
    options: ["Tum", "May", "Tum May", "Rashi"],
    correct: "Rashi",
  },
  {
    statement: "Cooker say kya nikal diye ?",
    options: ["Chane", "Cooker", "Rashi", "Kokila"],
    correct: "Chane",
    
  },
  {
    statement: "Khali Cooker Gas pe kisne chadhaye ?",
    options: ["Rashi Ben", "Kokila Ben", "Gopi Ben", "Cooker"],
    correct: "Rashi Ben",
    
  },{
    statement: "Answer is Juice ?",
    options: ["Juice", "Chane", "Cooker", "Dish"],
    correct: "Juice",
  },
  {
    statement: "Answer is Nahane ?",
    options: ["Nahane", "Khane", "Pakane", "Rone"],
    correct: "Nahane",
    
  },
  {
    statement: "Rasode may kaun aaya tha ?",
    options: ["Rashi Ben", "Kokila Ben", "Gopi Ben", "Cooker"],
    correct: "Rashi Ben",
    
  },
];

export default (n = 5) => qBank.sort(() => 0.5 - Math.random()).slice(0, n);
