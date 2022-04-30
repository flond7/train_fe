# NgStarter13
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.
 
## Ng commands
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng generate component components/component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. 
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.  
  
## Github
git init  
git add README.md   
git config --global http.proxy http[s]://username:password@proxyipaddress:portnumber  
git config --global user.name "NICK"  
git config --global user.mail mail@gmail.com  
git config --global user.password *********  
git commit -m "first commit"  
git branch -M master  
git remote add origin https://github.com/flond7/angular-startingPoint.git  
git push -u origin master 
  
git branch (check branch name)  
git branch -mv origin master (change name from origin to master)  
  
git remote -v (check origin)  
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git (change repository)  
  
## DEPLOY ON APACHE
### On the front end side
- if on the server the app is on a subfolder (ex: /var/www/html/NAME-OF-THE-APP) in index.html change the base parameter  
  <base href="/NAME-OF-THE-APP/">  
- ng build --prod   
  builds in dist folder everything you need  
  - in case of exeeded budget error in angular.json  
    change the maximumError property in budget (and check if there is unused code you can delete)  
- add an .htaccess file to the dist folder (search on github, canalette-frontend for a template)  
  
### On the server
- copy the dist folder in /var/www/html/ and check the permissions and eventually change permissions to amministratore  
  sudo chown -R amministratore:amministratore /var/www/html/NAME-OF-THE-APP

- in /etc/apache2/apache2.conf add
  <Directory "/var/www/html/name-of-the-app">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>
  
### Test frontend
- PROBLEM: doesn't find runtime.js or other files, check if base is correct in index.html

SASS
- ~ (alt126) will tell Sass to look in the src/ 