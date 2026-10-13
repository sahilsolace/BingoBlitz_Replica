class BingoCaller {
    textToSpeech = null;
    columnToLetter = {0: 'B', 1: 'I', 2: 'N', 3: 'G', 4: 'O'};
    words = [];
    wordsShowed = [];
    interval = null;
    defaultTimeout = 3000;

    constructor(textToSpeech) {
        this.textToSpeech = textToSpeech;
    }

    shuffleArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    createWordsQue(words) {
        let newWords = [];
        if (words && words.length) {
            for (let i = 0; i < words.length; i++) {
                if (words[i] && words[i].length) {
                    for (let j = 0; j < words[i].length; j++) {
                        let val = words[i][j];
                        if (val !== undefined && val !== null && val.toString().trim() !== '') {
                            newWords.push({column: this.columnToLetter[i] || 'B', word: val});
                        }
                    }
                }
            }
        }
        // If no user words, generate authentic 1-75 bingo balls (15 per column)
        if (!newWords.length) {
            const cols = ['B', 'I', 'N', 'G', 'O'];
            for (let c = 0; c < 5; c++) {
                const start = c * 15 + 1;
                for (let n = start; n <= start + 14; n++) {
                    newWords.push({ column: cols[c], word: n });
                }
            }
        }
        return this.shuffleArray(newWords);
    };

    splitTextIfLong(text) {
        if (!text) return '';
        const str = text.toString();
        const LETTERS_COUNT_FOR_BR = 9;
        const LETTERS_COUNT_FOR_SPAN = 7;
        let newText = str;
        if (newText.length > LETTERS_COUNT_FOR_SPAN) {
            newText = '<span>' + newText.substring(0, LETTERS_COUNT_FOR_BR)
                + (newText.length > LETTERS_COUNT_FOR_BR ? '<br/>' : '')
                + newText.substring(LETTERS_COUNT_FOR_BR + 1) + '</span>';
        }
        return newText;
    };

    drawBall(word) {
        if (!word) return;
        const colClass = (word.column || 'B').toLowerCase();
        const ballHtml = '<div class="ball ball_' + colClass + '">' + this.splitTextIfLong(word.word) + '</div>';
        const $playedBalls = jQuery('.played-balls');
        $playedBalls.prepend(ballHtml);
    };

    start(words) {
        this.stop();

        this.words = this.createWordsQue(words);
        if (!this.words.length) return;

        jQuery('#play-now').data('is-started', 'true').attr('data-is-started', 'true').addClass('paused');

        let nextBall = function () {
            if (!this.words.length) {
                this.stop();
                return;
            }
            let word = this.words.pop();
            if (this.textToSpeech) {
                try {
                    this.textToSpeech.speak(word.column + ' ' + word.word);
                } catch (e) {
                    // Safe speech fallback
                }
            }
            this.drawBall(word);
        }.bind(this);

        nextBall();
        this.interval = setInterval(function () {
            if (this.words.length > 0) {
                nextBall();
            } else {
                this.stop();
            }
        }.bind(this), this.defaultTimeout);
    };

    pauseAnimation() {
        jQuery('.played-balls .ball').addClass('paused');
    };

    stop() {
        jQuery('#play-now').data('is-started', 'false').attr('data-is-started', 'false').removeClass('paused');
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.words = [];
        const $balls = jQuery('.played-balls .ball');
        if ($balls.length) {
            $balls.fadeOut(400, function() {
                jQuery(this).remove();
            });
        }
    };
}
