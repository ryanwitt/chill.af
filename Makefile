
deploy:
	aws --profile ryanwitt s3 sync . s3://chill.af/ --exclude=".git*" --acl public-read
