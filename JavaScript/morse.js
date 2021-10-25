$(document).ready(function(){

    $("#submit").click(function(){
        if($("#morseInput").val() != ""){
            var res = ""
            var morseChars = $("#morseInput").val().split(" ");
            for(var i = 0; i < morseChars.length; i++){
                res += decode(morseChars[i]);
            }
            $("#response").text(res);
        }else{
            alert("Preencha o Input corretamente!");
        }
    });

});

function decode(str) {
    var morseCode = [
        ["A", ".-"],
        ["B", "-..."],
        ["C", "-.-."],
        ["D", "-.."],
        ["E", "."],
        ["F", "..-."],
        ["G", "--."],
        ["H", "...."],
        ["I", ".."],
        ["J", ".---"],
        ["K", "-.-"],
        ["L", ".-.."],
        ["M", "--"],
        ["N", "-."],
        ["O", "---"],
        ["P", ".--."],
        ["Q", "--.-"],
        ["R", ".-."],
        ["S", "..."],
        ["T", "-"],
        ["U", "..-"],
        ["V", "...-"],
        ["W", ".--"],
        ["X", "-..-"],
        ["Y", "-.--"],
        ["Z", "--.."],
        ["1", ".----"],
        ["2", "..---"],
        ["3", "...--"],
        ["4", "....-"],
        ["5", "....."],
        ["6", "-...."],
        ["7", "--..."],
        ["8", "---.."],
        ["9", "----."],
        ["0", "-----"],
        [" ", " "]
    ];
    
    for(var i = 0; i < morseCode.length; i++){
        if(morseCode[i][1] == str){
            return morseCode[i][0];
        }
    }
    return " ";

}