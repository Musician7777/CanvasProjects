
//Data
const data = {
    elem1:{
        name: 'Mouse Effect',
        web: 'First Canvas Project/index.html',
    },
    elem2:{
        name: 'Flowers',
        web: 'Second Canvas Project/index.html',
    },
    elem3:{
        name: 'Sin Method',
        web: 'Sin Method/index.html',
    },
    elem4:{
        name: 'Matrix Rain',
        web: 'Matrix Rain/index.html',
    }
}

let conatiner = document.querySelector('.container');


for(let elem in data){
    let newElement = document.createElement("div");
    newElement.className = "element";
    newElement.innerHTML = `<!-- web frame -->
            <div class="frame-container">
                <iframe
                src="${data[elem].web}"
                frameborder="0"
                ></iframe>
            </div>
            <!-- name and button -->
            <div class="name-button-container">
                <div class="name-container">
                <p class="name">${data[elem].name}</p>
                </div>
                <div class="launcher-button">
                <a href="${data[elem].web}" class="launcher">
                    <i class="ri-global-line"></i>
                </a>
                </div>`;
//Nothing
conatiner.appendChild(newElement);
console.log(data[elem].name)
}