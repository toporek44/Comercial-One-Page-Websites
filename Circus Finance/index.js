



import MetaMaskOnboarding from '@metamask/onboarding'


const modal = document.querySelector(".login__modal");
const unlockButtons = document.querySelectorAll(".unlock__button");
const cancelButton = document.querySelector(".cancel__button");
const background = document.querySelector(".background");

unlockButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("login__modal--active");
    background.classList.add("background--active");
  });
});
cancelButton.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});

background.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});


const currentUrl = new URL(window.location.href)
const forwarderOrigin = currentUrl.hostname === 'localhost'
  ? 'http://localhost:9010'
  : undefined

const isMetaMaskInstalled = () => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask)
}


// Basic Actions Section
const onboardButton = document.querySelector('.connect')





const initialize = async () => {

  let onboarding
  try {
    onboarding = new MetaMaskOnboarding({ forwarderOrigin })
  } catch (error) {
    console.error(error)
  }

  let accounts
  let accountButtonsInitialized = false



  const isMetaMaskConnected = () => accounts && accounts.length > 0

  const onClickInstall = () => {
    onboardButton.innerText = 'in progress'
    onboardButton.disabled = true
    onboarding.startOnboarding()
  }

  const onClickConnect = async () => {
    try {
      const newAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      handleNewAccounts(newAccounts)
    } catch (error) {
      console.error(error)
    }
  }



  const updateButtons = () => {


    if (!isMetaMaskInstalled()) {
      onboardButton.innerText = 'install metamask'
      onboardButton.onclick = onClickInstall
    } else if (isMetaMaskConnected()) {
      onboardButton.innerText = 'Connected'
      unlockButtons.forEach((button) => {
        button.innerText = "Connected"
        button.disabled = true

      });

      modal.classList.remove("login__modal--active");
      background.classList.remove("background--active");
      if (onboarding) {
        onboarding.stopOnboarding()
      }
    } else {
      onboardButton.innerText = 'Connect'
      onboardButton.onclick = onClickConnect
    }
  }

  const initializeAccountButtons = () => {

    if (accountButtonsInitialized) {
      return
    }
    accountButtonsInitialized = true

   


  }

  function handleNewAccounts (newAccounts) {
    accounts = newAccounts
    if (isMetaMaskConnected()) {
      initializeAccountButtons()
    }
    updateButtons()
  }





  updateButtons()



  if (isMetaMaskInstalled()) {

    ethereum.autoRefreshOnNetworkChange = false
   
    ethereum.on('accountsChanged', handleNewAccounts)

    try {
      const newAccounts = await ethereum.request({
        method: 'eth_accounts',
      })
      handleNewAccounts(newAccounts)
    } catch (err) {
      console.error('Error on init when getting accounts', err)
    }
  }
}

window.addEventListener('DOMContentLoaded', initialize)
window.addEventListener("onload", initialize)
