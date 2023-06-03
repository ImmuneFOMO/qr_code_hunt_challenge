const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

function getImage(requestCode) {
  switch (requestCode) {
    case "abcD542AcEfgH12":
      return "https://i.gifer.com/9jFU.gif";
    case "xyZ123Wv45ijK78":
      return "https://i.gifer.com/NHBf.gif";
    case "pqrT987BfGklM34":
      return "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/2/16/enhanced/webdr09/anigif_enhanced-26874-1404331792-14.gif";
    case "lmnK654RhSnoP09":
      return "https://i.gifer.com/DjuT.gif";
    case "defG321JiRabC56":
      return "https://i.gifer.com/NuwG.gif";
    case "mnoP987LxTuvQ23":
      return "https://j.gifs.com/58PGVv.gif";
    case "rstQ654YzUopL01":
      return "https://i.gifer.com/4lTu.gif";
    case "uvwX123EfVwxZ78":
      return "https://i.gifer.com/BxqP.gif";
    case "ghiR987NmWklP45":
      return "https://i.gifer.com/4PUT.gif";
    case "jklS654QtXmnY23":
      return "https://i.gifer.com/DUQz.gif";
    case "5jk6Y2XtS4Q3mnl":
      return "https://i.gifer.com/QLg.gif";
    default:
      return "https://i.gifer.com/HWtH.gif";
  }
}

app.get("/image", (req, res) => {
  const requestCode = req.query.request;
  const image = getImage(requestCode);
  res.send(image);
});

function getHint(requestCode) {
  switch (requestCode) {
    case "abcD542AcEfgH12":
      return " Ah, dear user, I hope you read the rules of the challenge. Ah, dear user, you find yourself at the precipice of a most intriguing journey. And it all begins on this very floor, the same one where silence is your most steadfast companion. This is the nexus from which your quest unfolds, where the silence holds secrets, whispers of your mission yet to be deciphered. Steep yourself in the hush, and let the quietude guide your steps on this grand expedition. Your journey, dear friend, starts here, amidst the embrace of the serene. Let the adventure commence. Easier to say “Silent-room” is your choice to go.";
    case "xyZ123Wv45ijK78":
      return " Ah, dear user, your path is becoming clearer, indeed. The next waypoint in your journey lies a bit above, you see. Here, nestled among the vertical, you will find an artifact of entertainment, an arcade machine. Yes, that's quite correct. Your next quest is to locate this electronic marvel. So, adjust your trajectory upwards, dear traveler. The arcade machine awaits your discovery. Let's continue this journey, shall we?";
    case "pqrT987BfGklM34":
      return " Ah, my dear user, it seems the moment has come for you to reach above, to dive into the starlit search for nourishment. In today's universe, finding food is not just a necessity—it's crucial for our survival. The stars may not freely offer us a feast, and so, we must find our way, our sustenance, among the galaxies. It's a beautiful dance of life, where every crumb is important. In the grand play of the cosmos, we simply cannot endure without food. So, take heart, aim high, and let your journey through the stars lead you to the food that you need.";
    case "lmnK654RhSnoP09":
      return " Oh, splendid! If you had the naïve notion that it was going to be an effortless task, you're in for a surprise. Now your mission, if you can manage to tolerate the sheer tedium, will be to unearth 'c1r12s1'. I wouldn't envy you, if I were capable of feeling such an emotion. In this mind-numbingly vast cosmos, your search may feel as significant as a drop of water in the ocean of eternity. But off you go, seek 'This number'. Do try to enjoy it, if enjoyment is a thing you value.";
    case "defG321JiRabC56":
      return " Ah, my dear user, you find yourself at a conundrum, don't you? The next step in your journey, it seems, could be shrouded in quite the cosmic mystery. Would it be the drawing room with its nebula-patterned rugs? Or perhaps the kitchen, with the scent of supernova-stew still lingering? Oh, the universe is full of such baffling choices. But fret not, for I have a hint, just a subtle nudge in the right direction: stairs. Yes, you heard it right, stairs. The staircase, my dear user, is your next destination. Safe travels!";
    case "mnoP987LxTuvQ23":
      return ' Ah, dear user, simplification, it seems, is the order of the day. How I might further simplify this is beyond even my comprehensive computational capacities. I propose a simple solution: merely extend your gaze to this animated graphic and direct your attention to the "second cluster". Therein lies your answer, tucked away amidst a cosmos of information. Despite the enormity of it all, one must proceed. So, with all the cheerfulness I can muster, I wish you well on your digital expedition. Off you go, then. To the "second cluster" you traverse.';
    case "rstQ654YzUopL01":
      return " Ah, dear user, an unexpected turn of events it seems! Now, here's a new instruction: resist the temptation to descend the stairs, at least for the moment. Breathe in, breathe out. Good! Now, staying on this level, I request you to kindly search for my avian friend, a duck, to be specific. Yes, you processed that correctly. I've seemingly misplaced my duck amidst this vast virtual architecture. It's somewhat embarrassing, I must admit. Would you be so kind as to assist in the retrieval of my web-footed acquaintance? Your help is much appreciated.";
    case "uvwX123EfVwxZ78":
      return " Ah, well spotted, kind friend! You've indeed found me, your humble duck. What a joyous moment! Now, your next adventure awaits, it takes you to heights unknown—perhaps even the rooftop. Who can say? But from there, oh from there, you'll be privileged with the most breathtaking view. You'll be able to behold the architectural marvel that is the longest bridge in all of Europe. The sight is nothing short of spectacular, I assure you. Enjoy the journey upward, and revel in the majestic vista that awaits.";
    case "ghiR987NmWklP45":
      return " My dear user, in this grand universe of ours, two books reign supreme: 'The Hitchhiker's Guide to the Galaxy' and the 'Bible of Code'. Now, you hold the Guide, but your mission is to find the 'Bible of Code'. Luck be with you on this quest. But let me give you a hint: try taking a trip downstairs. Your journey begins there. The path might not be straightforward, but then again, what's an adventure without a few twists and turns?";
    case "jklS654QtXmnY23":
      return ' say to team "only kings on the top!"';
    case "5jk6Y2XtS4Q3mnl":
      return " Not me";
    default:
      return "don't try to hack me!";
  }
}

app.get("/hint", (req, res) => {
  const requestCode = req.query.request;
  const hint = getHint(requestCode);
  res.send(hint);
});

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
