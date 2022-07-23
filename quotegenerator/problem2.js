function generate(){
    let quotes = ["You have to dream before your dreams can come true.- A. P. J. Abdul Kalam",
    "As a leader, It is important to not just see your own success, but focus on the success of others. - Sundar Pichai",
    "If you want to do something, what does it matter where you are ranked? - Kalpana Chawla",
    "They cannot make history who forget history. - Dr Babasaheb Ambedkar",
    "Self-belief and hard work will always earn you success. - virat Kohali",
    "First they ignore you, then they laugh at you, then they fight you, then you win. - Mahatama Gandhi",
    "Facts are many, but the truth is one. - Rabindranath Tagore",
    "No legacy is so rich as honesty. - William Shakespeare",
    "If you want to shine like a sun, first burn like a sun. - A. P. J. Abdul Kalam",
    "Success is not a good teacher, failure makes you humble. - Shah Rukh Khan"];
     
    let txt = document.getElementById("text")
    let rndNum = Math.floor(Math.random() * quotes.length)
    txt.innerHTML = quotes[rndNum]
}    