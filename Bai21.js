var users = [
    { name: 'Tom', gender: 'male' },
    { name: 'Maria', gender: 'female' },
    { name: 'Jason', gender: 'male' },
    { name: 'Sora', gender: 'female' },
    { name: 'Teo', gender: 'male' },
];

var userListElement = $('#userList');
var genderFilterElement = $('#genderFilter');


genderFilterElement.on('change', function () {
    var selectedGender = this.value; //male or female
    console.log(selectedGender);
    if (selectedGender == "all") {
        console.log('');
        render(userListElement, users);
    }
    else {
        //write code here
        var filteredUsers = users.filter(function (user) {
            return user.gender === selectedGender;
        });
        console.log(filteredUsers);
        render(userListElement, filteredUsers);
    }
});


function render(parentElement, items) {
    // write code here
    var htmlItems = items.map(function (item) {
        return '<li class="list-group-item">' + item.name + '</li>';
    });
    var htmlText = htmlItems.join('');
    parentElement.html(htmlText);
}

render(userListElement, users);
