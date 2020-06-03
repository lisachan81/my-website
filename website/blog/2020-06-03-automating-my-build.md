---
title: Automating my build
author: Lisa Chan
authorURL: https://www.linkedin.com/in/lisa-chan-b448ab1b/
authorFBID: 522880964
---

I'm starting to realize that Github documentation isn't as noob friendly as AWS' is. Maybe deciding to automate CI using Github actions was the wrong choice. My non-technical brain is beginning to buckle under the weight of these goddamn yaml files.

<!--truncate-->

To make matters worse, I can't easily test the workflows because Github actions can only be triggered programmatically via the API. There's only a tiny `re-run jobs` button next to the Actions section, but for some reason, these aren't showing the latest updates to the yaml files. I must be doing some shit wrong

few hours later...

Ok I give up. The build is still failing despite numerous attempts to help the yaml file find it's way to the package.json. fuckit let's try AWS webhooks

![node run](assets/blog_cifail.png) 