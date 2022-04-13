import jquery from 'jquery'
import 'bootstrap-switch'
window.jQuery = jquery
window.$ = jquery

$("[name='my-checkbox']").bootstrapSwitch({
    onText:"Oui",
    offText:"Non"
});
$(document).ready(()=>{
    window.addEventListener("load", () => {
        const element = document.querySelector("#form_new");
        element.addEventListener("ajax:success", (event) => {
            console.log(event)
            const [_data, _status, xhr] = event.detail;
            element.insertAdjacentHTML("beforeend", xhr.responseText);
        });
        element.addEventListener("ajax:error", () => {
            console.log("fabien")
            element.insertAdjacentHTML("beforeend", "<p>ERROR</p>");
        });
    });
})
