import React, {useState} from "react";
import Cards from "./Cards";
import housesToRent from "../data/housesToRent"; //récupération des données depuis data

function Wrapper() {
    
    //STEP 1 | Déclaration d'un state - cela prend la forme d'une constante avec houses (nom de la donnée que l'on veut manipuler) et setHouses (notre setter = une petite fonction qui met à jour notre donnée)
    //STEP 2 | En paramètre du useState on met la valeur d'initialisation de notre variable "houses". Ici on initialise useState avec nos données complètes (notre tableau de données)
    //STEP 3 | Il faut importer {useState} (ligne 1)
    //STEP 4 | On passe au composant Cards (bas de page) houses car nous venons d'initialiser avec housesTorent
    const [houses, setHouses] = useState(housesToRent)

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
                    />
                </div>

  		    </div>

			<Cards houses={houses} />
		</div>
	);
}

export default Wrapper;
