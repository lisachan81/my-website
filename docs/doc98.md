---
id: doc98
title: Domain management and hosting
---

This static website is hosted on Amazon S3, with 2 registered domains (lisachan.net and icanlearnhowtocode.net) on Amazon Route 53. The root domain is lisachan.net, and this is the S3 bucket where all the static website files reside. All other domains and subdomain buckets are simply setup to redirect to the lisachan.net root domain bucket. Server access logging has been enabled for both root domains' buckets and logs themselves are stored in the "logs.lisachan.net" bucket and the "logs.icanlearnhowtocode.net" buckets.  

Route 53 maintains the mapping between alias records (using the S3 website endpoints) and the IP addresses where the S3 buckets reside. 2 aliases were created for each registered domain - one for the root domain (lisachan.net, icanlearnhowtocode.net), and one for the subdomain (www.lisachan.net, www.icanlearnhowtocode.net). 

The developer guide is available on [Amazon docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html). 

It is important to note that when creating the alias record, the alias target selected is the S3 endpoint for the Region where the bucket was created (selected from a dropdown) E.g. "s3-website-us-west-2". However, this will have to change to point to the Cloudfront distribution, when it is implemented. I cover this in the next section. 
