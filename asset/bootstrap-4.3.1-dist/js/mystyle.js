// slide show

var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }


        // sign in popup
         // Get the modal
         var modal = document.getElementById('id01');

         // When the user clicks anywhere outside of the modal, close it
         window.onclick = function(event) {
             if (event.target == modal) {
                 modal.style.display = "none";
             }
         }

        //  button enabling
        (function() {
            $('form > input').keyup(function() {
        
                var empty = false;
                $('form > input').each(function() {
                    if ($(this).val() == '') {
                        empty = true;
                    }
                });
                
                if (empty) {
                    $('#cont_value').attr('disabled', 'disabled');
                } else {
                    $('#cont_value').removeAttr('disabled');
                }
            });
        })()