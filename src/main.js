import Vue from "vue";
import SurveyComponent from "./components/SurveyComponent";

new Vue({
    el: "#app",
    template: '<div id="surveyElement"> <survey-component /></div>',
    component: {
        "survey-component": SurveyComponent
    }
});