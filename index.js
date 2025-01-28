// create state object
const state = {
  partyList: []
}

// create async function for pary API
const getParty = async() => {
  // fetch the pary API
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
  // convert to json
  const jsonObject = await response.json();
  const allParties = jsonObject.data;
  state.partyList = allParties;
  console.log(state.partyList);
  renderParties();
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
    li.innerText = `PARTY NAME: ${singleParty.name} DATE: ${singleParty.date} DESCRIPTION:${singleParty.description} LOCATION: ${singleParty.location}`
    partyUL.append(li);
  })
  
}

getParty();