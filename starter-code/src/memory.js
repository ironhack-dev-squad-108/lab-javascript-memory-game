class MemoryGame {
  constructor (cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // this.shuffleCards()
  }
  shuffleCards() {
    var m = this.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }
  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++
    if (firstCard === secondCard)
      this.pairsGuessed++
    return firstCard === secondCard
  }
  isFinished() {
    if (this.pairsClicked === 0) return false
    return this.pairsGuessed === this.cards.length/2
  }
}
