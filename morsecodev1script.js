// ============================================================
// MORSE CODE CHALLENGE
// ============================================================
// IMPORTANT:
// Messages are shuffled and used WITHOUT repetition.
// When all messages have been used, the game reshuffles them
// automatically and starts a new cycle.
// ============================================================

const MESSAGES = [
{ text: "LOOK AGAIN" },
  { text: "TRY AGAIN" },
  { text: "THINK FAST" },
  { text: "THINK CAREFULLY" },
  { text: "LISTEN CLOSELY" },
  { text: "WATCH THE SIGNAL" },
  { text: "CHECK THE CLUE" },
  { text: "CHECK THE CODE" },
  { text: "CHECK YOUR ANSWER" },
  { text: "READ IT AGAIN" },
  { text: "SLOW DOWN" },
  { text: "SPEED UP" },
  { text: "STAY FOCUSED" },
  { text: "STAY CALM" },
  { text: "KEEP GOING" },
  { text: "KEEP THINKING" },
  { text: "KEEP SEARCHING" },
  { text: "WORK TOGETHER" },
  { text: "SHARE THE CLUE" },
  { text: "FOLLOW THE SIGNAL" },
  { text: "FOLLOW THE TRAIL" },
  { text: "FIND THE KEY" },
  { text: "FIND THE CLUE" },
  { text: "FIND THE ANSWER" },
  { text: "SOLVE THE PUZZLE" },
  { text: "CRACK THE CODE" },
  { text: "WATCH AND LEARN" },
  { text: "LOOK AND LISTEN" },
  { text: "READ AND THINK" },
  { text: "ASK A QUESTION" },
  { text: "READY FOR THE NEXT CLUE" },
  { text: "THE NEXT CLUE IS NEAR" },
  { text: "THE CLUE IS HERE" },
  { text: "THE CLUE IS HIDDEN" },
  { text: "THE ANSWER IS NEAR" },
  { text: "THE ANSWER IS HERE" },
  { text: "THE ANSWER IS SIMPLE" },
  { text: "THE CODE IS READY" },
  { text: "THE CODE IS HIDDEN" },
  { text: "THE SIGNAL IS STRONG" },
  { text: "THE SIGNAL IS CLEAR" },
  { text: "THE SIGNAL IS WAITING" },
  { text: "THE MISSION CONTINUES" },
  { text: "THE MISSION IS ON" },
  { text: "THE MISSION IS READY" },
  { text: "THE CLOCK IS TICKING" },
  { text: "TIME IS RUNNING" },
  { text: "TIME IS UP" },
  { text: "THE GAME IS ON" },
  { text: "THE GAME CONTINUES" },
  { text: "THE CHALLENGE BEGINS" },
  { text: "THE CHALLENGE CONTINUES" },
  { text: "THE FINAL CLUE IS NEAR" },
  { text: "THE FINAL ROUND BEGINS" },
  { text: "YOUR TURN NOW" },
  { text: "YOUR TURN IS NEXT" },
  { text: "YOUR TEAM IS NEXT" },
  { text: "YOUR CLUE IS NEXT" },
  { text: "YOUR ANSWER COUNTS" },
  { text: "YOUR THINKING MATTERS" },
  { text: "EVERY CLUE MATTERS" },
  { text: "EVERY SECOND COUNTS" },
  { text: "EVERY TEAM COUNTS" },
  { text: "EVERY ANSWER MATTERS" },
  { text: "ONE STEP AT A TIME" },
  { text: "ONE CLUE AT A TIME" },
  { text: "ONE MORE TRY" },
  { text: "ONE MORE CLUE" },
  { text: "ONE FINAL CHANCE" },
  { text: "MAKE IT COUNT" },
  { text: "GOOD JOB" },
  { text: "GREAT JOB" },
  { text: "WELL PLAYED" },
  { text: "NICE WORK" },
  { text: "GREAT THINKING" },
  { text: "SMART MOVE" },
  { text: "GOOD THINKING" },
  { text: "BRILLIANT IDEA" },
  { text: "EXCELLENT WORK" },
  { text: "KEEP IT UP" },
  { text: "YOU CAN DO IT" },
  { text: "YOU ARE CLOSE" },
  { text: "ALMOST THERE" },
  { text: "THAT WAS FAST" },
  { text: "THAT WAS SMART" },
  { text: "GREAT TEAMWORK" },
  { text: "STRONG START" },
  { text: "STRONG FINISH" },
  { text: "DO NOT GIVE UP" },
  { text: "BELIEVE IN YOUR TEAM" },
  { text: "TRUST YOUR THINKING" },
  { text: "TRUST YOUR TEAM" },
  { text: "YOU FOUND IT" },
  { text: "YOU GOT IT" },
  { text: "YOU SOLVED IT" },
  { text: "YOU CRACKED IT" },
  { text: "MISSION ACCOMPLISHED" },
  { text: "ROUND COMPLETE" },
  { text: "LEVEL COMPLETE" },
  { text: "START THE TIMER" },
  { text: "STOP THE TIMER" },
  { text: "START THE SIGNAL" },
  { text: "STOP THE SIGNAL" },
  { text: "NEXT ROUND" },
  { text: "FINAL ROUND" },
  { text: "BONUS ROUND" },
  { text: "SECRET ROUND" },
  { text: "SPEED ROUND" },
  { text: "LIGHT ROUND" },
  { text: "SOUND ROUND" },
  { text: "CODE ROUND" },
  { text: "CLUE ROUND" },
  { text: "TEAM ROUND" },
  { text: "DOUBLE POINTS" },
  { text: "BONUS POINTS" },
  { text: "POINTS ARE READY" },
  { text: "SCORE CHECK" },
  { text: "CHECK THE SCORE" },
  { text: "WATCH THE CLOCK" },
  { text: "BEAT THE CLOCK" },
  { text: "BEAT THE TIMER" },
  { text: "TAKE YOUR TURN" },
  { text: "PASS THE TURN" },
  { text: "CHOOSE YOUR ANSWER" },
  { text: "LOCK YOUR ANSWER" },
  { text: "REVEAL THE ANSWER" },
  { text: "HIDE THE ANSWER" },
  { text: "NEXT MESSAGE" },
  { text: "NEW MESSAGE" },
  { text: "LEARN SOMETHING NEW" },
  { text: "KNOWLEDGE OPENS DOORS" },
  { text: "QUESTIONS ARE POWERFUL" },
  { text: "CURIOSITY LEADS THE WAY" },
  { text: "THINK LIKE A SCIENTIST" },
  { text: "THINK LIKE A DETECTIVE" },
  { text: "THINK LIKE AN EXPLORER" },
  { text: "BE A GOOD LISTENER" },
  { text: "BE A GOOD TEAMMATE" },
  { text: "ASK BETTER QUESTIONS" },
  { text: "LOOK FOR EVIDENCE" },
  { text: "USE YOUR EVIDENCE" },
  { text: "COMPARE THE CLUES" },
  { text: "FIND THE PATTERN" },
  { text: "SPOT THE DIFFERENCE" },
  { text: "EXPLAIN YOUR THINKING" },
  { text: "SUPPORT YOUR ANSWER" },
  { text: "CHECK THE FACTS" },
  { text: "QUESTION THE SOURCE" },
  { text: "LOOK FOR THE REASON" },
  { text: "FIND THE CAUSE" },
  { text: "FIND THE EFFECT" },
  { text: "SEE BOTH SIDES" },
  { text: "LISTEN TO OTHER VIEWS" },
  { text: "SHARE YOUR IDEAS" },
  { text: "RESPECT OTHER IDEAS" },
  { text: "THINK BEFORE SPEAKING" },
  { text: "READ BETWEEN THE LINES" },
  { text: "MAKE A SMART CHOICE" },
  { text: "LEARN FROM MISTAKES" },
  { text: "THE CODE IS WATCHING" },
  { text: "THE CLUE IS SNEAKY" },
  { text: "THE ANSWER IS HIDING" },
  { text: "THE DOTS ARE TALKING" },
  { text: "THE DASHES ARE WAITING" },
  { text: "THE SIGNAL KNOWS" },
  { text: "THE CODE HAS A SECRET" },
  { text: "THE MYSTERY CONTINUES" },
  { text: "THE TRAIL GOES ON" },
  { text: "THE CLUE HAS MOVED" },
  { text: "SOMEONE FOUND A CLUE" },
  { text: "SOMEONE KNOWS THE ANSWER" },
  { text: "THE DETECTIVE IS READY" },
  { text: "THE DETECTIVE NEEDS A CLUE" },
  { text: "THE MYSTERY IS DEEP" },
  { text: "THE SECRET IS SAFE" },
  { text: "THE SECRET IS OUT" },
  { text: "MISSION BRIEFING READY" },
  { text: "AGENT TEAM ASSEMBLE" },
  { text: "AGENTS STAY ALERT" },
  { text: "THE TEAM IS READY" },
  { text: "THE TEAM IS THINKING" },
  { text: "THE TEAM IS WAITING" },
  { text: "THE TEAM IS WATCHING" },
  { text: "THE TEAM IS LISTENING" },
  { text: "THE TEAM IS LEARNING" },
  { text: "THE TEAM IS SEARCHING" },
  { text: "THE TEAM IS CLOSE" },
  { text: "THE TEAM IS ON TRACK" },
  { text: "THE TEAM IS WINNING" },
  { text: "THE TEAM IS MAKING PROGRESS" },
  { text: "THE TEAM HAS THE CLUE" },
  { text: "THE TEAM HAS THE ANSWER" },
  { text: "THE TEAM FOUND THE CLUE" },
  { text: "THE TEAM FOUND THE ANSWER" },
  { text: "THE TEAM FOUND THE SIGNAL" },
  { text: "THE TEAM FOUND THE KEY" },
  { text: "THE TEAM SOLVED THE PUZZLE" },
  { text: "THE TEAM CRACKED THE CODE" },
  { text: "THE TEAM KNOWS THE WAY" },
  { text: "YOUR TEAM IS READY" },
  { text: "YOUR TEAM IS THINKING" },
  { text: "YOUR TEAM IS WAITING" },
  { text: "YOUR TEAM IS WATCHING" },
  { text: "YOUR TEAM IS LISTENING" },
  { text: "YOUR TEAM IS LEARNING" },
  { text: "YOUR TEAM IS SEARCHING" },
  { text: "YOUR TEAM IS CLOSE" },
  { text: "YOUR TEAM IS ON TRACK" },
  { text: "YOUR TEAM IS WINNING" },
  { text: "YOUR TEAM IS MAKING PROGRESS" },
  { text: "YOUR TEAM HAS THE CLUE" },
  { text: "YOUR TEAM HAS THE ANSWER" },
  { text: "YOUR TEAM FOUND THE CLUE" },
  { text: "YOUR TEAM FOUND THE ANSWER" },
  { text: "YOUR TEAM FOUND THE SIGNAL" },
  { text: "YOUR TEAM FOUND THE KEY" },
  { text: "YOUR TEAM SOLVED THE PUZZLE" },
  { text: "YOUR TEAM CRACKED THE CODE" },
  { text: "YOUR TEAM KNOWS THE WAY" },
  { text: "OUR TEAM IS READY" },
  { text: "OUR TEAM IS THINKING" },
  { text: "OUR TEAM IS WAITING" },
  { text: "OUR TEAM IS WATCHING" },
  { text: "OUR TEAM IS LISTENING" },
  { text: "OUR TEAM IS LEARNING" },
  { text: "OUR TEAM IS SEARCHING" },
  { text: "OUR TEAM IS CLOSE" },
  { text: "OUR TEAM IS ON TRACK" },
  { text: "OUR TEAM IS WINNING" },
  { text: "OUR TEAM IS MAKING PROGRESS" },
  { text: "OUR TEAM HAS THE CLUE" },
  { text: "OUR TEAM HAS THE ANSWER" },
  { text: "OUR TEAM FOUND THE CLUE" },
  { text: "OUR TEAM FOUND THE ANSWER" },
  { text: "OUR TEAM FOUND THE SIGNAL" },
  { text: "OUR TEAM FOUND THE KEY" },
  { text: "OUR TEAM SOLVED THE PUZZLE" },
  { text: "OUR TEAM CRACKED THE CODE" },
  { text: "OUR TEAM KNOWS THE WAY" },
  { text: "THIS TEAM IS READY" },
  { text: "THIS TEAM IS THINKING" },
  { text: "THIS TEAM IS WAITING" },
  { text: "THIS TEAM IS WATCHING" },
  { text: "THIS TEAM IS LISTENING" },
  { text: "THIS TEAM IS LEARNING" },
  { text: "THIS TEAM IS SEARCHING" },
  { text: "THIS TEAM IS CLOSE" },
  { text: "THIS TEAM IS ON TRACK" },
  { text: "THIS TEAM IS WINNING" },
  { text: "THIS TEAM IS MAKING PROGRESS" },
  { text: "THIS TEAM HAS THE CLUE" },
  { text: "THIS TEAM HAS THE ANSWER" },
  { text: "THIS TEAM FOUND THE CLUE" },
  { text: "THIS TEAM FOUND THE ANSWER" },
  { text: "THIS TEAM FOUND THE SIGNAL" },
  { text: "THIS TEAM FOUND THE KEY" },
  { text: "THIS TEAM SOLVED THE PUZZLE" },
  { text: "THIS TEAM CRACKED THE CODE" },
  { text: "THIS TEAM KNOWS THE WAY" },
  { text: "THE PLAYER IS READY" },
  { text: "THE PLAYER IS THINKING" },
  { text: "THE PLAYER IS WAITING" },
  { text: "THE PLAYER IS WATCHING" },
  { text: "THE PLAYER IS LISTENING" },
  { text: "THE PLAYER IS LEARNING" },
  { text: "THE PLAYER IS SEARCHING" },
  { text: "THE PLAYER IS CLOSE" },
  { text: "THE PLAYER IS ON TRACK" },
  { text: "THE PLAYER IS WINNING" },
  { text: "THE PLAYER IS MAKING PROGRESS" },
  { text: "THE PLAYER HAS THE CLUE" },
  { text: "THE PLAYER HAS THE ANSWER" },
  { text: "THE PLAYER FOUND THE CLUE" },
  { text: "THE PLAYER FOUND THE ANSWER" },
  { text: "THE PLAYER FOUND THE SIGNAL" },
  { text: "THE PLAYER FOUND THE KEY" },
  { text: "THE PLAYER SOLVED THE PUZZLE" },
  { text: "THE PLAYER CRACKED THE CODE" },
  { text: "THE PLAYER KNOWS THE WAY" },
  { text: "YOUR PARTNER IS READY" },
  { text: "YOUR PARTNER IS THINKING" },
  { text: "YOUR PARTNER IS WAITING" },
  { text: "YOUR PARTNER IS WATCHING" },
  { text: "YOUR PARTNER IS LISTENING" },
  { text: "YOUR PARTNER IS LEARNING" },
  { text: "YOUR PARTNER IS SEARCHING" },
  { text: "YOUR PARTNER IS CLOSE" },
  { text: "YOUR PARTNER IS ON TRACK" },
  { text: "YOUR PARTNER IS WINNING" },
  { text: "YOUR PARTNER IS MAKING PROGRESS" },
  { text: "YOUR PARTNER HAS THE CLUE" },
  { text: "YOUR PARTNER HAS THE ANSWER" },
  { text: "YOUR PARTNER FOUND THE CLUE" },
  { text: "YOUR PARTNER FOUND THE ANSWER" },
  { text: "YOUR PARTNER FOUND THE SIGNAL" },
  { text: "YOUR PARTNER FOUND THE KEY" },
  { text: "YOUR PARTNER SOLVED THE PUZZLE" },
  { text: "YOUR PARTNER CRACKED THE CODE" },
  { text: "YOUR PARTNER KNOWS THE WAY" },
  { text: "THE LEADER IS READY" },
  { text: "THE LEADER IS THINKING" },
  { text: "THE LEADER IS WAITING" },
  { text: "THE LEADER IS WATCHING" },
  { text: "THE LEADER IS LISTENING" },
  { text: "THE LEADER IS LEARNING" },
  { text: "THE LEADER IS SEARCHING" },
  { text: "THE LEADER IS CLOSE" },
  { text: "THE LEADER IS ON TRACK" },
  { text: "THE LEADER IS WINNING" },
  { text: "THE LEADER IS MAKING PROGRESS" },
  { text: "THE LEADER HAS THE CLUE" },
  { text: "THE LEADER HAS THE ANSWER" },
  { text: "THE LEADER FOUND THE CLUE" },
  { text: "THE LEADER FOUND THE ANSWER" },
  { text: "THE LEADER FOUND THE SIGNAL" },
  { text: "THE LEADER FOUND THE KEY" },
  { text: "THE LEADER SOLVED THE PUZZLE" },
  { text: "THE LEADER CRACKED THE CODE" },
  { text: "THE LEADER KNOWS THE WAY" },
  { text: "THE GROUP IS READY" },
  { text: "THE GROUP IS THINKING" },
  { text: "THE GROUP IS WAITING" },
  { text: "THE GROUP IS WATCHING" },
  { text: "THE GROUP IS LISTENING" },
  { text: "THE GROUP IS LEARNING" },
  { text: "THE GROUP IS SEARCHING" },
  { text: "THE GROUP IS CLOSE" },
  { text: "THE GROUP IS ON TRACK" },
  { text: "THE GROUP IS WINNING" },
  { text: "THE GROUP IS MAKING PROGRESS" },
  { text: "THE GROUP HAS THE CLUE" },
  { text: "THE GROUP HAS THE ANSWER" },
  { text: "THE GROUP FOUND THE CLUE" },
  { text: "THE GROUP FOUND THE ANSWER" },
  { text: "THE GROUP FOUND THE SIGNAL" },
  { text: "THE GROUP FOUND THE KEY" },
  { text: "THE GROUP SOLVED THE PUZZLE" },
  { text: "THE GROUP CRACKED THE CODE" },
  { text: "THE GROUP KNOWS THE WAY" },
  { text: "THE CLASS IS READY" },
  { text: "THE CLASS IS THINKING" },
  { text: "THE CLASS IS WAITING" },
  { text: "THE CLASS IS WATCHING" },
  { text: "THE CLASS IS LISTENING" },
  { text: "THE CLASS IS LEARNING" },
  { text: "THE CLASS IS SEARCHING" },
  { text: "THE CLASS IS CLOSE" },
  { text: "THE CLASS IS ON TRACK" },
  { text: "THE CLASS IS WINNING" },
  { text: "THE CLASS IS MAKING PROGRESS" },
  { text: "THE CLASS HAS THE CLUE" },
  { text: "THE CLASS HAS THE ANSWER" },
  { text: "THE CLASS FOUND THE CLUE" },
  { text: "THE CLASS FOUND THE ANSWER" },
  { text: "THE CLASS FOUND THE SIGNAL" },
  { text: "THE CLASS FOUND THE KEY" },
  { text: "THE CLASS SOLVED THE PUZZLE" },
  { text: "THE CLASS CRACKED THE CODE" },
  { text: "THE CLASS KNOWS THE WAY" },
  { text: "EVERYONE IS READY" },
  { text: "EVERYONE IS THINKING" },
  { text: "EVERYONE IS WAITING" },
  { text: "EVERYONE IS WATCHING" },
  { text: "EVERYONE IS LISTENING" },
  { text: "EVERYONE IS LEARNING" },
  { text: "EVERYONE IS SEARCHING" },
  { text: "EVERYONE IS CLOSE" },
  { text: "EVERYONE IS ON TRACK" },
  { text: "EVERYONE IS WINNING" },
  { text: "EVERYONE IS MAKING PROGRESS" },
  { text: "EVERYONE HAS THE CLUE" },
  { text: "EVERYONE HAS THE ANSWER" },
  { text: "EVERYONE FOUND THE CLUE" },
  { text: "EVERYONE FOUND THE ANSWER" },
  { text: "EVERYONE FOUND THE SIGNAL" },
  { text: "EVERYONE FOUND THE KEY" },
  { text: "EVERYONE SOLVED THE PUZZLE" },
  { text: "EVERYONE CRACKED THE CODE" },
  { text: "EVERYONE KNOWS THE WAY" },
  { text: "SOMEONE IS READY" },
  { text: "SOMEONE IS THINKING" },
  { text: "SOMEONE IS WAITING" },
  { text: "SOMEONE IS WATCHING" },
  { text: "SOMEONE IS LISTENING" },
  { text: "SOMEONE IS LEARNING" },
  { text: "SOMEONE IS SEARCHING" },
  { text: "SOMEONE IS CLOSE" },
  { text: "SOMEONE IS ON TRACK" },
  { text: "SOMEONE IS WINNING" },
  { text: "SOMEONE IS MAKING PROGRESS" },
  { text: "SOMEONE HAS THE CLUE" },
  { text: "SOMEONE HAS THE ANSWER" },
  { text: "SOMEONE FOUND THE CLUE" },
  { text: "SOMEONE FOUND THE ANSWER" },
  { text: "SOMEONE FOUND THE SIGNAL" },
  { text: "SOMEONE FOUND THE KEY" },
  { text: "SOMEONE SOLVED THE PUZZLE" },
  { text: "SOMEONE CRACKED THE CODE" },
  { text: "SOMEONE KNOWS THE WAY" },
  { text: "THE NEXT PLAYER IS READY" },
  { text: "THE NEXT PLAYER IS THINKING" },
  { text: "THE NEXT PLAYER IS WAITING" },
  { text: "THE NEXT PLAYER IS WATCHING" },
  { text: "THE NEXT PLAYER IS LISTENING" },
  { text: "THE NEXT PLAYER IS LEARNING" },
  { text: "THE NEXT PLAYER IS SEARCHING" },
  { text: "THE NEXT PLAYER IS CLOSE" },
  { text: "THE NEXT PLAYER IS ON TRACK" },
  { text: "THE NEXT PLAYER IS WINNING" },
  { text: "THE NEXT PLAYER IS MAKING PROGRESS" },
  { text: "THE NEXT PLAYER HAS THE CLUE" },
  { text: "THE NEXT PLAYER HAS THE ANSWER" },
  { text: "THE NEXT PLAYER FOUND THE CLUE" },
  { text: "THE NEXT PLAYER FOUND THE ANSWER" },
  { text: "THE NEXT PLAYER FOUND THE SIGNAL" },
  { text: "THE NEXT PLAYER FOUND THE KEY" },
  { text: "THE NEXT PLAYER SOLVED THE PUZZLE" },
  { text: "THE NEXT PLAYER CRACKED THE CODE" },
  { text: "THE NEXT PLAYER KNOWS THE WAY" },
  { text: "THE FIRST TEAM IS READY" },
  { text: "THE FIRST TEAM IS THINKING" },
  { text: "THE FIRST TEAM IS WAITING" },
  { text: "THE FIRST TEAM IS WATCHING" },
  { text: "THE FIRST TEAM IS LISTENING" },
  { text: "THE FIRST TEAM IS LEARNING" },
  { text: "THE FIRST TEAM IS SEARCHING" },
  { text: "THE FIRST TEAM IS CLOSE" },
  { text: "THE FIRST TEAM IS ON TRACK" },
  { text: "THE FIRST TEAM IS WINNING" },
  { text: "THE FIRST TEAM IS MAKING PROGRESS" },
  { text: "THE FIRST TEAM HAS THE CLUE" },
  { text: "THE FIRST TEAM HAS THE ANSWER" },
  { text: "THE FIRST TEAM FOUND THE CLUE" },
  { text: "THE FIRST TEAM FOUND THE ANSWER" },
  { text: "THE FIRST TEAM FOUND THE SIGNAL" },
  { text: "THE FIRST TEAM FOUND THE KEY" },
  { text: "THE FIRST TEAM SOLVED THE PUZZLE" },
  { text: "THE FIRST TEAM CRACKED THE CODE" },
  { text: "THE FIRST TEAM KNOWS THE WAY" },
  { text: "THE WINNING TEAM IS READY" },
  { text: "THE WINNING TEAM IS THINKING" },
  { text: "THE WINNING TEAM IS WAITING" },
  { text: "THE WINNING TEAM IS WATCHING" },
  { text: "THE WINNING TEAM IS LISTENING" },
  { text: "THE WINNING TEAM IS LEARNING" },
  { text: "THE WINNING TEAM IS SEARCHING" },
  { text: "THE WINNING TEAM IS CLOSE" },
  { text: "THE WINNING TEAM IS ON TRACK" },
  { text: "THE WINNING TEAM IS WINNING" },
  { text: "THE WINNING TEAM IS MAKING PROGRESS" },
  { text: "THE WINNING TEAM HAS THE CLUE" },
  { text: "THE WINNING TEAM HAS THE ANSWER" },
  { text: "THE WINNING TEAM FOUND THE CLUE" },
  { text: "THE WINNING TEAM FOUND THE ANSWER" },
  { text: "THE WINNING TEAM FOUND THE SIGNAL" },
  { text: "THE WINNING TEAM FOUND THE KEY" },
  { text: "THE WINNING TEAM SOLVED THE PUZZLE" },
  { text: "THE WINNING TEAM CRACKED THE CODE" },
  { text: "THE WINNING TEAM KNOWS THE WAY" },
  { text: "THE BRAVE TEAM IS READY" },
  { text: "THE BRAVE TEAM IS THINKING" },
  { text: "THE BRAVE TEAM IS WAITING" },
  { text: "THE BRAVE TEAM IS WATCHING" },
  { text: "THE BRAVE TEAM IS LISTENING" },
  { text: "THE BRAVE TEAM IS LEARNING" },
  { text: "THE BRAVE TEAM IS SEARCHING" },
  { text: "THE BRAVE TEAM IS CLOSE" },
  { text: "THE BRAVE TEAM IS ON TRACK" },
  { text: "THE BRAVE TEAM IS WINNING" },
  { text: "THE BRAVE TEAM IS MAKING PROGRESS" },
  { text: "THE BRAVE TEAM HAS THE CLUE" },
  { text: "THE BRAVE TEAM HAS THE ANSWER" },
  { text: "THE BRAVE TEAM FOUND THE CLUE" },
  { text: "THE BRAVE TEAM FOUND THE ANSWER" },
  { text: "THE BRAVE TEAM FOUND THE SIGNAL" },
  { text: "THE BRAVE TEAM FOUND THE KEY" },
  { text: "THE BRAVE TEAM SOLVED THE PUZZLE" },
  { text: "THE BRAVE TEAM CRACKED THE CODE" },
  { text: "THE BRAVE TEAM KNOWS THE WAY" },
  { text: "THE SMART TEAM IS READY" },
  { text: "THE SMART TEAM IS THINKING" },
  { text: "THE SMART TEAM IS WAITING" },
  { text: "THE SMART TEAM IS WATCHING" },
  { text: "THE SMART TEAM IS LISTENING" },
  { text: "THE SMART TEAM IS LEARNING" },
  { text: "THE SMART TEAM IS SEARCHING" },
  { text: "THE SMART TEAM IS CLOSE" },
  { text: "THE SMART TEAM IS ON TRACK" },
  { text: "THE SMART TEAM IS WINNING" },
  { text: "THE SMART TEAM IS MAKING PROGRESS" },
  { text: "THE SMART TEAM HAS THE CLUE" },
  { text: "THE SMART TEAM HAS THE ANSWER" },
  { text: "THE SMART TEAM FOUND THE CLUE" },
  { text: "THE SMART TEAM FOUND THE ANSWER" },
  { text: "THE SMART TEAM FOUND THE SIGNAL" },
  { text: "THE SMART TEAM FOUND THE KEY" },
  { text: "THE SMART TEAM SOLVED THE PUZZLE" },
  { text: "THE SMART TEAM CRACKED THE CODE" },
  { text: "THE SMART TEAM KNOWS THE WAY" },
  { text: "THE CODE BREAKER IS READY" },
  { text: "THE CODE BREAKER IS THINKING" },
  { text: "THE CODE BREAKER IS WAITING" },
  { text: "THE CODE BREAKER IS WATCHING" },
  { text: "THE CODE BREAKER IS LISTENING" },
  { text: "THE CODE BREAKER IS LEARNING" },
  { text: "THE CODE BREAKER IS SEARCHING" },
  { text: "THE CODE BREAKER IS CLOSE" },
  { text: "THE CODE BREAKER IS ON TRACK" },
  { text: "THE CODE BREAKER IS WINNING" },
  { text: "THE CODE BREAKER IS MAKING PROGRESS" },
  { text: "THE CODE BREAKER HAS THE CLUE" },
  { text: "THE CODE BREAKER HAS THE ANSWER" },
  { text: "THE CODE BREAKER FOUND THE CLUE" },
  { text: "THE CODE BREAKER FOUND THE ANSWER" },
  { text: "THE CODE BREAKER FOUND THE SIGNAL" },
  { text: "THE CODE BREAKER FOUND THE KEY" },
  { text: "THE CODE BREAKER SOLVED THE PUZZLE" },
  { text: "THE CODE BREAKER CRACKED THE CODE" },
  { text: "THE CODE BREAKER KNOWS THE WAY" },
  { text: "THE DETECTIVE IS THINKING" },
  { text: "THE DETECTIVE IS WAITING" },
  { text: "THE DETECTIVE IS WATCHING" },
  { text: "THE DETECTIVE IS LISTENING" },
  { text: "THE DETECTIVE IS LEARNING" },
  { text: "THE DETECTIVE IS SEARCHING" },
  { text: "THE DETECTIVE IS CLOSE" },
  { text: "THE DETECTIVE IS ON TRACK" },
  { text: "THE DETECTIVE IS WINNING" },
  { text: "THE DETECTIVE IS MAKING PROGRESS" },
  { text: "THE DETECTIVE HAS THE CLUE" },
  { text: "THE DETECTIVE HAS THE ANSWER" },
  { text: "THE DETECTIVE FOUND THE CLUE" },
  { text: "THE DETECTIVE FOUND THE ANSWER" },
  { text: "THE DETECTIVE FOUND THE SIGNAL" },
  { text: "THE DETECTIVE FOUND THE KEY" },
  { text: "THE DETECTIVE SOLVED THE PUZZLE" },
  { text: "THE DETECTIVE CRACKED THE CODE" },
  { text: "THE DETECTIVE KNOWS THE WAY" },
  { text: "THE EXPLORER IS READY" },
  { text: "THE EXPLORER IS THINKING" },
  { text: "THE EXPLORER IS WAITING" },
  { text: "THE EXPLORER IS WATCHING" },
  { text: "THE EXPLORER IS LISTENING" },
  { text: "THE EXPLORER IS LEARNING" },
  { text: "THE EXPLORER IS SEARCHING" },
  { text: "THE EXPLORER IS CLOSE" },
  { text: "THE EXPLORER IS ON TRACK" },
  { text: "THE EXPLORER IS WINNING" },
  { text: "THE EXPLORER IS MAKING PROGRESS" },
  { text: "THE EXPLORER HAS THE CLUE" },
  { text: "THE EXPLORER HAS THE ANSWER" },
  { text: "THE EXPLORER FOUND THE CLUE" },
  { text: "THE EXPLORER FOUND THE ANSWER" },
  { text: "THE EXPLORER FOUND THE SIGNAL" },
  { text: "THE EXPLORER FOUND THE KEY" },
  { text: "THE EXPLORER SOLVED THE PUZZLE" },
  { text: "THE EXPLORER CRACKED THE CODE" },
  { text: "THE EXPLORER KNOWS THE WAY" },
  { text: "THE CHAMPION IS READY" },
  { text: "THE CHAMPION IS THINKING" },
  { text: "THE CHAMPION IS WAITING" },
  { text: "THE CHAMPION IS WATCHING" },
  { text: "THE CHAMPION IS LISTENING" },
  { text: "THE CHAMPION IS LEARNING" },
  { text: "THE CHAMPION IS SEARCHING" },
  { text: "THE CHAMPION IS CLOSE" },
  { text: "THE CHAMPION IS ON TRACK" },
  { text: "THE CHAMPION IS WINNING" },
  { text: "THE CHAMPION IS MAKING PROGRESS" },
  { text: "THE CHAMPION HAS THE CLUE" },
  { text: "THE CHAMPION HAS THE ANSWER" },
  { text: "THE CHAMPION FOUND THE CLUE" },
  { text: "THE CHAMPION FOUND THE ANSWER" },
  { text: "THE CHAMPION FOUND THE SIGNAL" },
  { text: "THE CHAMPION FOUND THE KEY" },
  { text: "THE CHAMPION SOLVED THE PUZZLE" },
  { text: "THE CHAMPION CRACKED THE CODE" },
  { text: "THE CHAMPION KNOWS THE WAY" },
  { text: "SMART THINKING" },
  { text: "KEEP SMART THINKING" },
  { text: "SMART TEAMWORK" },
  { text: "KEEP SMART TEAMWORK" },
  { text: "SMART LISTENING" },
  { text: "KEEP SMART LISTENING" },
  { text: "SMART SEARCHING" },
  { text: "KEEP SMART SEARCHING" },
  { text: "SMART LEARNING" },
  { text: "KEEP SMART LEARNING" },
  { text: "SMART CODING" },
  { text: "KEEP SMART CODING" },
  { text: "SMART READING" },
  { text: "KEEP SMART READING" },
  { text: "SMART REASONING" },
  { text: "KEEP SMART REASONING" },
  { text: "SMART QUESTIONING" },
  { text: "KEEP SMART QUESTIONING" },
  { text: "SMART SOLVING" },
  { text: "KEEP SMART SOLVING" },
  { text: "QUICK THINKING" },
  { text: "KEEP QUICK THINKING" },
  { text: "QUICK TEAMWORK" },
  { text: "KEEP QUICK TEAMWORK" },
  { text: "QUICK LISTENING" },
  { text: "KEEP QUICK LISTENING" },
  { text: "QUICK SEARCHING" },
  { text: "KEEP QUICK SEARCHING" },
  { text: "QUICK LEARNING" },
  { text: "KEEP QUICK LEARNING" },
  { text: "QUICK CODING" },
  { text: "KEEP QUICK CODING" },
  { text: "QUICK READING" },
  { text: "KEEP QUICK READING" },
  { text: "QUICK REASONING" },
  { text: "KEEP QUICK REASONING" },
  { text: "QUICK QUESTIONING" },
  { text: "KEEP QUICK QUESTIONING" },
  { text: "QUICK SOLVING" },
  { text: "KEEP QUICK SOLVING" },
  { text: "CALM THINKING" },
  { text: "KEEP CALM THINKING" },
  { text: "CALM TEAMWORK" },
  { text: "KEEP CALM TEAMWORK" },
  { text: "CALM LISTENING" },
  { text: "KEEP CALM LISTENING" },
  { text: "CALM SEARCHING" },
  { text: "KEEP CALM SEARCHING" },
  { text: "CALM LEARNING" },
  { text: "KEEP CALM LEARNING" },
  { text: "CALM CODING" },
  { text: "KEEP CALM CODING" },
  { text: "CALM READING" },
  { text: "KEEP CALM READING" },
  { text: "CALM REASONING" },
  { text: "KEEP CALM REASONING" },
  { text: "CALM QUESTIONING" },
  { text: "KEEP CALM QUESTIONING" },
  { text: "CALM SOLVING" },
  { text: "KEEP CALM SOLVING" },
  { text: "BRAVE THINKING" },
  { text: "KEEP BRAVE THINKING" },
  { text: "BRAVE TEAMWORK" },
  { text: "KEEP BRAVE TEAMWORK" },
  { text: "BRAVE LISTENING" },
  { text: "KEEP BRAVE LISTENING" },
  { text: "BRAVE SEARCHING" },
  { text: "KEEP BRAVE SEARCHING" },
  { text: "BRAVE LEARNING" },
  { text: "KEEP BRAVE LEARNING" },
  { text: "BRAVE CODING" },
  { text: "KEEP BRAVE CODING" },
  { text: "BRAVE READING" },
  { text: "KEEP BRAVE READING" },
  { text: "BRAVE REASONING" },
  { text: "KEEP BRAVE REASONING" },
  { text: "BRAVE QUESTIONING" },
  { text: "KEEP BRAVE QUESTIONING" },
  { text: "BRAVE SOLVING" },
  { text: "KEEP BRAVE SOLVING" },
  { text: "CURIOUS THINKING" },
  { text: "KEEP CURIOUS THINKING" },
  { text: "CURIOUS TEAMWORK" },
  { text: "KEEP CURIOUS TEAMWORK" },
  { text: "CURIOUS LISTENING" },
  { text: "KEEP CURIOUS LISTENING" },
  { text: "CURIOUS SEARCHING" },
  { text: "KEEP CURIOUS SEARCHING" },
  { text: "CURIOUS LEARNING" },
  { text: "KEEP CURIOUS LEARNING" },
  { text: "CURIOUS CODING" },
  { text: "KEEP CURIOUS CODING" },
  { text: "CURIOUS READING" },
  { text: "KEEP CURIOUS READING" },
  { text: "CURIOUS REASONING" },
  { text: "KEEP CURIOUS REASONING" },
  { text: "CURIOUS QUESTIONING" },
  { text: "KEEP CURIOUS QUESTIONING" },
  { text: "CURIOUS SOLVING" },
  { text: "KEEP CURIOUS SOLVING" },
  { text: "FOCUSED THINKING" },
  { text: "KEEP FOCUSED THINKING" },
  { text: "FOCUSED TEAMWORK" },
  { text: "KEEP FOCUSED TEAMWORK" },
  { text: "FOCUSED LISTENING" },
  { text: "KEEP FOCUSED LISTENING" },
  { text: "FOCUSED SEARCHING" },
  { text: "KEEP FOCUSED SEARCHING" },
  { text: "FOCUSED LEARNING" },
  { text: "KEEP FOCUSED LEARNING" },
  { text: "FOCUSED CODING" },
  { text: "KEEP FOCUSED CODING" },
  { text: "FOCUSED READING" },
  { text: "KEEP FOCUSED READING" },
  { text: "FOCUSED REASONING" },
  { text: "KEEP FOCUSED REASONING" },
  { text: "FOCUSED QUESTIONING" },
  { text: "KEEP FOCUSED QUESTIONING" },
  { text: "FOCUSED SOLVING" },
  { text: "KEEP FOCUSED SOLVING" },
  { text: "READY THINKING" },
  { text: "KEEP READY THINKING" },
  { text: "READY TEAMWORK" },
  { text: "KEEP READY TEAMWORK" },
  { text: "READY LISTENING" },
  { text: "KEEP READY LISTENING" },
  { text: "READY SEARCHING" },
  { text: "KEEP READY SEARCHING" },
  { text: "READY LEARNING" },
  { text: "KEEP READY LEARNING" },
  { text: "READY CODING" },
  { text: "KEEP READY CODING" },
  { text: "READY READING" },
  { text: "KEEP READY READING" },
  { text: "READY REASONING" },
  { text: "KEEP READY REASONING" },
  { text: "READY QUESTIONING" },
  { text: "KEEP READY QUESTIONING" },
  { text: "READY SOLVING" },
  { text: "KEEP READY SOLVING" },
  { text: "CAREFUL THINKING" },
  { text: "KEEP CAREFUL THINKING" },
  { text: "CAREFUL TEAMWORK" },
  { text: "KEEP CAREFUL TEAMWORK" },
  { text: "CAREFUL LISTENING" },
  { text: "KEEP CAREFUL LISTENING" },
  { text: "CAREFUL SEARCHING" },
  { text: "KEEP CAREFUL SEARCHING" },
  { text: "CAREFUL LEARNING" },
  { text: "KEEP CAREFUL LEARNING" },
  { text: "CAREFUL CODING" },
  { text: "KEEP CAREFUL CODING" },
  { text: "CAREFUL READING" },
  { text: "KEEP CAREFUL READING" },
  { text: "CAREFUL REASONING" },
  { text: "KEEP CAREFUL REASONING" },
  { text: "CAREFUL QUESTIONING" },
  { text: "KEEP CAREFUL QUESTIONING" },
  { text: "CAREFUL SOLVING" },
  { text: "KEEP CAREFUL SOLVING" },
  { text: "CREATIVE THINKING" },
  { text: "KEEP CREATIVE THINKING" },
  { text: "CREATIVE TEAMWORK" },
  { text: "KEEP CREATIVE TEAMWORK" },
  { text: "CREATIVE LISTENING" },
  { text: "KEEP CREATIVE LISTENING" },
  { text: "CREATIVE SEARCHING" },
  { text: "KEEP CREATIVE SEARCHING" },
  { text: "CREATIVE LEARNING" },
  { text: "KEEP CREATIVE LEARNING" },
  { text: "CREATIVE CODING" },
  { text: "KEEP CREATIVE CODING" },
  { text: "CREATIVE READING" },
  { text: "KEEP CREATIVE READING" },
  { text: "CREATIVE REASONING" },
  { text: "KEEP CREATIVE REASONING" },
  { text: "CREATIVE QUESTIONING" },
  { text: "KEEP CREATIVE QUESTIONING" },
  { text: "CREATIVE SOLVING" },
  { text: "KEEP CREATIVE SOLVING" },
  { text: "ACTIVE THINKING" },
  { text: "KEEP ACTIVE THINKING" },
  { text: "ACTIVE TEAMWORK" },
  { text: "KEEP ACTIVE TEAMWORK" },
  { text: "ACTIVE LISTENING" },
  { text: "KEEP ACTIVE LISTENING" },
  { text: "ACTIVE SEARCHING" },
  { text: "KEEP ACTIVE SEARCHING" },
  { text: "ACTIVE LEARNING" },
  { text: "KEEP ACTIVE LEARNING" },
  { text: "ACTIVE CODING" },
  { text: "KEEP ACTIVE CODING" },
  { text: "ACTIVE READING" },
  { text: "KEEP ACTIVE READING" },
  { text: "ACTIVE REASONING" },
  { text: "KEEP ACTIVE REASONING" },
  { text: "ACTIVE QUESTIONING" },
  { text: "KEEP ACTIVE QUESTIONING" },
  { text: "ACTIVE SOLVING" },
  { text: "KEEP ACTIVE SOLVING" },
  { text: "FIND THE SIGNAL" },
  { text: "FIND THE CODE" },
  { text: "FIND THE EVIDENCE" },
  { text: "FIND THE MESSAGE" },
  { text: "FIND THE TRAIL" },
  { text: "FIND THE DETAIL" },
  { text: "FIND THE SOURCE" },
  { text: "FIND THE QUESTION" },
  { text: "FIND THE REASON" },
  { text: "FIND THE RESULT" },
  { text: "FIND THE NEXT STEP" },
  { text: "CHECK THE SIGNAL" },
  { text: "CHECK THE PATTERN" },
  { text: "CHECK THE ANSWER" },
  { text: "CHECK THE EVIDENCE" },
  { text: "CHECK THE MESSAGE" },
  { text: "CHECK THE TRAIL" },
  { text: "CHECK THE KEY" },
  { text: "CHECK THE DETAIL" },
  { text: "CHECK THE SOURCE" },
  { text: "CHECK THE QUESTION" },
  { text: "CHECK THE REASON" },
  { text: "CHECK THE RESULT" },
  { text: "CHECK THE NEXT STEP" },
  { text: "FOLLOW THE CLUE" },
  { text: "FOLLOW THE CODE" },
  { text: "FOLLOW THE PATTERN" },
  { text: "FOLLOW THE ANSWER" },
  { text: "FOLLOW THE EVIDENCE" },
  { text: "FOLLOW THE MESSAGE" },
  { text: "FOLLOW THE KEY" },
  { text: "FOLLOW THE DETAIL" },
  { text: "FOLLOW THE SOURCE" },
  { text: "FOLLOW THE QUESTION" },
  { text: "FOLLOW THE REASON" },
  { text: "FOLLOW THE RESULT" },
  { text: "FOLLOW THE NEXT STEP" },
  { text: "WATCH THE CLUE" },
  { text: "WATCH THE CODE" },
  { text: "WATCH THE PATTERN" },
  { text: "WATCH THE ANSWER" },
  { text: "WATCH THE EVIDENCE" },
  { text: "WATCH THE MESSAGE" },
  { text: "WATCH THE TRAIL" },
  { text: "WATCH THE KEY" },
  { text: "WATCH THE DETAIL" },
  { text: "WATCH THE SOURCE" },
  { text: "WATCH THE QUESTION" },
  { text: "WATCH THE REASON" },
  { text: "WATCH THE RESULT" },
  { text: "WATCH THE NEXT STEP" },
  { text: "READ THE CLUE" },
  { text: "READ THE SIGNAL" },
  { text: "READ THE CODE" },
  { text: "READ THE PATTERN" },
  { text: "READ THE ANSWER" },
  { text: "READ THE EVIDENCE" },
  { text: "READ THE MESSAGE" },
  { text: "READ THE TRAIL" },
  { text: "READ THE KEY" },
  { text: "READ THE DETAIL" },
  { text: "READ THE SOURCE" },
  { text: "READ THE QUESTION" },
  { text: "READ THE REASON" },
  { text: "READ THE RESULT" },
  { text: "READ THE NEXT STEP" },
  { text: "LISTEN TO THE CLUE" },
  { text: "LISTEN TO THE SIGNAL" },
  { text: "LISTEN TO THE CODE" },
  { text: "LISTEN TO THE PATTERN" },
  { text: "LISTEN TO THE ANSWER" },
  { text: "LISTEN TO THE EVIDENCE" },
  { text: "LISTEN TO THE MESSAGE" },
  { text: "LISTEN TO THE TRAIL" },
  { text: "LISTEN TO THE KEY" },
  { text: "LISTEN TO THE DETAIL" },
  { text: "LISTEN TO THE SOURCE" },
  { text: "LISTEN TO THE QUESTION" },
  { text: "LISTEN TO THE REASON" },
  { text: "LISTEN TO THE RESULT" },
  { text: "LISTEN TO THE NEXT STEP" },
  { text: "SEARCH FOR THE CLUE" },
  { text: "SEARCH FOR THE SIGNAL" },
  { text: "SEARCH FOR THE CODE" },
  { text: "SEARCH FOR THE PATTERN" },
  { text: "SEARCH FOR THE ANSWER" },
  { text: "SEARCH FOR THE EVIDENCE" },
  { text: "SEARCH FOR THE MESSAGE" },
  { text: "SEARCH FOR THE TRAIL" },
  { text: "SEARCH FOR THE KEY" },
  { text: "SEARCH FOR THE DETAIL" },
  { text: "SEARCH FOR THE SOURCE" },
  { text: "SEARCH FOR THE QUESTION" },
  { text: "SEARCH FOR THE REASON" },
  { text: "SEARCH FOR THE RESULT" },
  { text: "SEARCH FOR THE NEXT STEP" },
  { text: "LOOK FOR THE CLUE" },
  { text: "LOOK FOR THE SIGNAL" },
  { text: "LOOK FOR THE CODE" },
  { text: "LOOK FOR THE PATTERN" },
  { text: "LOOK FOR THE ANSWER" },
  { text: "LOOK FOR THE EVIDENCE" },
  { text: "LOOK FOR THE MESSAGE" },
  { text: "LOOK FOR THE TRAIL" },
  { text: "LOOK FOR THE KEY" },
  { text: "LOOK FOR THE DETAIL" },
  { text: "LOOK FOR THE SOURCE" },
  { text: "LOOK FOR THE QUESTION" },
  { text: "LOOK FOR THE RESULT" },
  { text: "LOOK FOR THE NEXT STEP" },
  { text: "THINK ABOUT THE CLUE" },
  { text: "THINK ABOUT THE SIGNAL" },
  { text: "THINK ABOUT THE CODE" },
  { text: "THINK ABOUT THE PATTERN" },
  { text: "THINK ABOUT THE ANSWER" },
  { text: "THINK ABOUT THE EVIDENCE" },
  { text: "THINK ABOUT THE MESSAGE" },
  { text: "THINK ABOUT THE TRAIL" },
  { text: "THINK ABOUT THE KEY" },
  { text: "THINK ABOUT THE DETAIL" },
  { text: "THINK ABOUT THE SOURCE" },
  { text: "THINK ABOUT THE QUESTION" },
  { text: "THINK ABOUT THE REASON" },
  { text: "THINK ABOUT THE RESULT" },
  { text: "THINK ABOUT THE NEXT STEP" },
  { text: "ASK ABOUT THE CLUE" },
  { text: "ASK ABOUT THE SIGNAL" },
  { text: "ASK ABOUT THE CODE" },
  { text: "ASK ABOUT THE PATTERN" },
  { text: "ASK ABOUT THE ANSWER" },
  { text: "ASK ABOUT THE EVIDENCE" },
  { text: "ASK ABOUT THE MESSAGE" },
  { text: "ASK ABOUT THE TRAIL" },
  { text: "ASK ABOUT THE KEY" },
  { text: "ASK ABOUT THE DETAIL" },
  { text: "ASK ABOUT THE SOURCE" },
  { text: "ASK ABOUT THE QUESTION" },
  { text: "ASK ABOUT THE REASON" },
  { text: "ASK ABOUT THE RESULT" },
  { text: "ASK ABOUT THE NEXT STEP" },
  { text: "LEARN FROM THE CLUE" },
  { text: "LEARN FROM THE SIGNAL" },
  { text: "LEARN FROM THE CODE" },
  { text: "LEARN FROM THE PATTERN" },
  { text: "LEARN FROM THE ANSWER" },
  { text: "LEARN FROM THE EVIDENCE" },
  { text: "LEARN FROM THE MESSAGE" },
  { text: "LEARN FROM THE TRAIL" },
  { text: "LEARN FROM THE KEY" },
  { text: "LEARN FROM THE DETAIL" },
  { text: "LEARN FROM THE SOURCE" },
  { text: "LEARN FROM THE QUESTION" },
  { text: "LEARN FROM THE REASON" },
  { text: "LEARN FROM THE RESULT" },
  { text: "LEARN FROM THE NEXT STEP" },
  { text: "BUILD ON THE CLUE" },
  { text: "BUILD ON THE SIGNAL" },
  { text: "BUILD ON THE CODE" },
  { text: "BUILD ON THE PATTERN" },
  { text: "BUILD ON THE ANSWER" },
  { text: "BUILD ON THE EVIDENCE" },
  { text: "BUILD ON THE MESSAGE" },
  { text: "BUILD ON THE TRAIL" },
  { text: "BUILD ON THE KEY" },
  { text: "BUILD ON THE DETAIL" },
  { text: "BUILD ON THE SOURCE" },
  { text: "BUILD ON THE QUESTION" },
  { text: "BUILD ON THE REASON" },
  { text: "BUILD ON THE RESULT" },
  { text: "BUILD ON THE NEXT STEP" },
  { text: "THE CLUE LEADS HERE" },
  { text: "THE CLUE LEADS THERE" },
  { text: "THE SIGNAL LEADS ON" },
  { text: "THE ANSWER NEEDS PROOF" },
  { text: "THE ANSWER NEEDS EVIDENCE" },
  { text: "THE CLUE NEEDS CARE" },
  { text: "THE CODE NEEDS PATIENCE" },
  { text: "THE GAME NEEDS TEAMWORK" },
  { text: "THE PUZZLE NEEDS THINKING" },
  { text: "GOOD QUESTIONS FIND ANSWERS" },
  { text: "GOOD TEAMS LISTEN" },
  { text: "GOOD TEAMS THINK" },
  { text: "GOOD TEAMS CHECK" },
  { text: "SMART TEAMS SHARE" },
  { text: "SMART TEAMS ASK" },
  { text: "CAREFUL THINKING WINS" },
  { text: "CAREFUL READING HELPS" },
  { text: "CLEAR THINKING HELPS" },
  { text: "STRONG EVIDENCE MATTERS" },
  { text: "EVERY DETAIL HELPS" },
  { text: "EVERY CLUE HELPS" },
  { text: "EVERY TRY TEACHES" },
  { text: "MISTAKES CAN TEACH" },
  { text: "QUESTIONS LEAD TO ANSWERS" },
  { text: "CLUES LEAD TO ANSWERS" },
  { text: "EVIDENCE LEADS TO ANSWERS" },
  { text: "PATTERNS REVEAL CLUES" },
  { text: "LISTEN FOR THE DOT" },
  { text: "LISTEN FOR THE DASH" },
  { text: "COUNT THE SIGNALS" },
  { text: "COUNT THE LETTERS" },
  { text: "COUNT THE WORDS" },
  { text: "SPOT THE PATTERN" },
  { text: "SPOT THE CLUE" },
  { text: "SPOT THE CHANGE" },
  { text: "SPOT THE ERROR" },
  { text: "CHECK EACH LETTER" },
  { text: "CHECK EACH WORD" },
  { text: "CHECK EACH CLUE" },
  { text: "TRY A NEW IDEA" },
  { text: "TRY A NEW STRATEGY" },
  { text: "CLUE NUMBER 1" },
  { text: "CLUE NUMBER 2" },
  { text: "CLUE NUMBER 3" },
  { text: "CLUE NUMBER 4" },
  { text: "CLUE NUMBER 5" },
  { text: "CLUE NUMBER 6" },
  { text: "CLUE NUMBER 7" },
  { text: "CLUE NUMBER 8" },
  { text: "CLUE NUMBER 9" },
  { text: "CLUE NUMBER 10" },
  { text: "CLUE NUMBER 11" }
];

const MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----."
};

const screens = {
  home: document.getElementById("homeScreen"),
  signalMenu: document.getElementById("signalMenu"),
  game: document.getElementById("gameScreen"),
  help: document.getElementById("helpScreen")
};

const homeBtn = document.getElementById("homeBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const subtitle = document.getElementById("subtitle");
const modeLabel = document.getElementById("modeLabel");
const messageNumber = document.getElementById("messageNumber");
const morseDisplay = document.getElementById("morseDisplay");
const answerBox = document.getElementById("answerBox");
const answerText = document.getElementById("answerText");
const answerMorse = document.getElementById("answerMorse");
const answerMorseSection = document.getElementById("answerMorseSection");
const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const signalArea = document.getElementById("signalArea");
const messageArea = document.getElementById("messageArea");
const signalInstruction = document.getElementById("signalInstruction");
const signalLight = document.getElementById("signalLight");
const lightStatus = document.getElementById("lightStatus");
const speedSelect = document.getElementById("speedSelect");
const volumeSlider = document.getElementById("volumeSlider");
const referenceBtn = document.getElementById("referenceBtn");
const referencePanel = document.getElementById("referencePanel");
const closeReferenceBtn = document.getElementById("closeReferenceBtn");

function toggleReference(show) {
  referencePanel.classList.toggle("hidden", !show);
  referenceBtn.textContent = show ? "HIDE MORSE CODE" : "SHOW MORSE CODE";
}
referenceBtn.addEventListener("click", () => toggleReference(referencePanel.classList.contains("hidden")));
closeReferenceBtn.addEventListener("click", () => toggleReference(false));

const lightPanel = document.getElementById("lightPanel");

let mode = "message";
let currentIndex = 0;
let answerShown = false;
let isPlaying = false;
let audioContext = null;
let shuffleBag = [];

// ------------------------------------------------------------
// MORSE ENCODING
// ------------------------------------------------------------

function encodeMorse(text) {
  return text
    .toUpperCase()
    .split(/\s+/)
    .map(word =>
      [...word]
        .map(char => MORSE[char] || "")
        .filter(Boolean)
        .join(" ")
    )
    .join(" / ");
}

// ------------------------------------------------------------
// RANDOM NO-REPEAT MESSAGE SYSTEM
// ------------------------------------------------------------

function refillShuffleBag() {
  shuffleBag = Array.from({ length: MESSAGES.length }, (_, i) => i);

  // Fisher-Yates shuffle
  for (let i = shuffleBag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleBag[i], shuffleBag[j]] = [shuffleBag[j], shuffleBag[i]];
  }
}

function getNextMessageIndex() {
  if (shuffleBag.length === 0) {
    refillShuffleBag();
  }

  return shuffleBag.pop();
}

// ------------------------------------------------------------
// SCREEN CONTROL
// ------------------------------------------------------------

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");

  homeBtn.classList.toggle("hidden", name === "home");

  subtitle.textContent =
    name === "home"
      ? "Decode the message. Beat the signal."
      : name === "help"
        ? "Quick Morse code reference."
        : "Decode the message. Beat the signal.";
}

// ------------------------------------------------------------
// START GAME
// ------------------------------------------------------------

function startGame(selectedMode) {
  mode = selectedMode;
  currentIndex = getNextMessageIndex();
  answerShown = false;
  renderGame();
  showScreen("game");
}

function renderGame() {
  stopSignal();
  toggleReference(false);

  const item = MESSAGES[currentIndex];
  const morse = encodeMorse(item.text);

  modeLabel.textContent =
    mode === "message"
      ? "MESSAGE MODE"
      : mode === "buzzer"
        ? "SIGNAL MODE • BUZZER"
        : "SIGNAL MODE • LIGHT";

  messageNumber.textContent =
    `MESSAGE ${currentIndex + 1} OF ${MESSAGES.length}`;

  morseDisplay.textContent = morse;
  answerText.textContent = item.text;
  answerMorse.textContent = morse;

  // In Signal Mode, the revealed answer contains BOTH the English
  // message and its Morse code. In Message Mode, only the English
  // answer is shown because the Morse is already visible above.
  answerMorseSection.classList.toggle("hidden", mode === "message");

  answerBox.classList.add("hidden");
  answerBtn.textContent = "SHOW ANSWER";
  answerShown = false;

  const isMessageMode = mode === "message";

  messageArea.classList.toggle("hidden", !isMessageMode);
  signalArea.classList.toggle("hidden", isMessageMode);
  playBtn.classList.toggle("hidden", isMessageMode);

  if (mode === "buzzer") {
    signalInstruction.textContent =
      "Press PLAY SIGNAL and decode what you hear.";
    lightPanel.style.display = "none";
    lightStatus.textContent = "BUZZER READY";
  }

  if (mode === "light") {
    signalInstruction.textContent =
      "Press PLAY SIGNAL and decode the blinking light.";
    lightPanel.style.display = "flex";
    lightStatus.textContent = "LIGHT READY";
  }
}

// ------------------------------------------------------------
// ANSWER
// ------------------------------------------------------------

function toggleAnswer() {
  answerShown = !answerShown;
  answerBox.classList.toggle("hidden", !answerShown);
  answerBtn.textContent = answerShown ? "HIDE ANSWER" : "SHOW ANSWER";
}

// ------------------------------------------------------------
// NEXT MESSAGE
// ------------------------------------------------------------

function nextMessage() {
  currentIndex = getNextMessageIndex();
  renderGame();
}

// ------------------------------------------------------------
// TIMING
// ------------------------------------------------------------

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getTiming() {
  return Number(speedSelect.value) * 1000;
}

// ------------------------------------------------------------
// SIGNAL CONTROL
// ------------------------------------------------------------

function stopSignal() {
  isPlaying = false;
  signalLight.classList.remove("on");
  playBtn.textContent = "▶ PLAY SIGNAL";

  if (mode === "light") {
    lightStatus.textContent = "LIGHT READY";
  } else if (mode === "buzzer") {
    lightStatus.textContent = "BUZZER READY";
  }
}

async function playSignal() {
  if (isPlaying) {
    stopSignal();
    return;
  }

  isPlaying = true;
  playBtn.textContent = "■ STOP SIGNAL";

  const text = MESSAGES[currentIndex].text;
  const unit = getTiming();

  if (mode === "buzzer") {
    await playBuzzer(text, unit);
  } else if (mode === "light") {
    await playLight(text, unit);
  }

  if (isPlaying) {
    isPlaying = false;
    playBtn.textContent = "▶ PLAY SIGNAL";
    lightStatus.textContent = "SIGNAL COMPLETE";
  }
}

// ------------------------------------------------------------
// BUZZER MODE
// ------------------------------------------------------------

async function playBuzzer(text, unit) {
  audioContext =
    audioContext ||
    new (window.AudioContext || window.webkitAudioContext)();

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  const words = text.toUpperCase().trim().split(/\\s+/);

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    if (!isPlaying) break;

    const word = words[wordIndex];

    for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
      if (!isPlaying) break;

      const code = MORSE[word[letterIndex]];
      if (!code) continue;

      for (let symbolIndex = 0; symbolIndex < code.length; symbolIndex++) {
        if (!isPlaying) break;

        const symbol = code[symbolIndex];
        const duration = symbol === "." ? unit : unit * 3;

        beep(duration);
        await sleep(duration);

        // 1 unit gap between dots/dashes within the same letter.
        if (symbolIndex < code.length - 1) {
          await sleep(unit);
        }
      }

      // 3 unit gap between letters.
      if (letterIndex < word.length - 1) {
        await sleep(unit * 3);
      }
    }

    // 7 unit gap between words.
    if (wordIndex < words.length - 1) {
      await sleep(unit * 7);
    }
  }
}

function beep(duration) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = 720;
  gain.gain.value = Number(volumeSlider.value);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);
}

// ------------------------------------------------------------
// LIGHT MODE
// ------------------------------------------------------------

async function playLight(text, unit) {
  lightStatus.textContent = "SIGNAL PLAYING";

  const words = text.toUpperCase().trim().split(/\\s+/);

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    if (!isPlaying) break;

    const word = words[wordIndex];

    for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
      if (!isPlaying) break;

      const code = MORSE[word[letterIndex]];
      if (!code) continue;

      for (let symbolIndex = 0; symbolIndex < code.length; symbolIndex++) {
        if (!isPlaying) break;

        const symbol = code[symbolIndex];
        const duration = symbol === "." ? unit : unit * 3;

        // The light stays ON for exactly the dot/dash duration.
        await flash(duration);

        // 1 unit OFF between dots/dashes in the same letter.
        if (symbolIndex < code.length - 1) {
          await sleep(unit);
        }
      }

      // 3 unit OFF gap between letters.
      if (letterIndex < word.length - 1) {
        await sleep(unit * 3);
      }
    }

    // 7 unit OFF gap between words.
    if (wordIndex < words.length - 1) {
      await sleep(unit * 7);
    }
  }

  signalLight.classList.remove("on");
}

async function flash(duration) {
  if (!isPlaying) return;

  signalLight.classList.add("on");
  await sleep(duration);
  signalLight.classList.remove("on");
}

// ------------------------------------------------------------
// MORSE REFERENCE
// ------------------------------------------------------------

function populateReference() {
  const container = document.getElementById("morseReference");

  Object.entries(MORSE).forEach(([letter, code]) => {
    const div = document.createElement("div");
    div.innerHTML = `<b>${letter}</b> ${code}`;
    container.appendChild(div);
  });
}

// ------------------------------------------------------------
// EVENTS
// ------------------------------------------------------------

document.getElementById("messageModeBtn").addEventListener("click", () => {
  startGame("message");
});

document.getElementById("signalModeBtn").addEventListener("click", () => {
  showScreen("signalMenu");
});

document.getElementById("buzzerModeBtn").addEventListener("click", () => {
  startGame("buzzer");
});

document.getElementById("lightModeBtn").addEventListener("click", () => {
  startGame("light");
});

answerBtn.addEventListener("click", toggleAnswer);
nextBtn.addEventListener("click", nextMessage);
playBtn.addEventListener("click", playSignal);

homeBtn.addEventListener("click", () => {
  stopSignal();
  showScreen("home");
});

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.log("Fullscreen unavailable.");
  }
});

document.getElementById("helpBtn").addEventListener("click", () => {
  showScreen("help");
});

// ------------------------------------------------------------
// START
// ------------------------------------------------------------

refillShuffleBag();
populateReference();
showScreen("home");
