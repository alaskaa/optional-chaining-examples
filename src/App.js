import React from "react";
import "./styles.css";

export default function App() {
  const person = {
    name: "Leela",
    pet: {
      name: "Nibbler"
    },
    secondPet: {
      name: "Schnuckums"
    },
    someGetPetNameMethod: function() {
      return this.pet?.name;
    }
  };

  const personTwo = undefined;

  const goldfishNames = ["Nemo", "Ada", "Cubert", "Cuthbert", "Gillian"];

  return (
    <div className="App">
      <h1>
        Hello JS Guild{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h1>
      <h2>Let's explore the power of Optional Chaining!</h2>

      <p>
        Let's try and print the name of our person's first pet to the screen.
      </p>
      <p>Current pet's name is: {person.pet.name}</p>

      <p>
        Let's assume that our person is thinking about getting another pet, too.
        However, they do not own it yet and there is a strong possibility that
        if we want to get the name of this secondPet, that it will be{" "}
        <code>undefined</code>.
      </p>
      <p>
        In the past, we had to manually check each time that the property on the
        object we're trying to access from exists, so we wouldn't get a hefty
        error thrown: <code>TypeError person.secondPet is undefined</code>
      </p>
      <p>
        <code>
          const secondPet = person.secondPet ? person.secondPet.name : undefined
        </code>
      </p>
      <p>
        Current name: {person.secondPet ? person.secondPet.name : "undefined"}
      </p>
      <p>
        This get's repetive really quickly. What if there was a quicker way?
      </p>
      <h2>Make way for Optional Chaining!</h2>
      <p>
        Optional chaining allows us to skip the step of explicitly checking
        whether secondPet exists before trying to access its name, therefore
        avoiding the dreaded "property of object is undefined" error.
      </p>
      <p>
        <code>const nameOfSecondPet = person.secondPet?.name</code>
      </p>
      <p>Name of second pet: {person.secondPet?.name}</p>
      <h4>!Important:</h4>
      <p>
        Optionally chained expressions short-circuit and return{" "}
        <code>undefined</code> if they don't exist rather than throwing an
        error.
      </p>
      {/* <p>Let's compare with: {person.secondPet.name}</p> */}
      <h3>But it gets better - we can chain optional chaining!</h3>
      <p>If we are unsure, if personTwo is non-null or not undefined:</p>
      <p>
        <code>personTwo?.secondPet?.name</code>
      </p>
      <p>Person 2's second pet's name: {personTwo?.secondPet?.name}</p>
      <p>
        This works if your object is either null or undefined but not
        undeclared.
      </p>
      <h3>But wait there's more!</h3>
      <h3>You can use optional chaining on Arrays and function calls</h3>
      <p>
        Let's get the third goldfish from our goldfishNames array:{" "}
        {goldfishNames?.[2]}
      </p>
      <p>
        We can check that the array has been declared by: goldfishNames?.[2] and
        get the third element.
      </p>
      <h3>
        If you thought that was all - Optional chaining can be used to check for
        functions too!
      </h3>
      <p>
        Imagine, we expected that there was a method for getting Leela's pet
        names!
      </p>
      <p>
        <code>person.someGetPetNameMethod?.()</code>
      </p>
      <p>Result would be: {person.someGetPetNameMethod?.()}</p>
    </div>
  );
}
