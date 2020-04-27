## Instructions for Team Members

1. Install NodeJS https://nodejs.org/en/
2. Open Terminal
3. cd to a folder where you want the project folder to be.
For example,
```bash
cd Desktop/cs639
```
4. Install expo commmand line tool, type following command
```bash
npm install expo-cli --global
```
5. In terminal, type following command
```bash
git clone https://github.com/saraluk/cs639-apartment-react-native-project.git
```
6. cd into cs639-apartment-react-native-project
```bash
cd cs639-apartment-react-native-project
```
7. Install Dependencies
```bash
npm install
```
8. To start working on a feature, create a new local branch in your computer **important !**
```bash
git checkout -b feat/[branch-name]
```
9. To create your local branch in Github
```bash
git push --set-upstream origin feat/[branch-name]
```
10. Start expo
```bash
expo start
```
11. Open expo client on a device.Scan the QR code.

### Begin Development
- Open project in Text Editor (VSCode)
```bash
code .
```
- Make changes
- Stage and Commit Changes 
```bash
git add .
git commit -m [commit-message]
git push
```
### To get the most update changes from Master branch to your branch
```bash
git fetch
git merge origin/master
```
There might be confilcts, after they are fixed, stage and commit changes again
```bash
git add .
git commit -m [commit-message]
git push
```
### After your branch has been merged to Master branch, do these:
```bash
git checkout master
git pull
```

Now your local repository has the most updated code from Master branch, then create new branch to work on something else
(Do not use the branch that has already been merged, create new branch)
```bash
git checkout -b feat/[branch-name]
```
