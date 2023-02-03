const WordPOS = require("wordpos"),
  wordpos = new WordPOS();
const multer = require('multer')
const fs = require('fs')

const upload = multer()

// const { of, from } = require("rxjs");
// const { map, mergeMap, toArray } = require("rxjs/operators");

module.exports = {
  getSpeech: async (req, res) => {
    const text = req.file.buffer.toString()
    // const buffer = fs.readFileSync(req.file.buffer)
    // console.log(buffer.toString())

    // const text = file.toString();
    // console.log("text",text)

    try {
      console.log("start........................");

      const totalWords = text
        .split(/[.!?]/)
        .map((sentence) => sentence.split(" "))
        .flat();

      // const totalWords = sentences.reduce((words, sentence) => words.concat(sentence.split(" ")), []);

      const totalLength = totalWords.length;
      console.log(totalLength);

      const nouns = await wordpos.getNouns(totalWords);
      console.log(nouns);

      const nounsLength = nouns.length;
      const verbs = await wordpos.getVerbs(totalWords);
      console.log(verbs);

      const verbsLength = verbs.length;
      const adjectives = await wordpos.getAdjectives(totalWords);
      console.log(adjectives);

      const adjectivesLength = adjectives.length;
      const adverbs = await wordpos.getAdverbs(totalWords);
      console.log(adverbs);
      const adverbsLength = adverbs.length;

      const dataSet = {
        nounsPercentage: (nouns.length / totalWords.length) * 100,
        verbsPercentage: (verbs.length / totalWords.length) * 100,
        adjectivesPercentage: (adjectives.length / totalWords.length) * 100,
        adverbsPercentage: (adverbs.length / totalWords.length) * 100,
      };

  
      console.log(dataSet);
      res.json(dataSet);
    } catch (error) {
      console.log(error);
    }
  },
};
