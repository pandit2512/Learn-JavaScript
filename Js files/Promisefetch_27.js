//Q.you have to fetch API inside Div
const API = "https://randomuser.me/api/";

const div = document.querySelector(".info");

fetch(API)
  //here data initially will have object of response
  //then we converted it into json()
  .then((data) => data.json())
  .then((data) => {
    console.log(data["results"][0]);
    const name = data["results"][0]["name"];
    const gen = data["results"][0]["gender"];
    const emails = data["results"][0]["email"];
    const loc = data["results"][0]["location"];
    const street = data["results"][0]["location"]["street"];
    //const street = data["results"][0].location.street.number

    div.innerHTML = `<h1>${name.first} ${name.last}</h1>
     <h2> Gender:${gen}</h2>
     <h3>Email: ${emails}</h3>
     <h4>Location: ${loc.city} </h4>
     <h5>${street.number} ${street.name}</h5>`;
  });

//Q.2 Dictionary api
const word = "brave";
const dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

const wordHeading = document.querySelector(".word");
const ul = document.querySelector(".synonyms");
fetch(dictApi)
  .then((data) => data.json())
  .then((data) => {
    console.log(data[0]["meanings"][2]["synonyms"]);
    wordHeading.innerHTML = `Word: ${data[0]["word"]}`;

    const synonyms = data[0]["meanings"][2]["synonyms"];
    synonyms.forEach((s) => {
      console.log(s);

      const li = document.createElement("li");
      li.appendChild(document.createTextNode(s));
      ul.appendChild(li);
    });
  });

//========OR============
/*fetch(dictApi)
  .then((data) => data.json())
  .then((data) => {
    // Loop through the meanings array
    data[0].meanings.forEach((meaning) => {
      // Loop through the definitions array for each meaning
      meaning.definitions.forEach((definition) => {
        // Extract the synonyms from each definition
        if (definition.synonyms && definition.synonyms.length > 0) {
          console.log(
            `Synonyms for "${data[0].word}" (${meaning.partOfSpeech}):`,
            definition.synonyms
          );
        }
      });
    });
  });*/
