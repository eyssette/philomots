import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>Philomots</i> est une application faite par <a href="https://eyssette.github.io/">Cédric Eyssette</a>, professeur de philosophie, à partir du jeu opensource <a href="https://github.com/lynn/hello-wordl">hello wordl</a> un remake du jeu{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        par <a href="https://twitter.com/powerlanguish">powerlanguage</a>
      </p>
      <p>
        Vous avez {maxGuesses} essais pour deviner un mot.
        <br />
        Après chaque essai, vous aurez un feedback du type <i>Mastermind</i>
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "w" },
          { clue: Clue.Absent, letter: "o" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Elsewhere, letter: "d" },
        ]}
      />
      <p>
        <b>W</b> et <b>O</b> ne sont pas présents dans le mot à deviner.
      </p>
      <p>
        <b className={"green-bg"}>R</b> est correct! La troisième lettre est {" "}
        <b className={"green-bg"}>R</b>
        .<br />
        <strong>(Il y a peut-être un deuxième R dans le mot)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>D</b> se trouve <em>ailleurs</em> dans le mot à deviner.
        <br />
        <strong>(Peut-être plus qu'une fois… 🤔)</strong>
      </p>
      <hr />
      <p>
        Passons à <b>D</b> dans notre essai suivant :
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Absent, letter: "k" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/lynn/hello-wordl/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/chordbug">@chordbug</a>.
      </p>
      <p>
        This game will be free and ad-free forever,
        <br />
        but you can <a href="https://ko-fi.com/chordbug">buy a coffee</a> if
        you'd like.
      </p>
    </div>
  );
}
