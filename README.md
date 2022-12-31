# Landing site for mitchelbaker.com 

### todos

- develop branch setup with docker-compose and client app. next step is to setup nginx server block for mitchelbaker.com and be able to see client running. 
- will need to create separate server blocks for mitchelbaker.com (perhaps staging.mitchelbaker.com), and for photos.mitchelbaker.com
- site deployed on remote host, but need to make it set to the correct branch for pipeline purposes. 

### workflow 
- changes made locally go onto develop. Once I want to test these changes, push to staging. Only from staging are changes merged into main by a pull request.