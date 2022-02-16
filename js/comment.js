// add comment to comment box----------

// --------step:1- add button eventListener------
document.getElementById('submit-comment').addEventListener('click', function(){

    // -----------step:2- get user comment-----
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;

    // ------step:3- create comment paragraph-----------

    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;


    // --------step:4- append the comment--------

    const commentContainer = document.getElementById('comment-container');

    commentContainer.appendChild(newComment);

    // ------step:5 - clean the comment box after add comment value-------
    commentBox.value = '';
})