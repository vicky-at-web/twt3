const tweets = document.querySelector('#submit');
const allTweets = document.querySelector('#allTweets');

tweets.addEventListener('submit', function (e) {

    e.preventDefault();
    const user = tweets.elements.in;
    const tweet = tweets.elements.pass;
    addTweet(user.value, tweet.value);
    user.value = '';
    tweet.value = '';

});

const addTweet = (user, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    const btn1 = document.createElement('button');

    newTweet.setAttribute('class', 'p-2');
  
    btn1.textContent = 'delete';
    btn1.setAttribute('class', 'btn btn-primary');
    btn1.style.marginLeft = '10px';
    btn1.addEventListener('click', function () {
        newTweet.remove();
    })

    const editbtn = document.createElement('button');
    editbtn.textContent = 'edit';
    editbtn.setAttribute('class', 'btn btn-secondary');
    editbtn.style.marginLeft = '10px';

    const btn2 = document.createElement('button');
    btn2.textContent = 'edit content';
    btn2.setAttribute('class', 'btn btn-secondary');
    btn2.style.marginLeft = '10px';
    btn2.addEventListener('click', function () {
        bTag.contentEditable = true;


    })
    const btn3 = document.createElement('button');
    btn3.textContent = 'edit current status';
    btn3.setAttribute('class', 'btn btn-secondary');
    btn3.style.marginLeft = '10px';
    btn3.addEventListener('click', function () {
        newTweet.contentEditable = true;
    })

    const btn4 = document.createElement('button');
    btn4.textContent = 'done';
    btn4.setAttribute('class', 'btn btn-secondary');
    btn4.style.marginLeft = '10px';
    btn4.addEventListener('click', function () {
        bTag.contentEditable = false;
        newTweet.contentEditable = false;
        btn2.remove();
        btn3.remove();
        btn4.remove();
        newTweet.append(editbtn);
    })


    bTag.append(user);

    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    allTweets.append(newTweet);
    btn1.contentEditable = false;
    btn2.contentEditable = false;
    btn3.contentEditable = false;
    btn4.contentEditable = false;
    editbtn.contentEditable = false;
    newTweet.append(btn1);
    newTweet.append(editbtn);
    editbtn.addEventListener('click', function () {
        newTweet.append(btn2);
        newTweet.append(btn3);
        newTweet.append(btn4);
        editbtn.remove();
    })
}







