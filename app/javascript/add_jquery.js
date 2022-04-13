import jquery from 'jquery'
import 'bootstrap-switch'
window.jQuery = jquery
window.$ = jquery

$("[name='my-checkbox']").bootstrapSwitch({
    onText:"Oui",
    offText:"Non"
});
    window.addEventListener("load", () => {
        const element = document.querySelector("#form_new");
        element.addEventListener("ajax:success", (event) => {
            console.log(event)
            const [_data, _status, xhr] = event.detail;
            element.insertAdjacentHTML("beforeend", xhr.responseText);
        });
        element.addEventListener("ajax:error", () => {
            element.insertAdjacentHTML("beforeend", "<p>ERROR</p>");
        });
        document.body.addEventListener("ajax:send", (event) => {
            console.log("fabien")
            const [data, status, xhr] = event.detail;
        });
    });
