---
title: Tricked by AWS
author: Lisa Chan
authorURL: https://www.linkedin.com/in/lisa-chan-b448ab1b/
authorFBID: 522880964
---

So yesterday I implemented part of a quickstart resource that creates webhook endpoints and deploys an AWS lambda function to push my source code to S3. Everything was fine up until after I'd created all the resources in the Cloudformation template 

<!--truncate-->

But the guide abruptly stops giving explicit instructions in the middle, and says surreptitiously that creating the webhook depends on your Git provider. Ok fine, so I went ahead and created the webhook on Github... went to the next step in the quick start guide, and then ended up needing to create a CodeCommit repo and a CodePipeline. The guide had so many nested instructions, which led to other pre-requisites that at one point I forgot WTF I was even doing a particular step for. 

Much like how IF statements can get so nested that the actual code is living on the right scroll bar and you've forgotten what feature you're building. 

So anyway this was what I was supposed to build...
![architecture](assets/webhook_architecture.PNG)

But after I'd setup the AWS CodeCommit repo, git-ed my source code from my local AND built a pipeline that successfully deployed from the repo into the S3 bucket, I suddenly realized I'd achieved what I set out to do by trying to implement the architecture above, only I'd done it with 100% native AWS components!! 

![tricked](assets/tricked.PNG) goddamn you AWS... 

Now I'm wondering whether to continue this webhook nonsense or just setup CodeBuild to complete my CI/CD...
