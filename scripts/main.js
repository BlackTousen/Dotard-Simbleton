import { useBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";
import { BusinessList, BusinessListFilter } from "./BusinessList.js";

let newYork = useBusinesses()
newYork = newYork.filter(obj => {
    if (obj.addressStateCode === "NY") { return obj }
});
console.log(newYork)
BusinessList()

BusinessListFilter(newYork)