---
title: The problem with caching 
author: Lisa Chan
authorURL: https://www.linkedin.com/in/lisa-chan-b448ab1b/
authorFBID: 522880964
---

Now got new problem: updating the S3 bucket isn't updating the site. Of course it's because the bloody Cloudfront distribution is still serving the old files  - because it caches a response from S3 for 24 hours, so if I update my site within that timeframe, it's not going to show. 

<!--truncate-->

Praise the internet gods for [Stack Overflow](https://stackoverflow.com/questions/30154461/aws-cloudfront-not-updating-on-update-of-files-in-s3), which then led me here to [AWS docs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html). Apparently the free tier is up to a 1000 invalidations a month which is plenty. 