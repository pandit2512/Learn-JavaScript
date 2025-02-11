const Api = "https://official-joke-api.appspot.com/random_joke";

//fetch() => returns Promise

const p1 = fetch(Api);
//if you are using fetch() => then we pass response Object in then()
p1.then((data) => data.json()).then((data) => console.log(data));
//check output in Console
