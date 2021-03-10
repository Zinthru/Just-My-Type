$(document).ready(function () {

    $('#keyboard-upper-container').css('display', 'none');

    $(document).keydown(function (e) {
        if (e.shiftKey) {
            $('#keyboard-lower-container').css('display', 'none');
            $('#keyboard-upper-container').css('display', 'block');
        }
    })
    $(document).keyup(function () {
        $('#keyboard-lower-container').css('display', 'block');
        $('#keyboard-upper-container').css('display', 'none');
    })

    let sentences = [`'ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'`];
    
    let sent = 0
    let char = 0
    $('<p></p>').text(sentences[sent]).appendTo('#sentence');
    $('<h3></h3>').text(sentences[sent][char]).appendTo('#target-letter');
    
    
    
    //time start
    let start;
   //-------


    $(document).on('keypress', function (e) {

        let keyAt= (e.keyCode || e.which);

        $('#' + keyAt).css('background-color', 'yellow');

        $(document).keyup(function () {
            $('#' + keyAt).css('background-color', 'white'); 
        })

        if (char==0 && sent == 0) {
            let time = new Date();
            start = time.getMinutes();
        } 
        
        let keypress = (sentences[sent][char]).charCodeAt();

        if (keyAt == keypress) {

            $('#feedback').attr('class', 'glyphicon-ok').css('display', 'initial');

            $('#yellow-block').css('margin-left', '+=18px');

            char++;

            if (char == sentences[sent].length) {

                if (sent + 1 == sentences.length) {

                    let timeUp = new Date();
                    let end = timeUp.getMinutes();
                    
                    let timing = end-start;
                   
                    let wpm = 55/ timing;

                    $('#yellow-block').css("display", "none");
                    $('#sentence').text("Your wpm is: " + wpm );                          

                    $(document).off("keypress") 
                    $('#target-letter').text("Click anywhere to play again!");
                    $(document).click(function(){
                        location.reload();
                    })              
                    
                } else {

                    sent++;
                    char = 0;

                    $('#sentence').text(sentences[sent]);
                    $('#target-letter').text(sentences[sent][char]);

                    $('#yellow-block').css('margin-left', 'initial');

                    $('#feedback').css('display', 'none');
                }

            } else {

                $('#target-letter').text((sentences[sent][char]));
            }
 
        } else {
            $('#feedback').attr('class', 'glyphicon-remove').css('display', 'initial');
        }
    })

})














//IGNORE---------------------------------------------------------------
// const sentences = [

// ];


// $('body').keydown(function(e) {
//     console.log(e.keyCode || e.which)
// })





// keyup/keypress(LONG)

// $('<p></p>').text(sentences[0]).appendTo('#sentence');
// $('<h3></h3>').text(sentences[0][0]).appendTo('#target-letter');

//     if (press == keyAt) {
        
//         $('#yellow-block').css('margin-left', '+=15px');
//         char++;

//         if (char == sentences[sent].length) {

//             if (sent + 1 == sentences.length) {

//                 let timeUp = new Date();
//                 let end = timeUp.getMinutes();
                
                
//                 let timing = end - start;
               
              
//                 let wpm = 55 / timing;
                    //Math.round?? 
               
//                                   

              
//    





