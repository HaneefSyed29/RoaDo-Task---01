interface User {
  id: string;
  logged_in: Date;
  logged_out: Date | null;
  lastSeenAt: Date;
}

function countActiveUsers(users: User[], currentMonth: Date): number {
  let activeUsers = 0;
  for (const user of users) {
      if (
          (user.logged_in.getMonth() === currentMonth.getMonth() && 
          user.logged_in.getFullYear() === currentMonth.getFullYear()) &&
          (user.logged_out === null || 
          (user.logged_out.getMonth() === currentMonth.getMonth() &&
          user.logged_out.getFullYear() === currentMonth.getFullYear())) ||
          (user.lastSeenAt.getMonth() === currentMonth.getMonth() &&
          user.lastSeenAt.getFullYear() === currentMonth.getFullYear())
      ) {
          activeUsers++;
      }
  }
  return activeUsers;
}

function countLoggedInUsers(users: User[], currentMonth: Date): number {
  let loggedInUsers = 0;
  for (const user of users) {
      if (
          user.logged_in.getMonth() === currentMonth.getMonth() &&
          user.logged_in.getFullYear() === currentMonth.getFullYear()
      ) {
          loggedInUsers++;
      }
  }
  return loggedInUsers;
}

// Example usage:
const users: User[] = [
  { id: "1", logged_in: new Date("2024-03-01"), logged_out: new Date("2024-03-15"), lastSeenAt: new Date("2024-03-20") },
  { id: "2", logged_in: new Date("2024-03-10"), logged_out: null, lastSeenAt: new Date("2024-03-25") },
  { id: "3", logged_in: new Date("2024-02-28"), logged_out: new Date("2024-03-05"), lastSeenAt: new Date("2024-03-01") },
  // Add more users as needed
];

const currentMonth = new Date(); // Assuming current month and year
const activeUsersCount = countActiveUsers(users, currentMonth);
const loggedInUsersCount = countLoggedInUsers(users, currentMonth);

console.log("Active users this month:", activeUsersCount);
console.log("Logged in users this month:", loggedInUsersCount);
