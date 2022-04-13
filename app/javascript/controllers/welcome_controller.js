import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ['form'];
    connect() {
        console.log("bienvenue chez nous")
    }
    submitForm(){
        console.log("l'évenement vient de prendre")
    }
}
