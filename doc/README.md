# Table of Contents
[[_TOC_]]
# Deploy new image into Dev1 environment

## 1. Go to the "Nmc custom theming" project in Gitlab

URL: https://gitlab.devops.telekom.de/nextmagentacloud/themes

## 2. Tag the code

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

# How to check the status of the pipeline

## 1. Go to the "Nmc custom theming" project in Gitlab

URL: https://gitlab.devops.telekom.de/nextmagentacloud/themes

## 2. Search for the pipeline

1. Go to the *CI/CD* menu and click on *Pipelines*
![Pipeline menu](./img/pipelines1.jpg)
1. In the page of pipelines you will see
    * the name of the *Tag* under **Commit**
    * the Pipeline ID
    * and the status of the Jobs for each stage under **Stages**. Here if everything is green then the pipeline finished without error and the new image is deployed successfuly into dev1
![Pipeline page](./img/pipelines2.jpg)
  Click on the pipeline ID to get inside the pipeline.

## 3. Check the status of the pipeline

1. Inside the pipeline you will see
  * the name of the **Tag**
  * **build-image** is the job to create a new image from the code
  * **deploy-dev1** is the job to deploy the new image to dev1 environment
![Inside the pipelin](./img/pipelines3.jpg)
  * If you see a **green checkmark** for the particular job then it means the job finished successufuly
  * If you see a **pause** sign then it means the job is not jet started
  * If you see a **play** sign then it means the job runs
  * If you see a **red X** sign then it means the job failed
4. This is the pipeline flow for the image building process. To see the **Lint** and **Build** job you have to click on the **Downstream** job indicated below
![Inside the pipelin](./img/pipelines4.jpg)
4. This is the pipeline flow for the image building process. To see the **Deploy** job you have to click on the **Downstream** job indicated below
![Inside the pipelin](./img/pipelines5.jpg)
This will be important also for a rollback process.

# How to rollback
## 1. Go to the "Nmc custom theming" project in Gitlab

URL: https://gitlab.devops.telekom.de/nextmagentacloud/themes

## 2. Search for the pipeline

1. Go to the *CI/CD* menu and click on *Pipelines*
![Pipeline menu](./img/pipelines1.jpg)
1. In the page of pipelines you will see
    * the name of the *Tag* under **Commit**
    * the Pipeline ID
    * and the status of the Jobs for each stage under **Stages**. Here if everything is green then the pipeline finished without error and the new image is deployed successfuly into dev1
![Pipeline page](./img/pipelines2.jpg)
  Search for the version you would like to deploy by the name of the Tag.
  Click on the **Pipeline ID** to get inside the pipeline.
1. Inside the pipeline you will see
  * the name of the **Tag**
  * **build-image** is the job to create a new image from the code
  * **deploy-dev1** is the job to deploy the new image to dev1 environment
![Inside the pipelin](./img/pipelines3.jpg)

## 3. Rebuild the image

1. You have to click on the **Downstream** job indicated for *image building* below
![Inside the pipelin](./img/pipelines4.jpg)
1. Click on the icon with the arrows right to the **image build** job
![Inside the pipelin](./img/pipelines6.jpg)
1. The icon will switch to ![Inside the pipelin](./img/pipelines7.jpg)
1. Wait until you see the green checkmark again

The Image building is done.

## 4. Redeploy the image

1. You have to click on the **Downstream** job indicated for *deployment orchestration* below
![Inside the pipelin](./img/pipelines8.jpg)
1. Click on the icon with the arrows right to the **deploy-stage** job
![Inside the pipelin](./img/pipelines9.jpg)
1. The icon will switch to ![Inside the pipelin](./img/pipelines10.jpg)
1. Wait until you see the green checkmark again

The Image deployment is done.
