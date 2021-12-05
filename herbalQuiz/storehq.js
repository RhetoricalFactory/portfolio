//This is where all the content for the questions screen is stored including the image, the question and the correct answer.
const STORE = {
    questions: [ {
        image: `<div> <img  class="drawing" src="nettles3.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant provides the most minerals and nutrients?",
            responses: [
                "Licorice <i>Glycyrrhiza glabra</i>",
                "Jiagulon <i>Gynostemma pentaphyllum</i>",
                "Lemon Balm <i>Melissa officinalis</i>",
                "Nettles <i>Urtica dioica</i>"
            ],
            answer: "Nettles <i>Urtica dioica</i>",
            questionNumber: "1"
        },
        {
            image: `<div> <img class="drawing" src="jiagulon1.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant is known for improving heart function and preventing hair loss?",
            responses: [
                "Jiagulon <i>Gynostemma pentaphyllum</i>",
                "Licorice <i>Glycyrrhiza glabra</i>",
                "Nettles <i>Urtica dioica</i>",
                "Lemon Balm <i>Melissa officinalis</i>"
            ],
            answer: "Jiagulon <i>Gynostemma pentaphyllum</i>",
            questionNumber: "2"
        },
        {
            image: `<div> <img id="licorice" class="drawing" src="licorice6.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant is best known for helping with digestive issues?",
            responses: [
                "Lemon Balm <i>Melissa officinalis</i>",
                "Jiagulon <i>Gynostemma pentaphyllum</i>",
                "Nettles <i>Urtica dioica</i>",
                "Licorice <i>Glycyrrhiza glabra</i>",

            ],
            answer: "Licorice <i>Glycyrrhiza glabra</i>",
            questionNumber: "3"
        },
        {
            image:`<div> <img class="drawing" src="lemonbalm5.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant is used to help calm children?",
            responses: [
                "Jiagulon <i>Gynostemma pentaphyllum</i>",
                "Lemon Balm <i>Melissa officinalis</i>",
                "Nettles <i>Urtica dioica</i>",
                "Licorice <i>Glycyrrhiza glabra</i>",

            ],
            answer: "Lemon Balm <i>Melissa officinalis</i>",
            questionNumber: "4"
            
        },
        {
            image: `<div> <img class="drawing" src="nettles3.png", alt="mystery plant illustration"> </div>`,
            questionText: "What do MOST adaptogens have in common?",
            responses: [
                "They help the body adapt to stress on physical, emotional and mental levels",
                "They can be taken as a tea or tincture",
                "You should consult a doctor before combining with medications",
                "All of the above",
            ],
            answer: "All of the above",
            questionNumber: "5"
            
        },
        {
            image: `<div> <img class="drawing" src="lemonbalm5.png", alt="mystery plant illustration"> </div>`,
        questionText: "What does “officinalis” mean when it’s in a botanical name?",
            responses: [
                "Someone famous named it",
                "It’s used in pharmaceutical medicine",
                "The plant was discovered in the 18th century",
                "All of the above",
            ],
            answer: "It’s used in pharmaceutical medicine",
            questionNumber: "6"
        },
        {
            image: `<div> <img class="drawing" img src="licorice6.png", alt="mystery plant illustration"> </div>`,
            questionText: "When should inexperienced users consult a physician before using herbs for medicinal purposes?"
            ,
                responses: [
                    "Only if they are taking other medications",
                    "Only when pregnant or breast feeding",
                    "Only when treating children",
                    "Always"

                ],
                answer: "Always",
                questionNumber: "7"
            },


    ]
}
