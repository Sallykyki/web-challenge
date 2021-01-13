const users = [
  { username: "virvetk", name: "Virve", password: "hellovirve" },
  { username: "rekotk", name: "Reko", password: "helloreko" },
  { username: "seppotk", name: "Seppo", password: "helloseppo" },
];

const customers = [
  { customerId: "c01", name: "Sebastian", location: "Helsinki" },
  { customerId: "c02", name: "Martin", location: "Espoo" },
  { customerId: "c03", name: "Heleena", location: "Helsinki" },
  { customerId: "c04", name: "Tapio", location: "Porvoo" },
  { customerId: "c05", name: "Tauno", location: "Oulu" },
];

const jobs = [
  {
    name: "Smart library project",
    id: "111",
    dateStart: "01.01.2021",
    dateEnd: "12.01.2021",
    status: "closed",
    customerId: "c02",
    username: "virvetk",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque dolor. Aenean in dolor",
    tasks: [
      {
        name: "complete proposal",
        dueDate: "02.01.2021",
      },
      {
        name: "deliver first mockup",
        dueDate: "05.01.2021",
      },
    ],
  },

  {
    name: "Flower and Sky project",
    id: "222",
    dateStart: "05.01.2021",
    dateEnd: "14.01.2021",
    status: "ongoing",
    customerId: "c03",
    username: "rekotk",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque dolor. Aenean in dolor",
    tasks: [
      {
        name: "complete proposal",
        dueDate: "02.01.2021",
      },
      {
        name: "deliver first mockup",
        dueDate: "05.01.2021",
      },
    ],
  },
  {
    name: "Delivery Food mobile app",
    id: "333",
    dateStart: "09.1.2021",
    dateEnd: "19.1.2021",
    status: "pending",
    customerId: "c01",
    username: "seppotk",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque dolor. Aenean in dolor",
    tasks: [
      {
        name: "complete proposal",
        dueDate: "02.01.2021",
      },
      {
        name: "deliver first mockup",
        dueDate: "05.01.2021",
      },
    ],
  },
  {
    name: "Love me love my dog project",
    id: "444",
    dateStart: "01.01.2021",
    dateEnd: "02.01.2021",
    status: "ongoing",
    customerId: "c04",
    username: "virvetk",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque dolor. Aenean in dolor",
    tasks: [
      {
        name: "complete proposal",
        dueDate: "02.01.2021",
      },
      {
        name: "deliver first mockup",
        dueDate: "05.01.2021",
      },
    ],
  },
  {
    name: "VR travel app",
    id: "345",
    dateStart: "01.01.2021",
    dateEnd: "21.1.2021",
    status: "pending",
    customerId: "c05",
    username: "virvetk",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque dolor. Aenean in dolor",
    tasks: [
      {
        name: "complete proposal",
        dueDate: "02.01.2021",
      },
      {
        name: "deliver first mockup",
        dueDate: "05.01.2021",
      },
    ],
  },
];
export { users, customers, jobs };
