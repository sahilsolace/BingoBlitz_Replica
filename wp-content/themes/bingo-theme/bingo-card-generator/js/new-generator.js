(function ($) {
    
    jQuery(document).ready(function ($) {
        if (!$('#bingo-card-generator').hasClass('new-layout')) {
            return;
        }

        let cardGenerator;
        
          function initNewGenerator() {
              var templates = CardGenerator_script_vars.templates;
              
              cardGenerator = new CardGenerator();
              cardGenerator.createTemplatesPopup(templates);
              cardGenerator.createGridSizeSelect();
              
              cardGenerator.originalCreateGridInputs = cardGenerator.createGridInputs;
              cardGenerator.createGridInputs = function() {
                  jQuery('.grid-inputs div').remove();
                  let gridInputs = jQuery('.grid-inputs');
                  gridInputs[0].className = gridInputs[0].className.replace(/grid-size-\d/, '');
                  gridInputs.addClass('grid-size-' + this.gridSize);
              };
              
              cardGenerator.createGridInputs();
              
              populateDropdownFromTemplates();
              
              setupNewControls();
              
              let initialTitle = $('#card-title').val() || 'BINGO BLITZ';
              cardGenerator.setTitle(initialTitle);
              $('#title').val(initialTitle);
              
              updateWordCounter();
              
              setTimeout(function() {
                  updateGridFromWords();
              }, 100);
              
              setupAdditionalComponents();
          }
        
        function setupNewControls() {
            $('#card-title').on('input', function() {
                let title = $(this).val() || 'BINGO BLITZ';
                $('#title').val(title);
                cardGenerator.setTitle(title);
                cardGenerator.generateBingoCard();
            });
            
            $('#title').on('blur', function() {
                let title = $(this).val() || 'BINGO BLITZ';
                $('#card-title').val(title);
            });
            
            $('#bingo-words').on('input', function() {
                updateWordCounter();
                updateGridFromWords();
            });
            
            $('#bingo-words').on('paste', function() {
                setTimeout(function() {
                    updateWordCounter();
                    updateGridFromWords();
                }, 10);
            });
        }
        
         function updateWordCounter() {
             let words = $('#bingo-words').val().split('\n').filter(word => word.trim() !== '');
             let count = words.length;
             let gridSize = cardGenerator.getGridSize();
             let maxWords = gridSize * gridSize - 1;
             
             $('.word-counter').text(count + '/' + maxWords);
             
             if (count > maxWords) {
                 $('.word-counter').addClass('over-limit');
             } else {
                 $('.word-counter').removeClass('over-limit');
             }
         }
        
         function updateGridFromWords() {
             let wordsText = $('#bingo-words').val();
             let gridSize = cardGenerator.getGridSize();
             let maxWords = gridSize * gridSize - 1;
             let userWords = wordsText.split('\n').filter(word => word.trim() !== '').slice(0, maxWords);
             
             let logoPos = cardGenerator.getLogoPosition();
             let logoCol = logoPos[0];
             let logoRow = logoPos[1];
             
             let wordsGrid = [];
             
             if (userWords.length >= maxWords) {
                 let wordIndex = 0;
                 
                 for (let col = 0; col < gridSize; col++) {
                     wordsGrid[col] = [];
                 }
                 
                 for (let row = 0; row < gridSize; row++) {
                     for (let col = 0; col < gridSize; col++) {
                         if (col === logoCol && row === logoRow) {
                             wordsGrid[col][row] = '';
                         } else {
                             wordsGrid[col][row] = userWords[wordIndex];
                             wordIndex++;
                         }
                     }
                 }
                 
                 for (let col = 0; col < gridSize; col++) {
                     if (col === logoCol) {
                         let logoValue = '';
                         let otherValues = [];
                         
                         for (let row = 0; row < wordsGrid[col].length; row++) {
                             if (row !== logoRow) {
                                 otherValues.push(wordsGrid[col][row]);
                             }
                         }
                         
                         otherValues = cardGenerator.shuffleArray(otherValues);
                         
                         let shuffledColumn = [];
                         let otherIndex = 0;
                         for (let row = 0; row < wordsGrid[col].length; row++) {
                             if (row === logoRow) {
                                 shuffledColumn[row] = logoValue;
                             } else {
                                 shuffledColumn[row] = otherValues[otherIndex++];
                             }
                         }
                         wordsGrid[col] = shuffledColumn;
                     } else {
                         wordsGrid[col] = cardGenerator.shuffleArray(wordsGrid[col]);
                     }
                 }
             } else {
                 wordsGrid = cardGenerator.createWordsList();
                 
                 for (let col = 0; col < gridSize; col++) {
                     wordsGrid[col] = cardGenerator.shuffleArray(wordsGrid[col]);
                 }
                 
                 if (userWords.length > 0) {
                     let wordIndex = 0;
                     
                     for (let row = 0; row < gridSize; row++) {
                         for (let col = 0; col < gridSize; col++) {
                             if (col === logoCol && row === logoRow) {
                                 wordsGrid[col][row] = '';
                                 continue;
                             }
                             
                             if (wordIndex < userWords.length) {
                                 wordsGrid[col][row] = userWords[wordIndex];
                                 wordIndex++;
                             }
                         }
                     }
                 } else {
                     wordsGrid[logoCol][logoRow] = '';
                 }
             }
             
             cardGenerator.setWords(wordsGrid);
             cardGenerator.generateBingoCard();
         }
        
        $(document).on('click', '.template-item', function(e) {
            if ($(this).hasClass('active')) {
                e.preventDefault();
                return false;
            }
        });
        
        $('.templates-scroll').on('scroll', function() {
            let scrollTop = $(this).scrollTop();
            let scrollHeight = $(this)[0].scrollHeight;
            let clientHeight = $(this)[0].clientHeight;
            
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                $('.templates-list').addClass('scrolled-to-bottom');
            } else {
                $('.templates-list').removeClass('scrolled-to-bottom');
            }
        });
        
        $('#templates-dropdown-mobile').on('change', function(e) {
            let selectedOption = $(this).find('option:selected');
            let newUrl = selectedOption.val();
            
            if (newUrl) {
                window.location.href = newUrl;
            }
        });
        
        function populateDropdownFromTemplates() {
            let dropdown = $('#templates-dropdown-mobile');
            dropdown.empty();
            
            $('.template-item').each(function() {
                let $item = $(this);
                let isActive = $item.hasClass('active');
                let option = $('<option></option>')
                    .val($item.attr('href'))
                    .text($item.find('.template-name').text());
                
                if (isActive) {
                    option.prop('selected', true);
                }
                
                dropdown.append(option);
            });
        }
        
        function setupAdditionalComponents() {
            let textToSpeech = new TextToSpeech();
            
            let pdfGenerator = new PdfGenerator(cardGenerator);
            let initialCardsPerPage = $('[name="cards-per-page"]').val() || '1';
            pdfGenerator.setCardsPerPage(parseInt(initialCardsPerPage));
            
            $('#generate-pdf').off('click').on('click', function(e) {
                e.preventDefault();
                pdfGenerator.generatePdf($('#card-title').val());
            });
            
            $('[name="cards-per-page"]').off('change').on('change', function () {
                pdfGenerator.setCardsPerPage(parseInt(this.value));
            });
            
            let bingoCaller = new BingoCaller(textToSpeech);
            
            $('#play-now').off('click').on('click', function (e) {
                e.preventDefault();
                
                if ($(this).hasClass('processing')) {
                    return false;
                }
                
                if ($(this).data('is-started') === 'true') {
                    bingoCaller.stop.call(bingoCaller);
                } else {
                    $(this).addClass('processing');
                    bingoCaller.start.call(bingoCaller, cardGenerator.getWords());
                    setTimeout(() => {
                        $(this).removeClass('processing');
                    }, 500);
                }
            });
            
            addEventListener('gridInputWasChanged', function(e) {
                bingoCaller.stop();
                textToSpeech.speak(e.detail.word);
            });
            
            addEventListener('gridSizeWasChanged', function(e) {
                bingoCaller.stop();
                setTimeout(function() {
                    $('.grid-inputs input').remove();
                    $('.grid-inputs div').empty();
                }, 10);
                updateWordCounter();
                updateGridFromWords();
            });
        }
        
        if (typeof CardGenerator_script_vars !== 'undefined') {
            initNewGenerator();
        }
    });
    
})(jQuery);

