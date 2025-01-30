// create state object
const state = {
  partyList: [],
  rsvpList: []
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
    li.innerText = `PARTY NAME: ${singleParty.name} \n DATE: ${singleParty.date} \n DESCRIPTION:${singleParty.description} \n LOCATION: ${singleParty.location}`
    // add the new li to the UL node
    partyUL.append(li);
  
  })
  
}

getParty();

// added RSVP Endpoint 
const getRSVP = async() => {
  try {
  // fetch the rsvps endpoint
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/rsvps`);
  // convert to json
  const jsonObject = await response.json();
  // target the RSVP data
  const rsvpArray = jsonObject.data;
  // add objects to the state rsvp array
  state.rsvpList = rsvpArray;
  console.log(state.rsvpList);
  renderRSVP();
  } catch (error){
    alert(error);
  }
}

const renderRSVP = () => {
  // grab the rsvp UL
  const rsvpUl = document.querySelector(`#rsvp`);
  // erase rsvp LIs before the loop
  rsvpUl.innerHTML = '';
  // loop through the RSVP list
  state.rsvpList.forEach((oneGuest) => {
    // create a new li
    const li = document.createElement(`li`);
    // add innertext to the li
    li.innerText = `GUEST ID: ${oneGuest.guestId} EVENT ID: ${oneGuest.eventId} COHORT ID: ${oneGuest.cohortId}`
    // append to the UL
    rsvpUl.append(li);
  })
}

getRSVP();