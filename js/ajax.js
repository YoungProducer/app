export default function submitForm(formName1, formName2) {
    $('#' + formName2 + ': input').not(':submit').clone().hide().appendTo('#' + formName1)
}