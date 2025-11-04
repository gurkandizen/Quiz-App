const soruListesi = [
    new Question("1- Hangisi Javascript Paket Yönetim Uygulamasıdır", { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" }, "d"),
    new Question("2- Hangisi Front-End Kapsamında Değerlendirilmez", { a: "Css", b: "Html", c: "Javascript", d: "Sql" }, "d"),
    new Question("3- Hangisi Back-End Kapsamında Değerlendirilmez", { a: "Node.js", b: "Typescript", c: "Angular", d: "React" }, "a"),
    new Question("4- Hangisi Javascript Programlama Dilini Kullanamaz", { a: "React", b: "Angular", c: "Vue.js", d: "Aps.Net" }, "d"),
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

document.getElementById("btnSoruGetir").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex) {
        ui.soruGoster(quiz.soruGetir());
        quiz.soruIndex += 1;

        console.log(quiz);

    } else {
        console.log("Quiz Bitti");
    }
});