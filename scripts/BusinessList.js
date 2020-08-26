import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".business-container")


export const BusinessList = () => {
    const bList = useBusinesses()
    contentTarget.innerHTML = `<h1>Active Businesses</h1>`
    bList.forEach (
        (obj) => { contentTarget.innerHTML += Business(obj) }
    )
}
export const BusinessListFilter = (x) => {
    
    contentTarget.innerHTML = `<h1>Filtered Businesses</h1>`
    x.forEach (
        (obj) => { contentTarget.innerHTML += Business(obj) }
    )
}