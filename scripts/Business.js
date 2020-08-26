import { useBusinesses } from "./BusinessProvider.js"

export const Business = (x) => {
    return `
    <section class="business">
            <h2 class="businessy__type">${x.companyName}</h2>
            <div class="business__location">
                <p>${x.addressFullStreet}</p>
                <p>${x.addressCity} ${x.addressStateCode} ${x.addressZipCode}</p>
            </div>
        </section>
    `
}

// let NewYorkArray = useBusinesses()
// export const NewYork = NewYorkArray.filter( obj => {
//     const contentTarget = document.querySelector(".business-container")
//     contentTarget.innerHTML = `<h1>New York Businesses</h1>`

//     if (obj.addressStateCode === "NY") {
        
//         contentTarget.innerHTML += `<article class="businessList--newYork">
//         ${Business(obj)}
//     </article>`
//     }
// });