// $(document).ready(function () {
//     $("#order").submit(function (event) {
//         event.preventDefault();

//         var firstName = $("#firstName").val();
//         var lastName = $("#lastName").val();
//         var whatsappNumber = $("#whatsappNumber").val();
//         var sheinLink = $("#sheinLink").val();

//         console.log(firstName + lastName + whatsappNumber + sheinLink);

//         // Validation checks
//         var isValid = true;
//         var errorMessage = "";

//         // Check for empty fields
//         if (firstName.trim() === "" || lastName.trim() === "" || whatsappNumber.trim() === "" || sheinLink.trim() === "") {
//             errorMessage = "Please fill in all required fields.";
//             isValid = false;
//         }

//         // Validate phone number format
//         if (!isValid && whatsappNumber.trim() !== "") {
//             var phoneRegex = /^\+\d{2,3}\d{10}$/; // Updated regex to require +, country code, and 10 digits
//             if (!phoneRegex.test(whatsappNumber)) {
//                 errorMessage += " Please enter a valid WhatsApp number (e.g., +123-456-7890)."; // Updated error message with example
//                 isValid = false;
//             }
//         }

//         // Display error message or proceed with processing
//         if (!isValid) {
//             alert(errorMessage);
//         } else {
//             createRecordInFirebase(firstName, lastName, whatsappNumber, sheinLink);

//             // Display a confirmation message to the user
//             alert("Order placed successfully!");
//         }
//     });

//     function createRecordInCSVFile(firstName, lastName, whatsappNumber, sheinLink) 
//     }
// });