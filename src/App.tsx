import Card from "./components/Card";

function App() {
  const skills = [
    {
      backgroundColor: "red",
      name: "hmtl",
    },
    {
      backgroundColor: "yellow",
      name: "javascript",
    },
    {
      backgroundColor: "blue",
      name: "typescript",
    },
  ];

  return (
    <>
      <Card
        text="Front end developer with passion for creating beautiful and accesible experiences"
        title="Jubiscreudo dev"
        pills={skills}
        image="https://i.pinimg.com/736x/7a/38/84/7a38845d74e0097bcd1f2e394d1404a3.jpg"
      ></Card>
    </>
  );
}

export default App;
