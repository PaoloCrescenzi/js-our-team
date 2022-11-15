//Creare l’array di oggetti con le informazioni fornite
const teamMember = [
    {
        name:"Wayne Barnett",
        rule:"Founder & CEO",
        img:"wayne-barnett-founder-ceo.jpg",
    }, {
        name:"Angela Caroll",
        rule:"Chief Editor",
        img:"angela-caroll-chief-editor.jpg",
    }, {
        name:"Walter Gordon",
        rule:"Office Manager",
        img:"walter-gordon-office-manager.jpg",
    }, {
        name:"Angela Lopez",
        rule:"Social Media Manager",
        img:"angela-lopez-social-media-manager.jpg",
    }, {
        name:"Scott Estrada",
        rule:"Developer",
        img:"scott-estrada-developer.jpg",
    }, {
        name:"Barbara Ramos",
        rule:"Graphic Designer",
        img:"barbara-ramos-graphic-designer.jpg",
    }
];

console.log(teamMember);

function addElement () {
    const element = document.createElement("li");
    const listaEl = document.getElementById("lista");
    element.innerHTML = (teamMember)
    listaEl.append(element)
    
};

addElement();