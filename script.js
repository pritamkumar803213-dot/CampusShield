// ==========================================
// CAMPUSSHIELD
// Smart Campus Safety & Incident Management
// ==========================================


// Wait until the webpage is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("CampusShield System Loaded Successfully");


    // ------------------------------------------
    // EMERGENCY BUTTON
    // ------------------------------------------

    const emergencyButton = document.querySelector(".emergency-btn");

    if (emergencyButton) {

        emergencyButton.addEventListener("click", function () {

            const confirmEmergency = confirm(
                "🚨 Emergency Mode\n\nAre you sure you want to continue to the Emergency section?"
            );

            if (!confirmEmergency) {
                return;
            }

        });

    }


    // ------------------------------------------
    // INCIDENT REPORT BUTTON
    // ------------------------------------------

    const reportButton = document.querySelector(".primary-btn");

    if (reportButton) {

        reportButton.addEventListener("click", function () {

            console.log("Opening Incident Reporting System...");

        });

    }


    // ------------------------------------------
    // SAFETY STATUS
    // ------------------------------------------

    const status = document.querySelector(".status");

    if (status) {

        console.log("Campus Safety System: ONLINE");

    }


});