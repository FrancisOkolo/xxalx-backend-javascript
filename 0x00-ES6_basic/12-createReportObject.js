export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // spread operator unifies all objects into 1.
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length; // Object.keys makes employeesList iterable.
    },
  };
}
