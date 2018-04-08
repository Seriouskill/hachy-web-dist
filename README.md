# Hachy Web Dist
This is the deployment repo for Hachy Web, please refer to [Hachy-Web](https://github.com/hachyEgg/hachy-web) for the web app. 

### Deployment
Upon finishing the Ng build under [Hachy-Web](https://github.com/hachyEgg/hachy-web), a folder called "dist would appear under the root folder, copy content of such folder into this repo, and push. Azure Development Environment is set to sync with this repo, wait for few seconds, the change would appear"

### Azure Development Set Up: 
1. Go on [Azure Portal](http://portal.azure.com), log in
2. and Console->Create Web App->create a windowsOS based web app
3. In the newly created app, click Deployment Options->setup->set up with external repository
4. Put this git address: `https://github.com/hachyEgg/hachy-web-dist.git` or the link of your repository into the repository address blank