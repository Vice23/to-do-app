// query the DOM for the form element
const formElement = document.querySelector('form');
console.log(formElement);

// add a submit event listener on the form
formElement.addEventListener('submit', function(e) {

    // stop the page from refreshing when the form is submitted
    e.preventDefault();
    // log out the event object which is generated when the form is submitted:
    console.log(e);

    // alert(`You've submitted this form!`);

    // query the DOM for the input element and check whether it's empty
    const inputElement = document.getElementById('toDoItem');
    console.log(inputElement);
    
    // only if the user has entered an actual task (AKA input is not empty):
    
    if (inputElement.value !== '') {

        console.log('congrats on entering a value!')

        // grab the user's TO DO item from the form input
        console.log(inputElement.value);
        //create an element that represents the text we have to add (our task/to do) & clear the input

            // create an li:
            const liElement = document.createElement('li');
            console.log(liElement);

            //creating an 'x' to remove
            const removeButton = document.createElement('button');
            removeButton.innerText = "X";
            // removeButton.appendChild(textX);

            console.log(removeButton);
            
            // include a checkbox icon within the li
            liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;

       

            //we will create a text node -- this can be added on to properties that are already there (otherwise two innerHTML/text content would override one another)
            const taskContent = document.createTextNode(inputElement.value);

            //append a value and the remove button to the list element, putting the two together
            liElement.appendChild(taskContent);
            liElement.appendChild(removeButton);

            //append a value to the list element, putting the two together
            // removeButton.appendChild(taskContent);

            // add the li element to the ul
            document.querySelector('ul').appendChild(liElement);


            // clear the input 
            inputElement.value = '';

    } else {
        alert("Please do not leave input empty before submitting the form.")
    }

})


// clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)
    //note - you can only add event listeners to elements which exist in the DON at the time of the code execution
    // this won't work
    //const listElements = document.querySelector('li');

    //event propagation means if you have an event occurring on a child, it will 'bubble' up the generations of the family in the HTML 
        //we can use this to attach a click event listener to the lis that don't exist on the page yet

        const ul = document.querySelector('ul');

        //event.target allows us to to identify the element that triggered a specific event
        // .this keyword wouldn't work as it's 'owned' by the ul -- ask yourself what owns this code/causes this code to run. 
            // Arrow functions bind differently and would bind to the window
        ul.addEventListener('click', function(event) {
            if (event.target.localName === 'i') { //isolates the icon (i) with the localName (so it doesn't interact on, say, the space in between the icons)
                //switch font awesome classes fom 'fa-regular fa-square' to 'fa-regular fa-square-check'
                    //you want to leave the styles work up to css, updating the CLASS needed for the CSS to apply the styles needed
                event.target.classList.toggle('fa-square-check'); //add the checkbox (if this class isn't there, add it)
                event.target.classList.toggle('fa-square'); //remove the checkbox (if this class isn't there, add it)
            }


            //as long as we've clicked on the icon, then: 
            //toggle between checked/unchecked (aka. done vs. not done)
        });

        //if a user clicks the X, than the task is deleted
        ul.addEventListener('click', function(event) {
            if (event.target.localName === 'button') { //isolates the button with the localName (so it doesn't interact on, say, the space in between the buttons)
                //switch font awesome classes fom 'fa-regular fa-square' to 'fa-regular fa-square-check'
                    //you want to leave the styles work up to css, updating the CLASS needed for the CSS to apply the styles needed
                // event.target.classList.toggle('fa-square-check'); //add the checkbox (if this class isn't there, add it)
                // event.target.classList.toggle('fa-square'); //remove the checkbox (if this class isn't there, add it)
                console.log(event);
                //attempting to isolate the list item to delete it - not working
                const listItem = event.target.localName('li');
                console.log(listItem);

                ul.removeChild(event.target.liElement);
            }


            //as long as we've clicked on the icon, then: 
            //toggle between checked/unchecked (aka. done vs. not done)
        });


// BONUS LEVEL:
// add a "Reset" button which clears all of the TO DOs
// add an "Edit task" button
// add a "Remove task" button to each task
// add a congratulations alert when all of the existing TO DOs are checked off 
        //event listener

// add a "Take a break" message if 5 or more tasks are completed