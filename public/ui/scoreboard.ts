interface Person {
  initials : string,
  time : {
    milliseconds: number,
    minutes: number,
    seconds: number
  }
}

module.exports = {
  renderScoreboard(people: Array<any>) {
    let scoreboard = document.querySelector('.scoreboard');

    for (let i = 2; i > -1; i--) {
      let person : Person = people[i];

      let newTDname = document.createElement('td');
      newTDname.innerHTML = `${person.initials}`;

      let newTDtime = document.createElement('td');
      newTDtime.innerHTML = `${person.time.minutes}:${person.time.seconds}:${person.time.milliseconds}`;

      let newTR = document.createElement('tr');

      newTR.appendChild(newTDname);
      newTR.appendChild(newTDtime);

      scoreboard.appendChild(newTR);
    }
  }
}
