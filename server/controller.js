module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortunes: (req, res) => {
        const fortunes = [`You will be the very best!`, `You can do it!`, `Your hard work will payoff today.`, `You cant steal second base and keep your foot on first.`, `Success and wealth are in your future.`];

        let randomIndex = Math.floor(Math.random() * fortunes.length);   
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getGoals: (req, res) =>{
        const { goalDate } = req.query // { date: 'no' } undefined
        const { goalIdea } = req.params // { name: 'no } undefined
        res.status(200).send(`I want to ${goalIdea} by ${goalDate}`)
    },

    postInpirationalPerson: (req, res) => {
        const { inspirationalPerson } = req.params
        res.status(200).send(`${inspirationalPerson} is my inspirational person`)
    },

    getCelebrating: (req, res) => {
       const celebrations = ["Woohoo!!", "You did it!", "Party!"];

       let randomIndex = Math.floor(Math.random() * celebrations.length);
       let randomCelebration = celebrations[randomIndex]

       res.status(200).send(randomCelebration)
    }

}