import { Worker } from "../types/Worker";

export const getVisibleWorkers = (
  workers: Worker[],
  query: string
): Worker[] => {
  const lowerQuery = query.toLocaleLowerCase();

  if (!query) {
    return workers;
  }

  const visibleWorkers = workers.filter((worker) => {
    const lowerName = worker.name.toLocaleLowerCase();
    const lowerCompany = worker.company.toLocaleLowerCase();
    const lowerCountry = worker.country.toLocaleLowerCase();
    const lowerEmail = worker.email.toLocaleLowerCase();

    return (
      lowerName.includes(lowerQuery) ||
      lowerCompany.includes(lowerQuery) ||
      lowerCountry.includes(lowerQuery) ||
      lowerEmail.includes(lowerQuery) ||
      worker.phone.includes(lowerQuery)
    );
  });

  return visibleWorkers;
};
