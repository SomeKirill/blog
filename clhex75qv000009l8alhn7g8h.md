---
title: "flaws.cloud walkthrough"
seoTitle: "flaws.cloud walkthrough"
datePublished: Mon May 08 2023 14:10:33 GMT+0000 (Coordinated Universal Time)
cuid: clhex75qv000009l8alhn7g8h
slug: flawscloud-walkthrough
tags: cloud, aws, security, aws-security, cloudsecurity

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683554912156/68ce4e15-1e66-4766-a859-a9f0306d6d0f.png align="center")

This is a mock challenge walkthrough guide for the flAWS challenge created by Scott Piper. The challenge focuses on common mistakes and gotchas when using Amazon Web Services (AWS), and aims to teach participants how to avoid these issues and improve AWS security.

The challenge begins with a welcome message from Scott Piper, who introduces himself as an independent AWS security consultant and offers training to those interested in learning more about AWS security.

The scope of the challenge is a single AWS account, and all challenges are sub-domains of [flaws.cloud](http://flaws.cloud).

The first level of the challenge involves finding the first sub-domain. The hint for this level is to visit Hint 1.

---

Level 1 of the flAWS challenge involves finding the first sub-domain. The first hint provides information about the site [flaws.cloud](http://flaws.cloud), which is hosted as an S3 bucket. The bucket name must match the domain name, and S3 buckets are a global namespace, which means two people cannot have buckets with the same name.

The hint also provides a DNS lookup command to determine the IP address of the site, which can then be used to determine the AWS region it is hosted in. The site's permissions are said to be "a little loose," which may help in finding the sub-domain.

If you need additional help, you can refer to Hint 2 for more guidance.