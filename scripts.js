const map = document.querySelector("svg");
const countries = document.getElementsByTagName("path");

//Naughty countries

const Turkey = document.querySelectorAll(".Turkey");
const Israel = document.getElementById("IL");
const Morocco = document.getElementById("MA");
const India = document.getElementById("IN");
const RussianFederation = document.querySelectorAll(".Russian");
const Armenia = document.getElementById("AM");
const Cyprus = document.querySelectorAll(".Cyprus");
const Syria = document.getElementById("SY");
const Iraq = document.getElementById("IQ");
const Lebanon = document.getElementById("LB");
const Palestine = document.getElementById("PS");
const Ukraine = document.getElementById("UA");
const Moldova = document.getElementById("MD");
const Georgia = document.getElementById("GE");
const Sahara = document.getElementById("EH");
const Pakistan = document.getElementById("PK");
const Azerbaijan = document.querySelectorAll(".Azerbaijan");

const Egypt = document.getElementById("EG");
const Libya = document.getElementById("LY");
const Yemen = document.getElementById("YE");
const Burkina = document.getElementById("BF");
const Cameroon = document.getElementById("CM");
const CentralAfrica = document.getElementById("CF");
const Ethiopia = document.getElementById("ET");
const Mali = document.getElementById("ML");
const Mozambique = document.getElementById("MZ");
const Nigeria = document.getElementById("NG");
const Senegal = document.getElementById("SN");
const Somalia = document.getElementById("SO");
const Sudan = document.getElementById("SD");
const Afghanistan = document.getElementById("AF");
const Myanmar = document.getElementById("MM");
const Philippines = document.querySelectorAll(".Philippines");
const Mexico = document.getElementById("MX");
const Colombia = document.getElementById("CO");


var naughtyQueryCountries = [Turkey, India, RussianFederation, Armenia, Cyprus, Syria, Iraq, Lebanon, Palestine, Moldova, Georgia, Pakistan, Azerbaijan];
var naughtyIdCountries = [Israel, Morocco, Ukraine, Syria, Sahara];


const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");

// Data outputs

const countryNameOutput = document.querySelector(".country-name");
const countryFlagOutput = document.querySelector(".country-flag");
const populationOutput = document.querySelector(".population");
const cityOutput = document.querySelector(".city");
const currencyOutput = document.querySelector(".currency");
const languagesOutput = document.querySelector(".languages");
const areaOutput = document.querySelector(".area");
const warOutput = document.querySelector(".war");
const defenseOutput = document.querySelector(".defense");

const defbudget = new Map([
    ['AF', null], ['AL', 397.6], ['DZ', 18264.0], ['AI', null],
    ['AM', 1329.5], ['AW', null], ['AT', 4410.0], ['BH', 1383.8],
    ['BD', 4208.0], ['BB', null], ['BY', 1403.1], ['BE', 7629.4],
    ['BZ', 26.5], ['BJ', 140.8], ['BM', null], ['BT', null],
    ['BO', 644.3], ['BA', 216.7], ['BW', 511.9], ['BR', 22887.5],
    ['VG', null], ['BN', 448.9], ['BG', 1918.4], ['BF', 826.4],
    ['BI', 147.3], ['KH', 668.0], ['CM', 456.1], ['CF', 62.3],
    ['TD', 372.4], ['CO', 10701.1], ['CR', 0.0], ['HR', 1439.1],
    ['CU', null], ['CW', null], ['CZ', 5056.3], ['CI', 681.5],
    ['KP', null], ['CD', 792.2], ['DJ', null], ['DM', null],
    ['DO', 893.2], ['EC', 2726.3], ['EG', 3164.6], ['SV', 453.7],
    ['GQ', 162], ['ER', null], ['EE', 1189.5], ['ET', 1226.5],
    ['FI', 7348.0], ['GF', null], ['GA', 265.1], ['GE', 504.6],
    ['DE', 66926.6], ['GH', 285.4], ['GL', null], ['GD', null],
    ['GU', null], ['GT', 422.3], ['GN', 504.5], ['GW', 25.3],
    ['GY', 96.2], ['HT', 11.7], ['HN', 539.8], ['HU', 4355.5],
    ['IS', 0.0], ['IN', 83574.6], ['IR', 10238.1], ['IQ', 5108.4],
    ['IE', 1269.2], ['IL', 27498.5], ['JM', 230.6], ['JO', 2450.2],
    ['KZ', 1263.3], ['KE', 999.5], ['XK', 133.2], ['KW', 7755.0],
    ['KG', 139.5], ['LA', null], ['LV', 1045.3], ['LB', 241.3],
    ['LS', 34.0], ['LR', 37.2], ['LY', null], ['LT', 2160.8],
    ['LU', 662.5], ['MK', 266.6], ['MG', 102.1], ['MW', 135.3],
    ['MV', null], ['ML', 784.5], ['MH', null], ['MQ', null],
    ['MR', 277.2], ['YT', null], ['MX', 11825.9], ['MD', 93.4],
    ['MN', 147.8], ['ME', 114.5], ['MS', null], ['MA', 5184.9],
    ['MZ', 376.4], ['MM', 2493.5], ['NA', 338.2], ['NR', null],
    ['NP', 418.9], ['NL', 16624.8], ['NI', 94.4], ['NE', 331.6],
    ['NG', 3191.9], ['PK', 8521.2], ['PW', null], ['PS', null],
    ['PA', 0.0], ['PY', 397.9], ['PE', 3000.8], ['PL', 31649.9],
    ['PT', 4223.2], ['QA', null], ['CG', 284.7], ['KR', 47925.6],
    ['RE', null], ['RO', 5610.7], ['RW', 178.6], ['LC', null],
    ['VC', null], ['BL', null], ['MF', null], ['SA', 75813.3],
    ['SN', 448.6], ['RS', 2135.8], ['SL', 22.4], ['SX', null],
    ['SK', 2663.1], ['SI', 907.5], ['SO', 143.5], ['ZA', 2781.1],
    ['SS', 1076.2], ['ES', 23699.1], ['LK', 1165.8], ['SD', null],
    ['SR', null], ['SZ', null], ['SE', 8754.9], ['CH', 6293.4],
    ['SY', null], ['TW', 16612.8], ['TJ', 139.5], ['TZ', 905.1],
    ['TH', 5765.8], ['GM', 13.8], ['TL', 55.1], ['TG', 276.3],
    ['TN', 1208.2], ['TM', null], ['TV', null], ['UG', 976.7],
    ['UA', 64753.2], ['AE', null], ['UY', 1590.1], ['UZ', null],
    ['VE', 3.9], ['VN', null], ['EH', null], ['YE', null],
    ['ZM', 377.2], ['ZW', 870.4],
    // Additional countries
    ['Angola', 1270.2], ['Cape Verde', 13.2], ['Mauritius', 22.5],
    ['Seychelles', 35.9], ['Argentina', 3121.9], ['Chile', 5491.7],
    ['Australia', 32340.0], ['Fiji', 72.5], ['New Zealand', 3029.0],
    ['Papua New Guinea', 97.0], ['China', 296438.6], ['Japan', 50161.1],
    ['Indonesia', 9480.8], ['Malaysia', 3899.1], ['Philippines', 5451.7],
    ['Azerbaijan', 3561.7], ['Denmark', 8144.9], ['France', 61301.3],
    ['Greece', 7729.8], ['Italy', 35528.9], ['Malta', 112.6],
    ['Norway', 8668.6], ['Oman', 5851.8], ['UK', 74942.8],
    ['Turkey', null], ['Russian Federation', 109454.4],
    ['United States', 916014.7], ['Canada', 27221.5]
]);



const invadingRelations = {
    'Turkey': new Set(['Cyprus', 'Syria', 'Iraq']),
    'Israel': new Set(['Lebanon', 'Syria', 'Palestine']),
    'Morocco': new Set(['Sahara']),
    'India': new Set(['Pakistan']),
    'Russian Federation': new Set(['Ukraine', 'Moldova', 'Georgia']),
    'Armenia': new Set(['Azerbaijan']),

    'Ukraine': new Set(['Russian Federation']),
    'Syria': new Set(['Turkey, Israel']),
    'Georgia': new Set(['Russian Federation']),
    'Moldova': new Set(['Russian Federation']),
    'Lebanon': new Set(['Israel']),
    'Palestine': new Set(['Israel']),
    'Cyprus': new Set(['Turkey']),
    'Azerbaijan': new Set(['Armenia'])

};



//civil war (not peacful)
const civilRelations = [ 'Egypt',
    'Iraq',
    'Libya',
    'YE',
    'Turkey',
    'Burkina Faso',
    'Cameroon',
    'Central African Republic',
    'Ethiopia',
    'Mali',
    'Mozambique',
    'Nigeria',
    'Senegal',
    'Somalia',
    'South Somalia',
    'Sudan',
    'Afghanistan',
    'India',
    'Myanmar',
    'Pakistan',
    'Philippines',
    'Mexico',
    'Colombia'
];


//Loop through countries
for (var i = 0; i < countries.length; i++) {



    country = countries[i];
    

    country.addEventListener("mouseout", function() {
        const classList = [country.classList].join('.');
        const selector = '.'+ classList;

        //const matchingElements = document.querySelectorAll(selector);
        //matchingElements.forEach(el => el.style.fill = "#443d4b");
     });
    

     

    document.addEventListener("DOMContentLoaded", function () {
        //Id opbjects
        if (Israel) {
            Israel.style.fill = "red";
            Israel
        }
        if (Morocco) {
            Morocco.style.fill = "red";
        }
        if(Ukraine) {
            Ukraine.style.fill = "blue";
        }
        if(Syria) {
            Syria.style.fill = "blue";
        }
        if(Sahara ) {
            Sahara.style.fill = "red";
        }
        if(India ) {
            India.style.fill = "purple";
        }
        if(Georgia) {
            Georgia.style.fill = "blue";
        }
        if(Moldova ) {
            Moldova.style.fill = "blue";
        }
        if(Armenia ) {
            Armenia.style.fill = "red"; // Set to any color you like
        }
        if(Syria) {
            Syria.style.fill = "blue"; // Set to any color you like
        }
        if(Iraq) {
            Iraq.style.fill = "purple"; // Set to any color you like
        }
        if(Lebanon) {
            Lebanon.style.fill = "blue"; // Set to any color you like
        }
        if(Palestine) {
            Palestine.style.fill = "blue"; // Set to any color you like
        }
        if(Pakistan) {
            Pakistan.style.fill = "purple"; // Set to any color you like
        }
        Turkey.forEach(path => {
            path.style.fill = "purple"; // Set to any color you like
        });

        //class objects
        RussianFederation.forEach(path => {
            path.style.fill = "red"; // Set to any color you like
        });

        Cyprus.forEach(path => {
            path.style.fill = "blue"; // Set to any color you like
        });
        Azerbaijan.forEach(path => {
            path.style.fill = "blue"; // Set to any color you like
        });

        //civil conflicts
        // id objects
        if (Egypt) {
            Egypt.style.fill = "orange";
         } 
        if(Libya) {
            Libya.style.fill = "orange";
         }
        if(Yemen) {
            Yemen.style.fill = "orange";
         }
        if(Burkina) {
            Burkina.style.fill = "orange";
         }
         if(Cameroon) {
            Cameroon.style.fill = "orange";
         }
         if(CentralAfrica) {
            CentralAfrica.style.fill = "orange";
         }
         if(Ethiopia) {
            Ethiopia.style.fill = "orange";
         }
         if(Mali) {
            Mali.style.fill = "orange";
         }
         if(Mozambique) {
            Mozambique.style.fill = "orange";
         }
         if(Nigeria) {
            Nigeria.style.fill = "orange";
         }
         if(Senegal) {
            Senegal.style.fill = "orange";
         }
         if(Somalia) {
            Somalia.style.fill = "orange";
         }
         if(Sudan) {
            Sudan.style.fill = "orange";
         }
         if(Afghanistan) {
            Afghanistan.style.fill = "orange"; // Set to any color you like
        }
        if(Myanmar) {
            Myanmar.style.fill = "orange"; // Set to any color you like
        }
        if(Pakistan) {
            Pakistan.style.fill = "purple"; // Set to any color you like
        }
        Philippines.forEach(path => {
            path.style.fill = "orange"; // Set to any color you like
        });
        if(Mexico) {
            Mexico.style.fill = "orange"; // Set to any color you like
        }
        if(Colombia) {
            Colombia.style.fill = "orange"; // Set to any color you like
        }
    
    }); 
    
    
    
    

    

        
    country.addEventListener("click", function(e) {
        
        console.log("country clicked");

        loading.innerText = "Loading...";

        container.classList.add("hide");

        loading.classList.remove("hide");

        let clickedCountryName;

        if(e.target.hasAttribute("name")) {
            clickedCountryName = e.target.getAttribute("name");
        }
        else {
            clickedCountryName = e.target.classList.value;

        }

        sidePanel.classList.add("side-panel-open");

        if (Object.keys(invadingRelations).includes(clickedCountryName)) {
            invadingRelations[clickedCountryName].forEach(country => {
                const invadingPath = document.querySelector(`.${country}`);
                if (invadingPath) {
                    invadingPath.style.fill = "red"; // Set color to red
                }
            });
        }



        //API Integration
        fetch(`https://restcountries.com/v3.1/name/${clickedCountryName}?fullText=true`)
        .then(response => {

            if (!response.ok) {
                throw new Error('Newtork response not ok');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            setTimeout(() => {
                countryNameOutput.innerText = data[0].name.common;
                countryFlagOutput.src = data[0].flags.png;
                cityOutput.innerText = data[0].capital;
                populationOutput.innerText = data[0].population.toLocaleString();
                if(e.target.hasAttribute("name")) {
                    clickedCountryName = e.target.getAttribute("id");
                }
                else {
                    clickedCountryName = e.target.classList.value;
        
                }

                //non api outputs

                var buf = defbudget.get(clickedCountryName)
                //console.log(buf);
                if (buf === null) {
                    defenseOutput.innerText = "No data available";
                }
                else {
                    defenseOutput.innerText = buf + " million (USD)"
                }
                //console.log(clickedCountryName);

                const formatedNumber = data[0].area.toLocaleString('de-DE');
                areaOutput.innerHTML = formatedNumber + ' km<sup>2</sup>';
                const currencies = data[0].currencies;

                currencyOutput.innerText = "";

                Object.keys(currencies).forEach(key => {
                    currencyOutput.innerHTML += `<li>${currencies[key].name}</li>`;
                });
                const languages = data[0].languages;
                languagesOutput.innerText = "";
                Object.keys(languages).forEach(key => {
                    languagesOutput.innerHTML += `<li>${languages[key]}</li>`;
                });
                countryFlagOutput.onload = () => {
                    container.classList.remove("hide");

                    loading.classList.add("hide");
                };
        }, 700);
        warOutput.innerHTML = "";
        if (warOutput.innerHTML.trim() === "") {
            if (civilRelations.includes(clickedCountryName)) {
                warOutput.innerHTML += `<li>Civil Conflict</li>`;
                }
        for(let nation of invadingRelations[clickedCountryName]) {
            warOutput.innerHTML += `<li>${nation}</li>`;
        }
    }
    
    
    })

    .catch(error => {
        loading.innerText = "No data to show for selected Country";

        console.error("There was a problem with the fetch opertion:", error);
    });

});

}

closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("side-panel-open");
});


