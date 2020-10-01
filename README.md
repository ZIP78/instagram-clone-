![Imgur Image](https://i.imgur.com/for6sCA.png)

## Whoopiegram
Whoopiegram is a react / rails clone of instagram. This app should allow the user to post funny pictures and videos, like, comment, and follow other users. If you're ever feeling down Whoopiegram is there lift up the mood. 

## Link
[Live Demo](https://whoopiegram.herokuapp.com/#/login)

## Technologies used 
**Front end** 
  * JavaScript
  * React-Redux 
  * CSS
  
**Back end**
  * Ruby on Rails 
  * PostgreSQL 
  
## Technical Challenges 
 #### Updating the following and followers information for the logged in user 
 Each user state had a following state to see how many users the current logged in user was following. However, in order to know how many users were following a particular user  (follower count) and to keep the state normalized avoiding time complexity of O(n^2) of n number of users. I made a api to get all the users following another user, then then used filter to see if they followed that particular user using the array.length to count the number of followers. I did this both for the current user and other user profiles. 
 ```javascript
    let postsByUser;
    let followers;
    let profileInfo;
    if (profileUser.username === loggedInUser.username) {
      postsByUser = Object.values(posts).filter(
        (post) => post.user_id === loggedInUser.id
      );

      followers = Object.values(this.props.follows).filter((follow) => {
        return follow.followed_user_id === loggedInUser.id;
      });

      profileInfo = (
        <div className="profile_page_detail_container_other">
          <div className="post_followers_container">
            <div className="profile_page_posts">{postsByUser.length} posts</div>
            <div className="profile_page_followers">
              {" "}
              {followers.length} followers
            </div>
            <div className="profile_page_following">
              {Object.values(loggedInUser.following).length} Following
            </div>
          </div>
        </div>
      );
    } else {
      postsByUser = Object.values(posts).filter(
        (post) => post.user_id === profileUser.id
      );

      followers = Object.values(this.props.follows).filter((follow) => {
        return follow.followed_user_id === profileUser.id;
      });

      profileInfo = (
        <div className="profile_page_detail_container_other">
          <div className="post_followers_container">
            <div className="profile_page_posts">{postsByUser.length} posts</div>
            <div className="profile_page_followers">
              {followers.length} followers
            </div>
            <div className="profile_page_following">
              {Object.values(profileUser.following).length} Following
            </div>
          </div>
        </div>
      );
    }

```
![Imgur Image](https://i.imgur.com/hAsmW1h.png)

  
## Feature Highlights 
 ### Page Detail
![](https://media.giphy.com/media/SlWgB2u4EJufBmFSsR/giphy.gif)

If you click on the comment icon it will take you to the detail page of the post.

 ### Upload pictures or Videos  
 ![](https://media.giphy.com/media/rHUwjMDR1JZvsCfeSm/giphy.gif)
 
 Click on the upload icon to post a picture or video MUST have a caption along with the post.
 
  ### Darkmode
  ![](https://media.giphy.com/media/egYqFYzarEPsMJ5JOw/giphy.gif)
  
  In the profile page in the settings you can change the tone of the website 
  
 ## More info about the developer 
 
  [Linkedin](https://www.linkedin.com/in/paulkim963/)
 



  
