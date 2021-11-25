# Table of Contents
[[_TOC_]]
# Deploy new image into Dev1 environment

## Go to the "Nmc custom theming" project in Gitlab

URL: https://gitlab.devops.telekom.de/nextmagentacloud/themes

## Tag the code

1. Go to the *Repository* menu and click on *Tags*
![Tags menu](./img/tags.jpg)
1. Click on *New tag*
![New tag](./img/tags2.jpg)
1. Fill in the *Tag name* with the name of the tag. The string have to start with `dev1-`
  * *Create from*: `master`
  *  *Message*: Here add some comment to the tag
![New tag](./img/tags3.jpg)
4. Click on *Create tag*

Now the pipeline **starts automatically** to 
1. Create a new image from the tagged code
2. Deploy the new image to dev1
