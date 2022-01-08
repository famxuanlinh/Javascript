var users = [
    {name: 'Tom', gender: 'male'},
    {name: 'Maria', gender: 'female'},
    {name: 'Jason', gender: 'male'},
    {name: 'Sora', gender: 'female'},
    {name: 'Teo', gender: 'male'},
];

var userList = $('#userList');
var genderFilter = $('#genderFilter');

render(userList, users);

genderFilter.on ('change', function(){
    var selectGender = this.value; //male or female
    //write code here
});

function render(container, items) {
    // write code here
}


