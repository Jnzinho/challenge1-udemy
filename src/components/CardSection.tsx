import Card from "./Card";

const skills = [
  {
    backgroundColor: "#E5532F",
    name: "html",
    color: "white",
  },
  {
    backgroundColor: "#F7E02A",
    name: "javascript",
    color: "black",
  },
  {
    backgroundColor: "#387CC8",
    name: "typescript",
    color: "white",
  },
  {
    backgroundColor: "#5FD3F3",
    name: "react",
    color: "black",
  },
  {
    backgroundColor: "#36B7F0",
    name: "tailwind",
    color: "white",
  },
  {
    backgroundColor: "#FF485A",
    name: "tanstack",
    color: "white",
  },
];

export default function CardSection() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card
        text="I build websites that look good and work well for everyone"
        title="Jnzinho"
        pills={skills}
        location="Chapecó, Brazil"
        image="https://i.pinimg.com/736x/7a/38/84/7a38845d74e0097bcd1f2e394d1404a3.jpg"
      ></Card>
    </div>
  );
}
