<template>
    <div>
        <button class="sd-btn" style="margin-left:20px;margin-top:20px" v-on:click="savePdf()">Save as PDF</button>
        <survey :survey="survey" />
    </div>
</template>
<script>
import Vue from "vue";
import { Model } from "survey-vue";
import { SurveyPDF } from "survey-pdf";
import "survey-vue/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function createSurveyPdfModel(surveyModel) {
    let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
    let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
    let options = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        
        
        format: [pdfWidth, pdfHeight]
    };
    const surveyPDF = new SurveyPDF(json, options);
    if (surveyModel) {
        surveyPDF.data = surveyModel.data;
    }
    
    return surveyPDF;
}
function saveSurveyToPdf(filename, surveyModel) {
    createSurveyPdfModel(surveyModel).save(filename);
}
export default Vue.component("survey-pdf-component", {
    name: "survey-pdf-component",
    data() {
        const survey = new Model(json);
        survey.data = {
          'Quality': {
            'affordable': '3',
            'does what it claims': '4',
            'better then others': '3',
            'easy to use': '5'
          },
          'satisfaction': '4',
          'recommend friends': '4',
          'suggestions': '24/7 support would help a lot.',
          'price to competitors': 'Not sure',
          'price': 'correct',
          'pricelimit': {
            'mostamount': 450,
            'leastamount': 200
          },
          'email': 'jon.snow@nightwatch.org'
        };
        return {
            survey: survey,
            savePdf: () => {
                saveSurveyToPdf("surveyResult.pdf", survey);
            }
        };
    },
});
</script>