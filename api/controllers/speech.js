const WordPOS = require("wordpos"),
  wordpos = new WordPOS();

module.exports = {
  getSpeech: async (req, res) => {
    const text = req.file.buffer.toString();

    try {
      const totalWords = text
        .split(/[.!?]/)
        .map((sentence) => sentence.split(" "))
        .flat();

      const nouns = await wordpos.getNouns(totalWords);
      const nounsLength = nouns.length;
      const verbs = await wordpos.getVerbs(totalWords);
      const verbsLength = verbs.length;
      const adjectives = await wordpos.getAdjectives(totalWords);
      const adjectivesLength = adjectives.length;
      const adverbs = await wordpos.getAdverbs(totalWords);
      const adverbsLength = adverbs.length;
      const totalLength = adjectivesLength + verbsLength + nounsLength + adverbsLength

      const dataSet = {
        nounsPercentage: Math.round((nounsLength / totalLength) * 100),
        verbsPercentage: Math.round((verbsLength / totalLength) * 100),
        adjectivesPercentage: Math.round((adjectivesLength / totalLength) * 100),
        adverbsPercentage: Math.round((adverbsLength / totalLength) * 100),
      };
      res.json(dataSet);
    } catch (error) {
      console.log(error);
    }
  },
};
