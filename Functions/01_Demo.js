function intro(username,profession){
    console.log("Hi");
    console.log(`My name is ${username || 'NewJoinee'}.`);
    console.log(`I am a ${profession || 'Employee'}.`);
}
intro("Aditya","Web Developer");
intro("Akash","Software Engineer");
intro("Sumit","Automator and Teseter");
intro();
