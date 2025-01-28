// create state object
const state = {
  partyList: []
}

// create async function for pary API
const getParty = async() => {
  try {
  // fetch the pary API
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
  // convert to json
  const jsonObject = await response.json();
  // target the data in the json object
  const allParties = jsonObject.data;
  // add the objects to the state array
  state.partyList = allParties;
  // invote the render function
  renderParties();
  } catch (error) {
    alert(error);
  }
}

// function to render to page
const renderParties = () => {
  // grab the ul node
  const partyUL = document.querySelector('ul');
  // erase ols from list
  partyUL.innerHTML = ``;

  state.partyList.forEach((singleParty) => {
    // create a new li
    const li = document.createElement('li');
    // add inner text to li
    li.innerText = `PARTY NAME: ${singleParty.name} .\n DATE: ${singleParty.date} .\n DESCRIPTION:${singleParty.description} .\n LOCATION: ${singleParty.location}`
    // add the new li to the UL node
    partyUL.append(li);
  })
  
}

getParty();