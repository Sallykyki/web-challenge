import { users, customers, jobs } from "./data";

const getUsers = () => {
  return users;
};

const getCustomers = () => {
  return customers;
};

const getJobs = (username?: string) => {
  const userJobs = username
    ? jobs.filter((job) => job.username === username)
    : jobs;

  return userJobs.map((job) => {
    const customer = customers.find(
      (customer) => customer.customerId === job.customerId
    );

    return {
      ...job,
      customerName: customer?.name,
      customerLocation: customer?.location,
    };
  });
};

export { getUsers, getCustomers, getJobs };
