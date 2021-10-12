import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>
        <cite>{anecdote}</cite>
      </p>
      <p>has {votes} votes</p>
    </>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));
  const [mostVoted, setMostVoted] = useState({ anecdote: 0, votes: 0 });
  const handleSetAnecdote = () => {
    let random;
    do {
      random = Math.floor(Math.random() * (6 - 0)) + 0;
    } while (random === selected);
    setSelected(random);
  };

  const handleSetVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;

    setVotes(newVotes);
    if (newVotes[selected] > mostVoted.votes) {
      const newMostVoted = {
        anecdote: selected,
        votes: newVotes[selected],
      };
      setMostVoted(newMostVoted);
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleSetVote}>vote</button>
      <button onClick={handleSetAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdote={anecdotes[mostVoted.anecdote]}
        votes={votes[mostVoted.anecdote]}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
