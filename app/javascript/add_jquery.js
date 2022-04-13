import jquery from 'jquery'
import 'bootstrap-switch'
window.jQuery = jquery
window.$ = jquery

$("#check_name").bootstrapSwitch({
    onText:"Oui",
    offText:"Non"
});
    window.addEventListener("load", () => {
        const element = document.querySelector("#form_new");
        element.addEventListener("ajax:success", (event) => {
            console.log(event)
            const [_data, _status, xhr] = event.detail;
            const jsonResponse = JSON.parse(xhr.responseText)
            // element.insertAdjacentHTML("beforeend",);
            document.querySelector("#result").innerHTML = `
                <p>
                Votre noms : ${jsonResponse["name"]} <br>
                Votre prénoms : ${jsonResponse["surname"]} <br/>
                votre date de naissance : ${jsonResponse["birthday"]} <br/>
                ${jsonResponse["checkValue"] == "1" ? "Vous avez des notions de programmations <br/>" :
                "Vous n'avez pas des notions de programation <br/>"}
                Vous avez choisi ${jsonResponse['courseOfSole']}
                 </p>
            `
        });
        element.addEventListener("ajax:error", () => {
            // element.insertAdjacentHTML("beforeend", "<p>ERROR</p>");
            document.querySelector("#result").innerHTML = "<p>ERROR</p>"
        });
    });
