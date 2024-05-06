
let userAddress =  localStorage.getItem('userAddress');
let liElement = document.getElementById('navNft');

if(userAddress == '0xdAeD6AB5908621A64Da29b662Ee6133cAa1641A9'.toLocaleLowerCase()) {
  liElement.style.display = 'none';
}