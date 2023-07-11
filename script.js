function getData() {
    var url = "https://reqres.in/api/users?page=1";        // GIVEN URL to fetch user data from API
    fetch(url)                                             // to get the specified url
        .then((response) => {
            return response.json();                           //to convert response into json format
        })
        .then((data) => {
            console.log(data);      // to take the retrived data to the console for debugging process
            var users = data.data;    //to get the data
            var userGrid = document.getElementById("user-grid");     //container element for user data
            userGrid.innerHTML = "";                                  //clear container before adding new user data
            users.forEach((user, index) => {
                //creating elements for each user card
                var userCard = document.createElement("div");
                userCard.className = "user-card";
                var userAvatar = document.createElement("img");
                userAvatar.className = "user-avatar";
                userAvatar.src = user.avatar;
                userAvatar.alt = "User Avatar";
                var userDetails = document.createElement("div");
                userDetails.className = "user-details";
                var userName = document.createElement("p");
                userName.className = "user-name";
                userName.innerText = user.first_name + " " + user.last_name;
                var userEmail = document.createElement("p");
                userEmail.className = "user-email";
                userEmail.innerText = user.email;
                userDetails.appendChild(userName);
                userDetails.appendChild(userEmail);
                userCard.appendChild(userAvatar);
                userCard.appendChild(userDetails);
                userGrid.appendChild(userCard);          // adding user card data to the container
                userCard.classList.remove("hidden");     // display the user card by removing te hidden class
            });
        });
}
