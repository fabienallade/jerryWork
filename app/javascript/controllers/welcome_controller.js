import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ['form'];
    connect() {
        console.log("bienvenue chez nous")
    }
    submitForm(event){
        const [_data, _status, xhr] = event.detail;
        console.log(event.detail)
        // console.log("l'évenement vient de prendre")
    }
    // submitError(){
    //
    // }
}
