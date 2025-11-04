function Question(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Question.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
};

