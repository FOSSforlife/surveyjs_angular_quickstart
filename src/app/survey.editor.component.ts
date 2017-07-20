import { Component } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-knockout';

import { heatmapWidget } from './heatmap.widget';
Survey.JsonObject.metaData.addProperty('text', {name: 'renderAs', default: 'standard', choices: ['standard', 'heatmap']});
Survey.CustomWidgetCollection.Instance.addCustomWidget(heatmapWidget);

@Component({
    selector: 'survey-editor',
    template: `<div id="surveyEditorContainer"></div>`,
})
export class SurveyEditorComponent  {
    editor: SurveyEditor.SurveyEditor;

    ngOnInit() {
        let editorOptions = { showEmbededSurveyTab: true, questionTypes : ['text', 'checkbox', 'radiogroup', 'dropdown'] };
        this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
        this.editor.toolbox.addItem({
                name: 'countries',
                isCopied: true,
                iconName: 'icon-default',
                title: 'All countries',
                json: { 'type': 'dropdown',  optionsCaption: 'Select a country...', choicesByUrl: { url: 'https://restcountries.eu/rest/v1/all' } }
        });
        this.editor.toolbox.addItem({
                name: 'heatmap',
                isCopied: true,
                iconName: 'icon-default',
                title: 'Heat Map Demo',
                json: { 'type': 'text', 'renderAs': heatmapWidget.name }
        });
        this.editor.saveSurveyFunc = this.saveMySurvey;
    }

    saveMySurvey = () => {
        console.log(JSON.stringify(this.editor.text));
    }
}
