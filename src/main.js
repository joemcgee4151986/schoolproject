

import Vue from "vue";
import SurveyPdfComponent from "./components/SurveyComponent";

new Vue({
    el: "#app",
    template: '<div id="surveyElement"> <survey-pdf-component /></div>',
    component: {
        "survey-pdf-component": SurveyPdfComponent
    }
});

