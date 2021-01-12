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
    name: "complete proposal",
    id: "111",
    dateStart: "1.1.2021",
    dateEnd: "2.1.2021",
    status: " Closed",
    customerId: "c02",
    username: "virvetk",
  },
  {
    name: "deliver mockup",
    id: "222",
    dateStart: "5.1.2021",
    dateEnd: "14.1.2021",
    status: " Ongoing",
    customerId: "c03",
    username: "rekotk",
  },
  {
    name: "deliver final product",
    id: "333",
    dateStart: "9.1.2021",
    dateEnd: "19.1.2021",
    status: " Pending",
    customerId: "c01",
    username: "seppotk",
  },
];
export { users, customers, jobs };
