// TODO:to gret from user
const greetUser = (name) => {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour < 17) {
      greeting = "Good Afternoon";
    } else if (currentHour < 21) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }
  
    console.log(greeting +  " "  +name);
  };
  
 
  greetUser("ansuman");
  