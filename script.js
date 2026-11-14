 

        const form =
            document.getElementById("contact-form");


        form.addEventListener("submit", function(e) {

            e.preventDefault();


            const username =
                document.getElementById("username").value;


            const email =
                document.getElementById("email").value;


            if (username != "" && email != "") {

                document.getElementById("message").textContent =
                    "Thank you for visiting, " +
                    username +
                    "! We will contact you at " +
                    email +
                    ".";

            }

        });




        const rows =
            document.querySelectorAll(".product-row");


        rows.forEach(function(row) {


            row.addEventListener("mouseover", function() {

                row.style.backgroundColor =
                    "#f8dce5";

            });


            row.addEventListener("mouseout", function() {

                row.style.backgroundColor =
                    "white";

            });

        });





        const themeButton =
            document.getElementById("theme-button");


        themeButton.addEventListener("click", function() {


            if (document.body.style.backgroundColor == "black") {


                document.body.style.backgroundColor =
                    "#fff5f7";

                document.body.style.color =
                    "black";


                document.querySelectorAll("section")
                    .forEach(function(section) {

                        section.style.backgroundColor =
                            "white";

                    });


            }

            else {


                document.body.style.backgroundColor =
                    "black";

                document.body.style.color =
                    "white";


                document.querySelectorAll("section")
                    .forEach(function(section) {

                        section.style.backgroundColor =
                            "#222";

                    });

            }

        });




        const checkboxes =
            document.querySelectorAll(".product-check");


        checkboxes.forEach(function(box) {


            box.addEventListener("change", function() {


                let total = 0;


                checkboxes.forEach(function(item) {


                    if (item.checked) {

                        total =
                            total + parseInt(item.value);

                    }

                });


                document.getElementById("total").textContent =
                    "Total: Rs. " + total;

            });

        });




        document.getElementById("birth-year")
            .addEventListener("change", function() {


                const birthYear =
                    parseInt(this.value);


                const age =
                    2026 - birthYear;


                if (age <= 25 || age >= 60) {


                    document.getElementById("discount-message")
                        .textContent =
                        "You qualify for a special discount.";

                }

                else {


                    document.getElementById("discount-message")
                        .textContent =
                        "You do not qualify for the special discount.";

                }

            });




        const readMore =
            document.getElementById("read-more");


        const extraText =
            document.getElementById("extra-text");


        readMore.addEventListener("click", function() {


            if (extraText.style.display == "none") {


                extraText.style.display =
                    "block";


                readMore.textContent =
                    "Read Less";

            }

            else {


                extraText.style.display =
                    "none";


                readMore.textContent =
                    "Read More";

            }

        });




        const filterButtons =
            document.querySelectorAll(".filter-button");


        filterButtons.forEach(function(button) {


            button.addEventListener("click", function() {


                const category =
                    button.getAttribute("data-category");


                rows.forEach(function(row) {


                    if (
                        category == "all" ||
                        row.getAttribute("data-category") == category
                    ) {

                        row.style.display = "";

                    }

                    else {

                        row.style.display = "none";

                    }

                });

            });

        });





        const currentHour =
            new Date().getHours();


        const status =
            document.getElementById("status");


        if (currentHour >= 8 && currentHour < 20) {


            status.textContent =
                "We are Open!";


            status.style.color =
                "green";

        }

        else {


            status.textContent =
                "Closed - Open at 8 AM";


            status.style.color =
                "red";

        }


 

        const notes =
            document.getElementById("special-notes");


        const counter =
            document.getElementById("counter");


        notes.addEventListener("input", function() {


            const remaining =
                100 - notes.value.length;


            counter.textContent =
                remaining +
                " characters remaining";

        });


   
