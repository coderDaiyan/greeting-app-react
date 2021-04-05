import "./App.css";

function App() {
  const hour = new Date().getHours();
  let hourText = "";
  if (hour >= 0) {
    hourText = "Good Morning";
    if (hour >= 12) {
      hourText = "Good AfterNoon";
      if (hour >= 19) {
        hourText = "Good Night";
      }
    }
  }
  return (
    <>
      <div className="parent">
        <div className="greetings">
          <h1>
            <span className="hello_text"> Hello Sir,</span>{" "}
            <span className="greet_text">{hourText}</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
