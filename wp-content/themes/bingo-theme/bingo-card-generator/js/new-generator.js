(function ($) {
    
    jQuery(document).ready(function ($) {
        if (!$('#bingo-card-generator').hasClass('new-layout')) {
            return;
        }

        let cardGenerator;
        let pdfGenerator;
        let bingoCaller;
        let textToSpeech;
        
        function initNewGenerator() {
            var templates = CardGenerator_script_vars.templates;
            
            cardGenerator = new CardGenerator();
            window.cardGenerator = cardGenerator;

            cardGenerator.createTemplatesPopup(templates);
            cardGenerator.createGridSizeSelect();
            
            cardGenerator.originalCreateGridInputs = cardGenerator.createGridInputs;
            cardGenerator.createGridInputs = function() {
                jQuery('.grid-inputs div').remove();
                let gridInputs = jQuery('.grid-inputs');
                if (gridInputs.length && gridInputs[0]) {
                    gridInputs[0].className = gridInputs[0].className.replace(/grid-size-\d/, '');
                    gridInputs.addClass('grid-size-' + this.gridSize);
                }
            };
            
            cardGenerator.createGridInputs();
            populateDropdownFromTemplates();
            setupNewControls();
            
            let initialTitle = $('#card-title').val() || 'Untitled';
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
            
            $('#title').on('input blur', function() {
                let title = $(this).val() || 'BINGO BLITZ';
                $('#card-title').val(title);
                cardGenerator.setTitle(title);
                cardGenerator.generateBingoCard();
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

            // Grid size dropdown toggle
            $('.grid-size').off('click').on('click', function(e) {
                e.stopPropagation();
                $(this).toggleClass('open');
                $(this).find('.grid-size-options').toggle();
            });

            $('.grid-size-options li').off('click').on('click', function(e) {
                e.stopPropagation();
                $('.grid-size-options li').removeClass('active');
                $(this).addClass('active');
                const size = parseInt($(this).text().split('X').pop()) || 5;
                cardGenerator.setGridSize(size);
                cardGenerator.createGridInputs();
                $('.grid-size .value').text($(this).text());
                $('.grid-size').removeClass('open');
                $('.grid-size-options').hide();
                updateWordCounter();
                updateGridFromWords();
            });

            $(document).on('click', function(e) {
                if (!$(e.target).closest('.grid-size').length) {
                    $('.grid-size').removeClass('open');
                    $('.grid-size-options').hide();
                }
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
        
        // Template switching mapping
        const templateOptionMap = {
            'bingo-card-generator': 'Bingo',
            'generator/christmas-bingo': 'christmas-eve',
            'generator/human-bingo': 'Family-reunions',
            'generator/get-to-know-you-bingo': 'Family-friends-BBQ',
            'generator/baby-shower-bingo': 'Baby-shower',
            'generator/music-bingo': 'summer',
            'generator/halloween-bingo': 'halloween',
            'generator/road-trip-bingo': 'New-York',
            'generator/thanksgiving-bingo': 'default',
            'generator/anime-bingo': 'Tokyo',
            'generator/ice-breaker-bingo': 'Family-friends-BBQ',
            'generator/football-bingo': 'Madrid',
            'generator/sensitive-person-bingo': 'Bingo',
            'generator/bridal-shower-bingo': 'Bachelorette-party',
            'generator/bible-bingo': 'easter',
            'generator/summer-bingo': 'summer',
            'generator/find-someone-who-bingo': 'London',
            'generator/bachelorette-bingo': 'Bachelorette-party',
            'generator/birthday-bingo': 'Birthday',
            'generator/zoom-bingo': 'Hong Kong',
            'generator/beach-bingo': 'summer'
        };

        $(document).on('click', '.template-item', function(e) {
            e.preventDefault();
            $('.template-item').removeClass('active');
            $(this).addClass('active');

            const themeUrl = $(this).data('theme-url') || '';
            const heading = $(this).data('theme-heading') || $(this).find('.template-name').text();
            const description = $(this).data('theme-description') || '';
            const cardName = $(this).data('theme-card-name') || 'Untitled';
            const presetWords = $(this).data('theme-preset-words') || '';
            const bottomH1 = $(this).data('theme-bottom-h1');
            const bottomMain = $(this).data('theme-bottom-main-text');
            const bottomH2 = $(this).data('theme-bottom-h2');
            const bottomSec = $(this).data('theme-bottom-secondary-text');

            $('.template-heading').text(heading);
            $('.template-description').text(description);
            $('#card-title').val(cardName);
            $('#title').val(cardName);
            cardGenerator.setTitle(cardName);

            // Set template theme
            const optVal = templateOptionMap[themeUrl] || 'Bingo';
            cardGenerator.setCurrentTemplate(CardGenerator_script_vars.templates, optVal);

            // Sync preset words
            if (presetWords && presetWords.trim() !== '') {
                const wordsList = presetWords.split(',').map(w => w.trim()).filter(w => w.length > 0);
                $('#bingo-words').val(wordsList.join('\n'));
            } else {
                $('#bingo-words').val('');
            }

            updateWordCounter();
            updateGridFromWords();

            if (bottomH1) $('#step2 ._title h2').text(bottomH1);
            if (bottomMain) $('#step2 ._text').html(bottomMain + (bottomSec ? '<br>' + bottomSec : ''));

            $('#templates-dropdown-mobile').val($(this).attr('href'));

            if (themeUrl && window.history && window.history.pushState) {
                window.history.pushState(null, '', '/' + themeUrl + '/');
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
            let href = selectedOption.val();
            let $target = $('.template-item[href="' + href + '"]');
            if ($target.length) {
                $target.trigger('click');
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
            textToSpeech = new TextToSpeech();
            
            pdfGenerator = new PdfGenerator(cardGenerator);
            let initialCardsPerPage = $('[name="cards-per-page"]').val() || '1';
            pdfGenerator.setCardsPerPage(parseInt(initialCardsPerPage));
            
            $('#generate-pdf').off('click').on('click', function(e) {
                e.preventDefault();
                pdfGenerator.generatePdf($('#card-title').val() || 'BingoBlitz_Card');
            });
            
            $('[name="cards-per-page"]').off('change').on('change', function () {
                pdfGenerator.setCardsPerPage(parseInt(this.value));
            });
            
            bingoCaller = new BingoCaller(textToSpeech);
            
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
