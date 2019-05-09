

const app = (() => {

  function getImageName(country) {
		country	=	country.toLowerCase();
		var	promiseOfImageName	=	new	Promise(function(resolve,	reject)	{
			/*pada kode di atas merupakan pembuatan promise baru yang di dalamanya berisi di teima atau di tolak*/
				setTimeout(function()	{
						if	(country	===	'spain'	||	country	===	'chile'	||	country	===	'peru' ||	country	===	'japan' )	{
								resolve(country	+	'.png');
								/*program diatas yaitu apabila promise di terima maka akan menampilkan country spain,chile,peru, dan japan dan akan menampilkan gamba*/
						}	else	{
								reject(Error('Didn\'t	receive	a	valid	country	name!'));
								/*program di atas yaitu apabila promise di tolak maka akan di jalankan (Error('Didn\'t	receive	a	valid	country	name!'));*/
						}
				},	1000);
		});
		console.log(promiseOfImageName);
		return	promiseOfImageName;	
  }

  function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"

  }

  function flagChain(country) {
	  
	return	getImageName(country)
	.catch(fallbackName)
	.then(fetchFlag)
	.then(processFlag)
	.then(appendFlag)
	.catch(logError);
	
	
	// use the promise

  }

  function allFlags(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
    }
    return flagResponse.blob(); // blob() returns a promise
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
    const flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
	/*proram di atas berguna untuk menampilkan gambar*/
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
