Use this workspace to define any infrastructure needs. Off the top of my head
this may include:

- S3 to dump built assets
- API gateway in front of S3
- Route53 to point at a deployment URL
- Lambda to house API
- Key value store to dump all of the storage
- how to websockets even work? Do I actually need to run an EC2 / ELB?
