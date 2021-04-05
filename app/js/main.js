document.addEventListener("DOMContentLoaded", () => {

    /*
    ---------------- Accordion ----------------
    */

    let accordionTriggers = document.querySelectorAll(".accordion-wrapper__item-trigger")

    accordionTriggers.forEach(accordion => {
        accordion.addEventListener("click", () => {
            let parent = accordion.parentElement

            // Logic if only one is visible at a time
            if (parent.classList.contains("active")) {

                parent.classList.remove("active")

            } else {

                // Exact same element as parent (selecting all of them to remove active class)
                let triggers = document.querySelectorAll(".accordion-wrapper__item")

                triggers.forEach((trigger) => {
                    trigger.classList.remove("active")
                })

                // Adding active to the one that was clicked
                parent.classList.add("active")
            }

            // Logic if many can be visible at a time
            // parent.classList.toggle("active")
        })
    })


    /*
    ---------------- Tabs ----------------
    */  

    let tabTriggers = document.querySelectorAll(".tabs-wrapper__triggers-el")

    tabTriggers.forEach(trigger => {

        trigger.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Reset
            document.querySelectorAll(".tabs-wrapper__triggers-el").forEach(el => {
                el.classList.remove("tabs-wrapper__triggers-active")
            })
            document.querySelectorAll(".tabs-wrapper__content-el").forEach(el => {
                el.classList.remove("tabs-wrapper__content-active")
            })

            // Set clicked element as active
            trigger.classList.add("tabs-wrapper__triggers-active")

            const id = e.target.getAttribute("href").replace("#", "")
            document.getElementById(id).classList.add("tabs-wrapper__content-active")

        })

    })
    document.querySelector(".tabs-wrapper__triggers-el").click()

})