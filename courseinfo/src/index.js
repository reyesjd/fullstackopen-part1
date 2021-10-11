import ReactDOM from "react-dom";

const Header = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = (props) => {
  const { part, exercises } = props;
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
