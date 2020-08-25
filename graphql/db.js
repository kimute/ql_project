export const people = [
  {
    id: "0",
    name: "kim",
    age: 18,
    gender: "male",
  },
  {
    id: "1",
    name: "dole",
    age: 20,
    gender: "female",
  },
  {
    id: "2",
    name: "jk",
    age: 19,
    gender: "male",
  },
  {
    id: "3",
    name: "kay",
    age: 15,
    gender: "male",
  },
  {
    id: "4",
    name: "risa",
    age: 38,
    gender: "female",
  },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => person.id === String(id));
  return filterPeople[0];
};
