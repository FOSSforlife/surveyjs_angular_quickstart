import * as Survey from 'survey-angular';
import * as h337 from 'heatmap.js';

export let heatmapWidget = {
    name: 'heatmap',
    isFit : function(question: Survey.QuestionBase) { return question['renderAs'] === 'heatmap'; },
    htmlTemplate: '<div class=".heatmap-container" style="width: 500px; height: 200px;">',
    afterRender: function(question: Survey.QuestionBase, el: HTMLElement) {
        let heatmap = h337['create']({
            container: el
        });

        heatmap.setData({
            max: 25,
            data: [{ x: 50, y: 55, value: 5}, { x: 300, y: 150, value: 20}]
        });
    }
};

Survey.JsonObject.metaData.addProperty('text', {name: 'renderAs', default: 'standard', choices: ['standard', 'heatmap']});
Survey.CustomWidgetCollection.Instance.addCustomWidget(heatmapWidget);


