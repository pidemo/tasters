function populateSelectElement(optionsArray, selectElementId) {
    // Access the select element by ID
    const selectElement = document.querySelector(`#${selectElementId}`);
    
    // Populate the select element
    optionsArray.forEach(optionValue => {
      // Create a new option element
      const option = document.createElement('option');
      
      // Set the value and display text of the option
      option.value = optionValue.toLowerCase();
      option.textContent = optionValue;
      
      // Append the option to the select element
      selectElement.appendChild(option);
    });
};

// Nationalities list
const nationalities = [
    "Antiguan and Barbudan",
    "Argentinian",
    "Bahamian",
    "Barbadian",
    "Belizean",
    "Bolivian",
    "Brazilian",
    "Canadian",
    "Chilean",
    "Colombian",
    "Costa Rican",
    "Cuban",
    "Dominican (Dominica)",
    "Dominican (Dominican Republic)",
    "Ecuadorian",
    "Salvadoran",
    "Grenadian",
    "Guatemalan",
    "Guyanese",
    "Haitian",
    "Honduran",
    "Jamaican",
    "Mexican",
    "Nicaraguan",
    "Panamanian",
    "Paraguayan",
    "Peruvian",
    "Kittitian and Nevisian",
    "Saint Lucian",
    "Vincentian",
    "Surinamese",
    "Trinidadian and Tobagonian",
    "American",
    "Uruguayan",
    "Venezuelan"
  ];  
populateSelectElement(nationalities, 'nationality');
  
// Genders list
const genders = [
    "Male", 
    "Female", 
    "Non Binary", 
    "Other"
];
populateSelectElement(genders, 'gender');
  
// Countries list
const countries = [
    "Antigua and Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belize",
    "Bolivia",
    "Brazil",
    "Canada",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Guyana",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Peru",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Suriname",
    "Trinidad and Tobago",
    "United States",
    "Uruguay",
    "Venezuela"
  ];
  
populateSelectElement(countries, 'country');

// State
const states = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas"
  ];
populateSelectElement(states, 'state');

// Occupation
const occupations = [
    "C-Level", 
    "Business Owner",
    "Freelancer",
    "Hospitality",
    "Tourism",
    "Education",
    "Other"
];
populateSelectElement(occupations, 'occupation');


// Reset password and email
const memberstack = window.$memberstackDom;
function resetPassword() {
    console.log("Password reset !");
    memberstack.openModal("RESET_PASSWORD");
};
function changeEmail() {
    console.log("Change Email !");
    memberstack.openModal("");
}
const resetPasswordButton = document.getElementById("reset-password");
resetPasswordButton.addEventListener("click", resetPassword);
  