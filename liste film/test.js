 let listeFilms = [
    { titre: "Earwig and the Witch", realisateur: "Gorō Miyazaki" },
    { titre: "The Red Turtle", realisateur: "Michaël Dudok de Wit" },
    { titre: "When Marnie Was There", realisateur: "Hiromasa Yonebayashi" },
    { titre: "The Tale of the Princess Kaguya", realisateur: "Isao Takahata" },
    { titre: "The Wind Rises", realisateur: "Hayao Miyazaki" },
    { titre: "From Up on Poppy Hill", realisateur: "Gorō Miyazaki" },
    { titre: "Arrietty", realisateur: "Hiromasa Yonebayashi" },
    { titre: "Ponyo", realisateur: "Hayao Miyazaki" },
    { titre: "Tales from Earthsea", realisateur: "Gorō Miyazaki" },
    { titre: "Howl's Moving Castle", realisateur: "Hayao Miyazaki" },
    { titre: "The Cat Returns", realisateur: "Hiroyuki Morita" },
    { titre: "Spirited Away", realisateur: "Hayao Miyazaki" },
    { titre: "My Neighbors the Yamadas", realisateur: "Isao Takahata" },
    { titre: "Princess Mononoke", realisateur: "Hayao Miyazaki" },
    { titre: "Whisper of the Heart", realisateur: "Yoshifumi Kondō" },
    { titre: "Pom Poko", realisateur: "Isao Takahata" },
    { titre: "Porco Rosso", realisateur: "Hayao Miyazaki" },
    { titre: "Only Yesterday", realisateur: "Isao Takahata" },
    { titre: "Kiki's Delivery Service", realisateur: "Hayao Miyazaki" },
    { titre: "My Neighbor Totoro", realisateur: "Hayao Miyazaki" },
    { titre: "Grave of the Fireflies", realisateur: "Isao Takahata" },
    { titre: "Castle in the Sky", realisateur: "Hayao Miyazaki" }
  ];
  
  //console.log(listeFilms);
  





  function ajtLi(element, listeId) {
    let liste = document.getElementById(listeId);
    let li = document.createElement("li");
    let chg = document.createElement("span");
    chg.className = "redd"; // Ajoute la classe spécifique
    li.appendChild(chg);
    li.appendChild(document.createTextNode(element));
    

    //  // Ajoute la classe text-rouge à l'élément li si l'id selectioné et filmsBy
     if (listeId === 'filmsBy') {
    li.classList.add('text-rouge');
        }
    liste.appendChild(li);
  }
  
  // if ( === realisateur: "Hayao Miyazaki) {
  //   chg.classList.add('nwar-text');
  // }


//////////////// f aj ul
function aj(element, listeId) {
  let liste = document.getElementById(listeId);// "cible" ou on va trv
  // prend un elem avc son id 
  let ul = document.createElement("ul");
  // creat fils , qd use après 
  let pointNoir = document.createElement("span");
  pointNoir.className = `point-noir `; // Ajoute la classe spécifique
  ul.appendChild(pointNoir);
  ul.appendChild(document.createTextNode(element));
  // ce fils aura comme caract element 
  liste.appendChild(ul);
  // et ce fils on le donne à la "cible" 
}



  // Parcours du tableau et affichage des éléments
  for (let i = 0; i < listeFilms.length; i++) {
    let film = listeFilms[i];
    let filmText = film.titre + " : " + film.realisateur;
  
    // Ajout à la première liste "filmsBy"
    ajtLi(filmText, "filmsBy");
  
  }
  
  // afficher les réalisateurs
  function afiReal() {
    let real = listeFilms.map(function(film) {
      return film.realisateur;// cet part va renvoyer only realisateur 
    });
  
    // Supprime oublons et met dans un tab 
    let realUniques = [...new Set(real)];
  
    // pr chaq directar ( ietr ) , on va use notre f ajtLi
    // pr le mettre dans l'id director 
    realUniques.forEach(function(realUniq) {
      ajtLi(realUniq, "directors");
      ajtLi(realUniq, "directorsfilmsList");


      // Ajt films réalisateur ss-liste
    let filmsDuRealisateur = listeFilms.filter(function (film) {
      return film.realisateur === realUniq;// ici comme on est dans realUniques , on va traité pr chaque realisteurs 
      
      //= valeur de la variable realUniq 
      // dc on va prendre tt les real qui sont true 
      // ex   img   realUniq = Hiromasa Yonebayashi    resultat de   filmsDuRealisateur est : 
      
      // [
      //   { titre: "When Marnie Was There", realisateur: "Hiromasa Yonebayashi" },
      //   { titre: "Arrietty", realisateur: "Hiromasa Yonebayashi" },
      // ]

    })
    


    let titresDesFilms = filmsDuRealisateur.map(function (film) {
      return film.titre;
      //nouveau tableau qui ne contient que les titres des films du réalisateur en cours.
      
    //   // et après passage de map 
    //   // ["When Marnie Was There", "Arrietty"]

    });

    // .map(function (film) {
          //   return film.titre;
    // });

    //console.log(filmsDuRealisateur);

    titresDesFilms.forEach(function (titreFilm) {
      aj(titreFilm, "directorsfilmsList");
    });


  
    });////////////////real uniq
  }
  
  afiReal();
  
  
