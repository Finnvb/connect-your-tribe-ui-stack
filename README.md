
# Visitekaartje 2.0 - UI Stack
In deze repo staan schetsen van de UI Stack van mijn visitekaartje.

## Wireflow & Breakdown

## Empty State
![20220422_105525](https://user-images.githubusercontent.com/26089533/164679343-66a082c8-36cd-4800-9f5f-e5716f0529a9.jpg)

## Error State
![20220422_110334](https://user-images.githubusercontent.com/26089533/164679402-c5c1bcc9-58c0-41ab-a013-f7b3fc565b79.jpg)

## Loading State
![20220422_111010](https://user-images.githubusercontent.com/26089533/164679466-a764e3a0-f427-464c-b73a-6e675aabc9da.jpg)





## Code 

### HTML
``` 
<div class="preloader">
        <div class="yellow"></div>
        <div class="red"></div>
        <div class="blue"></div>
        <div class="violet"></div>
        <p>Loading, please wait..</p>
      </div>
```
Als er geen Javascript wordt herkent door de browser, wordt alle code in de noscript tag uitgevoerd.
```
    <noscript>
        <img class="noJSImage" src="/assets/giphy.gif" alt="oops">
        <p>Whoops!</p>
        <p> Please turn on Javascript to view this page.</p>

    </noscript>
```
Als de API geen response terugstuurt, wordt er een div met class error aangeroepen. Dit kan gebeuren door een fout in de URL van de API of met de code van de API. In deze div staat ook wat voor soort error je hebt.
```
    <div class="error">
        <h2>Whoops... Something went wrong</h2>
        <p>Couldn't fetch data from API</p>
        <p id="errorText"></p>
      </div>  
```

### Javascript

Met querySelector haal ik de div met class preloader uit de DOM en deze stop ik in een const (preloader). In de hidePreloader functie wordt de preloader getoond voor 2 seconden. Daarna wordt het visitekaartje weergegeven.
```
const preloader = document.querySelector(".preloader");
preloader.classList.toggle("preloaderEnabled");

function hidePreloader() {
  setTimeout(() => {
    preloader.style.display = 'flex';
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
    card.classList.add('show');
  }, 2000)
}

hidePreloader();
```
Wanneer de fetch functie de json data niet kan ophalen uit de API wordt de catch functie uitgevoerd. Hierin wordt errorHandling(); aangeroepen en krijgt errorText de textwaarde van het err object. 
```
 fetch(url, options).then(response => response.json())
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
      errorHandling();
      errorText.innerText = err;
    })
}

// -------------------- API handling --------------------


// -------------------- error handling --------------------
const error = document.querySelector(".error");
const errorText = document.querySelector("#errorText");

function errorHandling(){

 card.style.display = 'none';
 error.classList.remove('error')
error.classList.add('show');
preloader.style.display = 'none';
 
}
```

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
