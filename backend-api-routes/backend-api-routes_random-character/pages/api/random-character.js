import Chance from "chance";

export default function handler(req, res) {
    const chance = new Chance()
    // example character object with random values
    const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    // ... some more keys here ...
  };
    res.status(200).json(character)
}