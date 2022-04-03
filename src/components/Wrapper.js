import React, {useState} from "react";
import Cards from "./Cards";
import housesToRent from "../data/housesToRent"; //récupération des données depuis data

function Wrapper() {
    
    //STEP 1 | Déclaration d'un state - cela prend la forme d'une constante avec houses (nom de la donnée que l'on veut manipuler) et setHouses (notre setter = une petite fonction qui met à jour notre donnée)
    //STEP 2 | En paramètre du useState on met la valeur d'initialisation de notre variable "houses". Ici on initialise useState avec nos données complètes (notre tableau de données)
    //STEP 3 | Il faut importer {useState} (ligne 1)
    //STEP 4 | On passe au composant Cards (bas de page) houses car nous venons d'initialiser avec housesTorent

    //STEP 5 | Mettre un écouteur d'évènement sur lequel on va appeler une méthode (ici, "handleAvailability") pour manipuler nos données par la suite. Cette méthode pour l'instant est juste nommée mais inconnue
    //STEP 6 | On déclare uen fonction nommée "handleAvailability", on lui passe en argument notre évènement. On fait un console.log pour vérifier le bon cablâge (on à connecté le fait de cocher la checkboxet de produire du code en réponse à ce clic)
    
    //STEP 7 | Faire un console.log(e) de l'évènement (qui est un simple objet) afin d'accéder à un certain nb d'infos sur l'évènement. Ce qui nous interesse est la clé "target", qui correspond à l'élément sur lequel on clique
    //STEP 8 | Faire un console.log(target) afin de lire des informations sur ce target/ puis sur la value de target par exemple ou encore checked (ce qui nous interesse ici), on remarque alors que checked est soit true soit false en fonction de son état
    //STEP 9 | Appliquer une methode filter sur notre tableau de données et l'on souhiate afficher que les maisons available. house.available doit être égal  l'état de notre case à cocher (cad e.target.checked)
    //STEP 10 | Contrôler avec un console.log de notre méthode. On vient donc de récupérer un nouveau tableau contenant uniquement lensemble des maisons dispo
    //STEP 11 | Mettre à jour la clé "houses" grâce au setter afin que notre filtre s'affiche
    
    //STEP 13 | Pour + de faciliter car on va l'utiliser plusieurs fois, on met "e.target.checked" dans une variable.
    //STEP 14 | Mettre une condition car à la décoche de la case, cela nous renvoie que les false et non l'état intial de nos données. On vérifie donc avec "if" : si notre case est cochée -> on veut filtrer et si non -> on va réutiliser notre setter pour réinitialiser l'état à l'intégralité de notre tableau de données.
    
    const [houses, setHouses] = useState(housesToRent)

    function handleAvailability(e) {
        //console.log ("ok");
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.value);
        //console.log(e.target.checked)
        //console.log(housesToRent.filter(house => house.available === e.target.checked));
        //setHouses(housesToRent.filter(house => house.available === e.target.checked));

        let checked = e.target.checked;

        if(checked) {
            setHouses(housesToRent.filter(house => house.available === checked))
        }else{
            setHouses(housesToRent)
        }
        
    }


	return (
		<div className="wrapper">
			<div className="filters">
				<input
					type="text"
					className="search-input"
					placeholder="🔎 Type to search"
				/>

                <select className="select" name="home">
                    <option value="All">All</option>
                    <option value="Flat">Flat</option>
                    <option value="House">House</option>
                </select>

                <div>
                    <label htmlFor="available">Show only Available</label>
                    <input
                    type="checkbox"
                    className="available-checkbox"
                    name="checkbox"
                    id=""
                    onChange={handleAvailability}
                    />
                </div>

  		    </div>

			<Cards houses={houses} />
		</div>
	);
}

export default Wrapper;
