class TextToSpeech {
    get synth() {
        return typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    }
    speak(word) {
        if (!this.synth || !word) return;
        try {
            const utterThis = new SpeechSynthesisUtterance(word.toString());
            utterThis.rate = 0.7;
            this.synth.speak(utterThis);
        } catch (e) {
            // Speech synthesis not available or blocked by browser permissions
        }
    }
}