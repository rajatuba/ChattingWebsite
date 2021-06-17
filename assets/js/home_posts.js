{
    //method to submit the form data for new post using AJAx
    let createPost=function(){
        let newPostForm=$('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostForm.serialize(),
                success:function(data){
                    console.log(data.data);
                    let newPost=newPostDOM(data.data.post);
                    $('#posts-list-container > ul').prepend(newPost);
                    deletePost($(' .delete-post-button',newPost));
                },error:function(error){
                    console.log(error.resposeText);
                }
            });
        });
    }

    //method to create a post in DOM
    let newPostDOM=function(post){
        return $(`<li id="post-${post._id}"> 
        <p>
            <small>
                <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
                </small>    
    
            ${post.content}
        <br>
        <small>
            ${post.user.name}
        </small>
        </p>
    
        <div class="post-comments">
                <form action="/comments/create" method="post">
                    <input type="text" name="content" placeholder="Type here to add Comment...." >
                    <input type="hidden" name="post" value="${post._id}">
                    <input type="submit" value="Add Comment">
                </form>
    
            <div class="post-comments-list">
                <ul id="post-comments-${post._id}">
                </ul>
            </div>
        </div>
    </li>`);
    }

    //method to delete post from DOM
    let deletePost=function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                    console.log(data);
                    $(`#post-${data.data.post_id}`).remove();
                },error:function(error){
                    console.log(error.resposeText);
                }
            });
        });
    }
    createPost();
}