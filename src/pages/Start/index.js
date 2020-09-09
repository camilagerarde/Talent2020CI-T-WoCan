import React from "react";
import CardArea from "../../components/CardArea";
import FirstSteps from "../../components/ButtonFirstSteps";
import "../../assets/scss/Main.scss";

const Start = () => {
  return (
    <main className="main">
      <section className="title">
        <h1>primeiros passos</h1>
        <FirstSteps
          children="lógica de programação"
          onClick={() => console.log("foi")}
        />
        <FirstSteps children="algoritmos" />
        <FirstSteps children="Back-end ou Front-end?" />
      </section>
      <CardArea
        area="front"
        onClick={() => console.log("foi")}
        title="front-end"
      />{" "}
      <CardArea
        area="back"
        onClick={() => console.log("foi")}
        title="Back-end"
      />{" "}
      <CardArea
        area="devops"
        onClick={() => console.log("foi")}
        title="DevOps"
      />
    </main>
  );
};

export default Start;
