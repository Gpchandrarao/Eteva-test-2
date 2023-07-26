let list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// get a unique set of users from  List1 not in List2
let getUserFromList1NotInList2 = list1.filter(user => !list2.includes(user));
console.log(getUserFromList1NotInList2)


// get a unique set of  users from List2 not in List1

let getUserFromList2NotInList1 = list2.filter(user => !list1.includes(user));
console.log(getUserFromList2NotInList1)

// get commonUsers in both list1 and list2

let commonUsers = list1.filter(user => list2.includes(user))
console.log(commonUsers)