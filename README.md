
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

HTML
``` 
<div class="preloader">
        <div class="yellow"></div>
        <div class="red"></div>
        <div class="blue"></div>
        <div class="violet"></div>
        <p>Loading, please wait..</p>
      </div>
```
```
    <noscript>
        <img class="noJSImage" src="/assets/giphy.gif" alt="oops">
        <p>Whoops!</p>
        <p> Please turn on Javascript to view this page.</p>

    </noscript>
```
```
    <div class="error">
        <h2>Whoops... Something went wrong</h2>
        <p>Couldn't fetch data from API</p>
        <p id="errorText"></p>
      </div>  
```


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
