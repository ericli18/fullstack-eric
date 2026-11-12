# Full stack course

## Setup and first steps

**If you can already make a pull request to this repo, you don't have to do the following**


### Github account + install git
Just make one + probably google this

### Setting up git
The commands below will configure your information for git. Use your own name obv.

```sh
git config --global user.name "Eric Li"
git config --global user.email "eric.li.8736@gmail.com"

git config --global init.defaultBranch main

# If you are on macOS, remove the annoying DS_STORE meta files
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

Verify that things are working

```sh
git config --get user.name
git config --get user.email
```

### Link git to github
```sh
# If this **returns** "No such file or directory"
ls ~/.ssh/id_ed25519.pub
# Then, run this, just hit enter enter enter take all defaults
ssh-keygen -t ed25519
```

**On Github.com**
Go to Profile>Settings>SSH and GPG Keys>New SSH key

Name it whatever you want, key type is authentication key, and past in the result from
```sh
cat ~/.ssh/id_ed25519.pub

# TO automatically copy on linux
cat ~/.ssh/id_ed25519.pub | wl-copy

# To automatically copy on macOS (I think)
cat ~/.ssh/id_ed25519.pub | pb-copy
```

Now follow [github's instructions for testing](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=linux)
