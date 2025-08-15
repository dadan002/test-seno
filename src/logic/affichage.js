// logic/affichage.js
export default function affiche(a) {
    const element = document.getElementById("Navtel");
    if (a) {
        console.log("element")
        console.log(element)
        if (element) {
            element.style.width = "0%";
            document.body.style.overflow= "auto"; /* bloque le scroll */
            
        }
        
    }
    else{
        console.log("z")
        element.style.width = "30%";
        document.body.style.overflow= "hidden";
    }
    console.log(a)
}