// Question 1
//Awsner 1

const cats = {
        complain: function() {
            console.log ("Meow!");
        }
};

cats.complain();


// Question 2
//Awsner 2

document.querySelector("h3")

const heading = document.querySelector("h3")

heading.innerHTML = "Updated Heading"

//Quetsion 3
// Awsner 3


//Quetsion 4
// Awsner 4

const heading = document.querySelector("h3")

consol.dir(heading.className);

heading.className = "Subheading";
consol.log(heading.className);


//Quetsion 5 
// Awsner 5

document.querySelectorAll(p);
const p = document.getElementsByClassName('paragraphs');

for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'red'
}

//Quetsion 6 
// Awsner 6

document.querySelector(".results")
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = '<p>New paragraph</p>';
resultsContainer.style.backgroundColor = 'yellow';

console.log(resultsContainer);


//Quetsion 7 
// Awsner 7

function printListItems(list) { 
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);

    }
 }

 printListItems(cats);


//Quetsion 8 
// Awsner 8


function createCats(cats) {

    let listItem = "";

    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i]);

        listItems = listItem + "<li>" + cats[i] + "</li>";
        console.log(listItem);
    }

    const finalHtml = "<ul>" + listItem + "</ul>";

    console.log(finalHtml);

    return finalHtml;

}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
    catContainer.innerHTML = newHtml;
    






