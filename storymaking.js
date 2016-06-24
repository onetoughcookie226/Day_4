/**
 * Created by vagrant on 6/15/16.
 */
// The story making game
    
//Create a variable and capture input
    //Create a separate variable for each piece of input
    //Let the player know how many questions are left to be answered.
    var questions = 3;
    var questionsLeft = '[there are ' + questions + ' questions left.]';
    var noun = prompt ("what do you like to eat now?" + questionsLeft);
    questions -= 1;
    var questionsLeft = '[there are ' + questions + ' questions left.]';
    var verb = prompt ("what did you do this morning?" +  questionsLeft);
    questions -= 1;
    var questionsLeft = '[there are ' + questions + ' questions left.]';
    var adj = prompt ("How do you feel now?" +  questionsLeft));
//Add an alert to tell the visitors they are finished 
    alert("Well done !! Your story is ready");
// Combine the input with other strings to create a message
    var story = "Last night my " +  adj +  " cat was in the kitchen " +
        verb + "ing" + " . Today, I had " + noun + " for lunch.";
// Print the story to the browser window
    document.write (story);

//Time calculator









