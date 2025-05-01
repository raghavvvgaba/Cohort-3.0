// ek baar re-check krlena isse
// Difference between types and interfaces
// types can also help you implement unions and intersections
// Unions -> implemented by | , accepts any one of the types listed
// Intersection -> implemented by & , requires all types combined
type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;   //union
// use or | for intersection

let e: Employee = {
  name: "Raghav",
  startDate: "01-02-2004"
};
let m: Manager = {
  name: "Raghav",
  department: "Software"
};

let t: TeamLead = {
  name: "Harkirat",
  startDate: "01-02-2004",
  department: "Electricity"
}
